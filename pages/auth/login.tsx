import React from 'react';
import { NextPage, NextPageContext  } from 'next';

import { FormLogin } from '@/containers/index';
import PageWithLayoutType from '@/types/pageWithLayout';
import { AuthLayout } from '@/layouts/index';

type LoginProps = {
  csrfToken?: string;
}

const Login: NextPage<LoginProps> = () => {
  return (
    <>
      <FormLogin />
    </>
  )
}

(Login as PageWithLayoutType).layout = AuthLayout;

export default Login;
