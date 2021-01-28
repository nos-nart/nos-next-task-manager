import React from 'react';

type Props = {
  register: any;  // FIXME:
  label: string;
  errors: string;
  help?: string;
  name: string;
  type: string;
  id?: string;
}

export const FormInput: React.FC<Props> = ({ register, label, errors, help, name, type, id }) => (
  <>
    <div className="flex flex-col items-start my-3">
      {
        label
          && <div className="label-wrapper">
            <label htmlFor={name}>{label}</label>
            {errors && (
              <span className="text-red-500 text-sm">is {errors}</span>
            )}
          </div>
      }
      {help && <p className="text-gray-300 text-xs my-1">{help}</p>}
      <input
        className="rounded-sm p-2 w-full border border-solid border-gray-300 focus:outline-none hover:border-green-500 transition-all duration-150"
        ref={register}
        type={type}
        id={id}
        name={name}
      />
    </div>
  </>
)
