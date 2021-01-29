import React, { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  register: any; // FIXME:
  label: string;
  errors: string;
  help?: string;
  id?: string;
}

export const FormInput = ({ register, label, errors, help, id, ...props }: InputProps) => {
  return (
    <>
      <div className="flex flex-col items-start my-3">
        {
          label
            && <div className="label-wrapper">
              <label htmlFor={props.name}>{label}</label>
              {errors && (
                <span className="text-red-500 text-sm ml-3">is {errors}</span>
              )}
            </div>
        }
        {help && <p className="text-gray-300 text-xs my-1">{help}</p>}
        <input
          className="rounded-md p-2 w-full border border-solid border-gray-300 outline-none hover:border-green-500 transition-all duration-150"
          ref={register}
          id={id}
          {...props}
        />
      </div>
    </>
  )
}
