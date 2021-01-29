import React from 'react'
import { Header } from '@/components/index';

type Props = {
  children: React.ReactNode
}

export const MainLayout = ({ children }: Props) => {
  return (
    <div>
      <Header title="this is the header" />
      <main>
        {children}
      </main>
    </div>
  )
}
