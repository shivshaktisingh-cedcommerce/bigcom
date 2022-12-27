import { BaseErrorResponse } from 'types/server/auth';

export function isApiError(error: any): error is BaseErrorResponse {
  return error.hasOwnProperty('success') && 'message' in error;
}
