import { parseCookies, setCookie, destroyCookie } from "nookies";

export const getCookieValue = (key: string, ctx?: any) => {
  const cookies = parseCookies(ctx);
  return cookies[key] || null;
};

export const setCookieValue = (key: string, value: string, options?: any) => {
  setCookie(null, key, value, { path: "/", ...options });
};

export const deleteCookie = (key: string, ctx?: any) => {
  destroyCookie(ctx, key);
};
