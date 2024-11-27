export type USER = {
  name: string;
  password: string;
  email: string;
};
export type SIGNUP_PAYLOAD = {
  email?: string;
  name?: string;
  password?: string;
};
export type SIGNUP_ERRORS = {
  email?: string;
  password?: string;
  name?: string;
};
