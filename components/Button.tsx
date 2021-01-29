import React from 'react';
import classNames from 'classnames';

/**
 * Utility type
 */
type MergeElementProps<
  T extends React.ElementType,
  P extends object = {}
> = Omit<React.ComponentPropsWithRef<T>, keyof P> & P;

/**
 * Props
 */
interface ButtonBaseProps {
  id: string;
}

interface ButtonWidthProps extends ButtonBaseProps {
  kind: "primary" | "secondary" | "tertiary" | "danger" | "ghost";
  width?: "auto" | "full";
}

type ButtonProps = MergeElementProps<
  "button",
  ButtonWidthProps
>;

/**
 * Component
 */

function ButtonBase(
  { id, kind, width,...rest }: ButtonProps,
  ref: React.Ref<HTMLButtonElement>
) {
  const masks = {
    "primary": "bg-green-500 text-white",
    "secondary": "bg-gray-300 text-gray-900",
    "tertiary": "text-black text-green-500 border border-solid border-green-500 hover:bg-green-500 hover:text-white",
    "danger": "bg-red-500 text-white",
    "ghost": "bg-transparent text-black",
  }

  const widths = {
    "auto": "w-auto",
    "full": "w-full"
  }

  return (
    <button
      ref={ref}
      id={id}
      {...rest}
      className={classNames(`inline-flex justify-center px-2 py-1 rounded-md focus:outline-none transition-all duration-100 ${masks[kind]} ${widths[width!]}`)}
    />
  );
}

export const Button = React.forwardRef(ButtonBase) as typeof ButtonBase;
