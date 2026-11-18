/** Compares in constant time, so the response time does not reveal how much of a secret matched */
export async function safeEqual(a: string, b: string): Promise<boolean> {
  const encoder = new TextEncoder();
  const [left, right] = await Promise.all([
    crypto.subtle.digest('SHA-256', encoder.encode(a)),
    crypto.subtle.digest('SHA-256', encoder.encode(b)),
  ]);
  const x = new Uint8Array(left);
  const y = new Uint8Array(right);
  let difference = 0;
  for (let i = 0; i < x.length; i++) {
    difference |= (x[i] ?? 0) ^ (y[i] ?? 0);
  }
  return difference === 0;
}

/** Basic authentication with the shared login. Fails closed while no password is configured. */
export async function hasLogin(
  request: Request,
  user: string | undefined,
  password: string | undefined
): Promise<boolean> {
  const [scheme, encoded] = (request.headers.get('authorization') ?? '').split(
    ' '
  );
  if (!user || !password || scheme?.toLowerCase() !== 'basic' || !encoded) {
    return false;
  }
  let decoded: string;
  try {
    decoded = new TextDecoder().decode(
      Uint8Array.from(atob(encoded), (char) => char.charCodeAt(0))
    );
  } catch {
    return false;
  }
  const separator = decoded.indexOf(':');
  if (separator < 0) {
    return false;
  }
  const [userMatches, passwordMatches] = await Promise.all([
    safeEqual(decoded.slice(0, separator), user),
    safeEqual(decoded.slice(separator + 1), password),
  ]);
  return userMatches && passwordMatches;
}

/** Bearer token of the pipeline that publishes reviews */
export async function hasToken(
  request: Request,
  token: string | undefined
): Promise<boolean> {
  const [scheme, value] = (request.headers.get('authorization') ?? '').split(
    ' '
  );
  if (!token || scheme?.toLowerCase() !== 'bearer' || !value) {
    return false;
  }
  return safeEqual(value, token);
}
