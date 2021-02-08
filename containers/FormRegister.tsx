import React from 'react';
import Link from 'next/link';
import { useForm } from "react-hook-form";
import { useRouter } from 'next/router';
import fetch from 'isomorphic-unfetch';

import { FormInput, Button } from '@/components/index';

export const FormRegister = () => {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const router = useRouter();
  const {register, handleSubmit, errors} = useForm();
  const contentType = 'application/json';

  const onSubmit = async (data: any) => {
    const { email, password } = data;

    const res = await fetch(`/api/register`, {
      method: 'POST',
      headers: {
        Accept: contentType,
        'Content-Type': contentType,
      },
      body: JSON.stringify({ email, password })
    })

    console.log('res ~> ', res);
  };

  return (
    <>
      <div className="w-full max-w-xs">
        <form onSubmit={handleSubmit(onSubmit)}>
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
            Sign up
          </Button>
          <p className="error">{}</p>{" "}
        </form>
        <p className="text-gray-500 text-sm text-center mt-6 mb-2">
          Have an account?<br/>
          <span className="small">
            Click below, fill out the form!
          </span>
        </p>
        <Link href="/login">
          <a>
            <Button id="sign-up" kind="tertiary" width="full">Log in</Button>
          </a>
        </Link>
      </div>
    </>
  )
}
