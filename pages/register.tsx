import React from 'react';

import { FormRegister } from '@/containers/index';
import PageWithLayoutType from '@/types/pageWithLayout';
import { AuthLayout } from '@/layouts/index';

const Register: React.FunctionComponent = () => {
  return (
    <>
      <FormRegister />
    </>
  )
}

(Register as PageWithLayoutType).layout = AuthLayout;

export default Register;
