import React from 'react';
import { Banner } from '@/components/svgs/Banner';

type AuthLayoutProps = {
  children: React.ReactNode
}

export const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <>
      <div className="w-full h-screen grid grid-cols-2">
        <div className="cols-span-1 flex justify-end items-center">
          <Banner width={500} height={500} />
        </div>
        <div className="cols-span-1 flex justify-center items-center">
          {children}
        </div>
      </div>
    </>
  )
}
