export type RegisterUserData = {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
};

export type RegisterUserResponse = {
  user: {
    name: string;
    email: string;
    updated_at: string;
    created_at: string;
    id: number;
  };
  token: string;
};

export type GetUserResponse = {
  user: {
    id: number;
    name: string;
    email: string;
    email_verified_at: string | null;
    created_at: string;
    updated_at: string;
    login_attempts: number;
    locked_until: string | null;
  };
};
