import {
  LOGIN_API,
  REGISTER_API,
  RESEND_VERIFICATION_MAIL_URL,
  USER_DETAILS_API_URL,
} from 'api/ApiConstants/BigcommerceHubspotApiConstants';
import { rest } from 'msw';
import {
  LoginBody,
  RegisterBody,
  ResendVerificationMailBody,
} from 'types/server/auth';
import {
  createUserSuccessResponse,
  loginUserDetailsResponse,
  loginUserErrorResponse,
  loginUserSuccessResponse,
  resendVerificationMailSuccessReponse,
} from './authMock';

const delay = process.env.NODE_ENV === 'test' ? 0 : 1500;

const authSuccessMockHandlers = [
  rest.post<LoginBody>(LOGIN_API, async (req, res, ctx) => {
    //todo: add login response
    return res(ctx.json(loginUserSuccessResponse));

    /*  if (!req.body.password) {
      return res(
        ctx.delay(delay),
        ctx.status(400),
        ctx.json({ message: 'password required' })
      );
    }
    if (!req.body.email) {
      return res(
        ctx.delay(delay),
        ctx.status(400),
        ctx.json({ message: 'username required' })
      );
    } */
  }),

  rest.get<{ email: string }>(USER_DETAILS_API_URL, async (req, res, ctx) => {
    return res(ctx.json(loginUserDetailsResponse));
  }),

  rest.post<RegisterBody>(REGISTER_API, async (req, res, ctx) => {
    return res(ctx.json(createUserSuccessResponse));
  }),

  rest.post<ResendVerificationMailBody>(
    RESEND_VERIFICATION_MAIL_URL,
    async (req, res, ctx) => {
      return res(ctx.json(resendVerificationMailSuccessReponse));
    }
  ),
];

const authErrorMockHandlers = [
  rest.post<LoginBody>(LOGIN_API, async (req, res, ctx) => {
    return res(ctx.json(loginUserErrorResponse));
  }),
];

export { authSuccessMockHandlers, authErrorMockHandlers };
