/**
 * Gets a cookie value by name
 * @param name - The name of the cookie to retrieve
 * @returns The cookie value or null if not found
 */
export function getCookie(name: string): string | null {
  if (typeof document === 'undefined') {
    return null;
  }

  const nameEQ = name + '=';
  const cookies = document.cookie.split(';');

  for (let i = 0; i < cookies.length; i++) {
    let cookie = cookies[i];
    while (cookie.charAt(0) === ' ') {
      cookie = cookie.substring(1, cookie.length);
    }
    if (cookie.indexOf(nameEQ) === 0) {
      return decodeURIComponent(cookie.substring(nameEQ.length, cookie.length));
    }
  }

  return null;
}

/**
 * Sets a cookie with optional configuration
 * @param name - The name of the cookie
 * @param value - The value to store
 * @param options - Optional cookie configuration (expires, path, domain, secure, sameSite)
 */
export function setCookie(
  name: string,
  value: string,
  options?: {
    expires?: Date | number; // Date object or days from now
    path?: string;
    domain?: string;
    secure?: boolean;
    sameSite?: 'Strict' | 'Lax' | 'None';
  }
): void {
  if (typeof document === 'undefined') {
    return;
  }

  let cookieString = `${name}=${encodeURIComponent(value)}`;

  if (options) {
    // Handle expires
    if (options.expires) {
      let expiresDate: Date;
      if (typeof options.expires === 'number') {
        expiresDate = new Date();
        expiresDate.setTime(expiresDate.getTime() + options.expires * 24 * 60 * 60 * 1000);
      } else {
        expiresDate = options.expires;
      }
      cookieString += `;expires=${expiresDate.toUTCString()}`;
    }

    // Handle path
    if (options.path) {
      cookieString += `;path=${options.path}`;
    }

    // Handle domain
    if (options.domain) {
      cookieString += `;domain=${options.domain}`;
    }

    // Handle secure
    if (options.secure) {
      cookieString += ';secure';
    }

    // Handle sameSite
    if (options.sameSite) {
      cookieString += `;sameSite=${options.sameSite}`;
    }
  }

  document.cookie = cookieString;
}

/**
 * Deletes a cookie by setting its expiration date in the past
 * @param name - The name of the cookie to delete
 * @param path - Optional path (should match the path used when setting the cookie)
 * @param domain - Optional domain (should match the domain used when setting the cookie)
 */
export function deleteCookie(name: string, path?: string, domain?: string): void {
  if (typeof document === 'undefined') {
    return;
  }

  let cookieString = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 UTC`;

  if (path) {
    cookieString += `;path=${path}`;
  }

  if (domain) {
    cookieString += `;domain=${domain}`;
  }

  document.cookie = cookieString;
}

