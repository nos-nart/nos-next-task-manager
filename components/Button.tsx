import React from 'react';
import classNames from 'classnames';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
}

export const Button: React.FC<ButtonProps> = ({  loading, children , ...props}) => {
  return (
    <button
      className={classNames(`rounded-sm transition-all duration-100 py-2 px-4 cursor-pointer font-bold focus:outline-none`)}
      disabled={loading}
      {...props}
    >
      {children} {loading ? " - loading ..." : ""}
    </button>
  );
};
