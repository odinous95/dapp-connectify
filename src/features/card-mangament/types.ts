export type USER = {
  name: string;
  password: string;
  email: string;
};

export type PLATFORM = {
  id: number;
  userId: number;
  platformName: string;
  platformUrl: string;
};

export type PROFILE = {
  id: number;
  name: string;
  email: string;
  phone: string | null;
  status: string | null;
  biography: string | null;
};
