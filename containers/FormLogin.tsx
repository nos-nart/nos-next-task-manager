import React from 'react';
import Link from 'next/link';
import { useForm } from "react-hook-form";
import { useRouter } from 'next/router'
import { FormInput, Button } from '@/components/index';

export const FormLogin = () => {
  const [isLoading, setIsLoading] = React.useState(false);
  const router = useRouter();
  const {register, handleSubmit, errors} = useForm();
  const contentType = 'application/json';

  const onSubmit = async (data: any) => {
   
  };

  return (
    <>
      <div className="wrapper">
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormInput 
            id="email"
            name="email"
            type="text"
            label="✉️ Email"
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
            style={{ width: '100%' }}
            type="submit"
            loading={isLoading}
          >
            Log in
          </Button>
          <p className="error">{}</p>{" "}
        </form>
        <p className="log-in-prompt">
          Need an account?
          <span className="small">
            Click below, fill out the form!
          </span>
        </p>
        <Link href="/register">
          <a>
            <Button style={{ width: '100%' }}>Sign up</Button>
          </a>
        </Link>
      </div>
    </>
  )
}
