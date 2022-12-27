import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { BaseErrorResponse, BaseServerResponse } from 'types/server/auth';
import { string } from 'yup';
import { authSuccessMockHandlers } from './authServerHandlers';

export const IP = '127.0.0.1';

export const createUserSuccessResponse: BaseServerResponse<[]> = {
  success: true,
  code: 'confirmation_required',
  message: 'Check your mail to verify your account.',
  data: [],
  ip: IP,
};

export const loginUserSuccessResponse: BaseServerResponse<{
  token: string;
}> = {
  success: true,
  code: 'successfull',
  message: 'User logged in',
  data: {
    token: 'test_token',
  },
  ip: IP,
};

export const loginUserDetailsResponse: BaseServerResponse<Record<string, any>> =
  {
    success: true,
    message: '',
    code: '200',
    data: {
      status: 2,
      sqlConfig: null,
      _id: { $oid: '62289021b1e20d4a0264a652' },
      name: 'checjjjj',
      password: '205e886d8182770c9d40ce2d262f2b1e',
      email: 'sudhanshu@gmail.com',
      role_id: { $oid: '60b8d76242a268792831fcf4' },
      confirmation: 1,
      user_id: '62289021b1e20d4a0264a652',
      id: '62289021b1e20d4a0264a652',
      shops: [
        {
          remote_shop_id: '52',
          marketplace: 'hubspot',
          portal_id: 25252288,
          hub_domain: 'testingoauth.com',
          is_connected: false,
          _id: 98,
          created_at: { $date: { $numberLong: '1646836334687' } },
          updated_at: { $date: { $numberLong: '1646837308815' } },
          warehouses: [],
        },
        {
          remote_shop_id: '53',
          marketplace: 'hubspot',
          portal_id: 21428245,
          hub_domain: 'makewebbetter.com',
          is_connected: true,
          _id: 99,
          created_at: { $date: { $numberLong: '1646894085845' } },
          updated_at: { $date: { $numberLong: '1646894085845' } },
          warehouses: [],
        },
      ],
      default: { active_portal_id: 21428245 },
      sub_user_id: 0,
    },
    ip: '110.235.228.26',
  };

export const loginUserErrorResponse: BaseErrorResponse = {
  success: false,
  code: 'incorrect',
  message: 'Email and password Incorrect',
  data: {
    errors: ['Email and password Incorrect'],
  },
  ip: IP,
};

export const createUserErrorResponse: BaseErrorResponse = {
  success: true,
  code: 'confirmation_required',
  message: 'Check your mail to verify your account.',
  data: {
    errors: [],
  },
  ip: IP,
};

export const resendVerificationMailSuccessReponse: BaseServerResponse<{
  test: string;
}> = {
  success: true,
  code: 'mail_resent',
  message: 'Mail Resent',
  data: {
    test: 'successfull',
  },
  ip: IP,
};
