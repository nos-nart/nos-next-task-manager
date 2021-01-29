import React from 'react';

import { FormLogin } from '@/containers/index';
import PageWithLayoutType from '@/types/pageWithLayout';
import { AuthLayout } from '@/layouts/index';

const Login: React.FC = () => {
  return (
    <>
      <FormLogin />
    </>
  )
}

(Login as PageWithLayoutType).layout = AuthLayout;

export default Login;
