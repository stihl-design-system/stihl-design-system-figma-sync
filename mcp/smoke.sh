#!/usr/bin/env bash
# Smoke test against a running MCP endpoint: initialize, list tools, call each tool once.
set -u
URL="${1:-http://localhost:8787/mcp}"
H=(-s -H 'Content-Type: application/json' -H 'Accept: application/json, text/event-stream')

call() {
  curl "${H[@]}" -X POST "$URL" -d "$1"
  echo
}

echo '--- initialize'
call '{"jsonrpc":"2.0","id":1,"method":"initialize","params":{"protocolVersion":"2025-06-18","capabilities":{},"clientInfo":{"name":"smoke","version":"0"}}}' | head -c 600; echo
echo '--- tools/list'
call '{"jsonrpc":"2.0","id":2,"method":"tools/list","params":{}}' | node -e "let s='';process.stdin.on('data',d=>s+=d).on('end',()=>{const r=JSON.parse(s);console.log(r.result.tools.map(t=>t.name).join(', '))})"
echo '--- resources/list'
call '{"jsonrpc":"2.0","id":3,"method":"resources/list","params":{}}' | node -e "let s='';process.stdin.on('data',d=>s+=d).on('end',()=>{const r=JSON.parse(s);console.log(r.result.resources.length+' resources, first: '+JSON.stringify(r.result.resources[0]))})"
echo '--- list_documents component'
call '{"jsonrpc":"2.0","id":4,"method":"tools/call","params":{"name":"list_documents","arguments":{"category":"component"}}}' | node -e "let s='';process.stdin.on('data',d=>s+=d).on('end',()=>{const r=JSON.parse(s);console.log(r.result.content[0].text.slice(0,900))})"
echo '--- search_documentation "button loading state"'
call '{"jsonrpc":"2.0","id":5,"method":"tools/call","params":{"name":"search_documentation","arguments":{"query":"button loading state","limit":5}}}' | node -e "let s='';process.stdin.on('data',d=>s+=d).on('end',()=>{const r=JSON.parse(s);console.log(r.result.content[0].text)})"
echo '--- get_document button chapter overview'
call '{"jsonrpc":"2.0","id":6,"method":"tools/call","params":{"name":"get_document","arguments":{"id":"DSButton","chapter":"overview"}}}' | node -e "let s='';process.stdin.on('data',d=>s+=d).on('end',()=>{const r=JSON.parse(s);console.log(r.result.content[0].text.slice(0,1200))})"
echo '--- get_image'
call '{"jsonrpc":"2.0","id":7,"method":"tools/call","params":{"name":"get_image","arguments":{"image":"components/button/button-168-3988.png"}}}' | node -e "let s='';process.stdin.on('data',d=>s+=d).on('end',()=>{const r=JSON.parse(s);const c=r.result.content[0];console.log(c.type, c.mimeType, (c.data||'').length+' base64 chars', r.result.isError?'ERROR':'')})"
echo '--- resources/read stihl-ds://foundation/spacing'
call '{"jsonrpc":"2.0","id":8,"method":"resources/read","params":{"uri":"stihl-ds://foundation/spacing"}}' | node -e "let s='';process.stdin.on('data',d=>s+=d).on('end',()=>{const r=JSON.parse(s);console.log(r.result.contents[0].text.slice(0,400))})"
echo '--- static assets'
for p in / /index.md /llms.txt /components/button.md /components/button/button-168-3988.png /nope.md; do
  printf '%s -> ' "$p"; curl -s -o /dev/null -w '%{http_code} %{content_type}\n' "${URL%/mcp}$p"
done
echo '--- GET /mcp from a browser'
curl -s -o /dev/null -w '%{http_code} %{redirect_url}\n' -H 'Accept: text/html' "$URL"

echo '--- verdict'
if call '{"jsonrpc":"2.0","id":9,"method":"tools/list","params":{}}' | grep -q '"get_document"'; then
  echo "OK: $URL answers MCP requests"
else
  echo "FAIL: $URL does not list the expected tools" >&2
  exit 1
fi
