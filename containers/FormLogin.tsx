import React from 'react';
import Link from 'next/link';
import { useForm } from "react-hook-form";
import fetch from 'isomorphic-unfetch';

import { FormInput, Button } from '@/components/index';

type FormLoginProps = {
  csrfToken?: string;
}

export const FormLogin = ({ csrfToken }: FormLoginProps) => {
  const {register, handleSubmit, errors} = useForm();
  const contentType = 'application/json';

  const onSubmit = async (data: any) => {
    console.log('data: ', data);
    const { email, password } = data;

  };

  return (
    <>
      <div className="w-full max-w-xs">
        <form onSubmit={handleSubmit(onSubmit)}>
          <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
          <FormInput 
            id="email"
            name="email"
            type="text"
            label="✉️ Email"
            placeholder="example@email.com"
            register={register({
              required: {
                value: true,
                message: 'required'
              },
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "invalid email address"
              }
            })}
            errors={
              errors.email && errors.email?.message
            }
          />
          <FormInput 
            id="password"
            name="password"
            type="password"
            label="🔑 Password"
            register={register({
              required: {
                value: true,
                message: 'required'
              },
              minLength: {
                value: 6,
                message: 'too short'
              }
            })}
            errors={
              errors.password && errors.password?.message
            }
          />
          <Button
            type="submit"
            id="login"
            kind="tertiary"
            width="full"
          >
            Log in
          </Button>
          <p className="error">{}</p>{" "}
        </form>
        <p className="text-gray-500 text-sm text-center mt-6 mb-2">
          Need an account?<br/>
          <span className="small">
            Click below, fill out the form!
          </span>
        </p>
        <Link href="/register">
          <a>
            <Button id="sign-up" kind="tertiary" width="full">Sign up</Button>
          </a>
        </Link>
      </div>
    </>
  )
}
