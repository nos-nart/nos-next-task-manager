import React from 'react';
import Link from 'next/link';
import { useForm } from "react-hook-form";
import { useRouter } from 'next/router';

import { FormInput, Button } from '@/components/index';
import { signIn } from 'next-auth/client';

export const FormLogin = () => {
  const router = useRouter();
  const {register, handleSubmit, errors} = useForm();
  const [email, setEmail] = React.useState<string>('');
  const [loginError, setLoginError] = React.useState<string>('');

  React.useEffect(() => {
    if (router.query.error) {
      setLoginError(router.query.error as string);
      setEmail(router.query.email as string);
    }
  }, [router]);


  const onSubmit = async (data: any) => {
    const { email, password } = data;
    signIn('credentials',
      {
        email,
        password,
        // The page where you want to redirect to after a 
        // successful login
        callbackUrl: `${window.location.origin}/`,
      }
    )
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
            label="🔑  Password"
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
