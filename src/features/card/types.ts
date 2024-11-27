export type USER = {
  name: string;
  password: string;
  email: string;
};

export type SOCIAL_LINK = {
  title: string;
  href: string;
};

export type PROFILE = {
  id: number;
  name: string;
  email: string;
  phone: string | null;
  status: string | null;
  biography: string | null;
};
