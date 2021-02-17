import React from 'react';
import { NextPage, NextPageContext  } from 'next';

import { FormLogin } from '@/containers/index';
import PageWithLayoutType from '@/types/pageWithLayout';
import { AuthLayout } from '@/layouts/index';

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
  
}

export default Login;
