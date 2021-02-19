import React from 'react';
import { NextPage, NextPageContext  } from 'next';

import { FormLogin } from '@/containers/index';
import PageWithLayoutType from '@/types/pageWithLayout';
import { AuthLayout } from '@/layouts/index';
import { csrfToken } from 'next-auth/client';

type LoginProps = {
  csrfToken?: string;
}

const Login: NextPage<LoginProps> = ({ csrfToken }) => {
  return (
    <>
      <FormLogin csrfToken={csrfToken} />
    </>
  )
}

(Login as PageWithLayoutType).layout = AuthLayout;

Login.getInitialProps = async (ctx: NextPageContext) => {
  return {
    csrfToken: await csrfToken(ctx) ?? undefined,
  }
}

export default Login;
