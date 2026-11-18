/**
 * The browser login (Basic authentication) has no logout. A request with
 * explicit wrong credentials makes the browser discard the login it remembers.
 * Resolves to false when the browser kept the login anyway.
 */
export async function logOut(): Promise<boolean> {
  await new Promise<void>((resolve) => {
    const request = new XMLHttpRequest();
    request.open('GET', '/api/logout', true, 'logout', 'logout');
    request.onloadend = () => resolve();
    request.send();
  });
  // Answers without a login prompt, so it shows what the browser still sends
  const response = await fetch('/api/session', { cache: 'no-store' });
  const session = (await response.json()) as { loggedIn: boolean };
  return !session.loggedIn;
}
