export interface BaseServerResponse<T> {
  success: boolean;
  code: string;
  message: string;
  data: T;
  ip: string;
}

export type BaseErrorResponse = BaseServerResponse<ErrorData>;

export interface ErrorData {
  errors: Array<string>;
}

export interface RegisterBody {
  name: string;
  email: string;
  password: string;
}

export interface LoginBody {
  email: string;
  password: string;
}

export interface ResendVerificationMailBody {
  email: string;
}
