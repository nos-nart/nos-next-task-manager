import React from 'react';

type Props = {
  children: React.ReactNode
}

export const AuthLayout:React.FC<Props> = ({ children }) => {
  return (
    <>
      <div className="w-full h-screen grid grid-cols-2">
        <div className="w-1/2 cols-span-1 flex justify-end items-center"></div>
        <div className="w-1/2 cols-span-1 flex justify-center items-center">
          {children}
        </div>
      </div>
    </>
  )
}
