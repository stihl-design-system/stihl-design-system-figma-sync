/** Shortcuts stay out of the way while someone types or a dialog is open */
export function ignoresShortcuts(event: KeyboardEvent): boolean {
  if (event.ctrlKey || event.metaKey || event.altKey) {
    return true;
  }
  if (document.querySelector('dialog[open]')) {
    return true;
  }
  const target = event.target;
  if (!(target instanceof HTMLElement)) {
    return false;
  }
  if (target.isContentEditable || target instanceof HTMLTextAreaElement) {
    return true;
  }
  if (target instanceof HTMLInputElement) {
    return !['checkbox', 'radio', 'range'].includes(target.type);
  }
  // Space activates the focused control, it must not toggle the blink as well
  return (
    event.key === ' ' &&
    Boolean(target.closest('button, a, input, summary, [role="slider"]'))
  );
}
