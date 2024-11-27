export const COOKIE_NAMES = {
  AUTH_TOKEN: "authToken",
  REFRESH_TOKEN: "refreshToken",
  COMPANY_DATA: "COMPANY_DATA",
};

export const COOKIE_OPTIONS = {
  httpOnly: true,
  secure: process.env.NODE_ENV === "production",
  sameSite: "strict",
};
