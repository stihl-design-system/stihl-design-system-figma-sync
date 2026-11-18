#!/usr/bin/env bash
# Checks a deployed review page: nothing is served without the login, and the
# worker reaches its database. Usage: REVIEW_PUBLISH_TOKEN=... review/smoke.sh <origin>
set -euo pipefail

origin="${1:?Usage: review/smoke.sh <origin>}"

expect_status() {
  local expected="$1" path="$2" status
  status=$(curl -s -o /dev/null -w '%{http_code}' "$origin$path")
  if [ "$status" != "$expected" ]; then
    echo "FAIL $path answered $status without a login, expected $expected" >&2
    exit 1
  fi
  echo "ok   $path answers $status without a login"
}

expect_status 401 /
expect_status 401 /api/reviews
expect_status 401 /latest
expect_status 401 /assets/does-not-exist.js

health=$(curl -s -H "Authorization: Bearer ${REVIEW_PUBLISH_TOKEN:?REVIEW_PUBLISH_TOKEN is required}" "$origin/api/health")
if [[ "$health" != *'"ok":true'* ]]; then
  echo "FAIL /api/health answered: $health" >&2
  exit 1
fi
echo "ok   /api/health: $health"
