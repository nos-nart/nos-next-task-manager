import React from 'react';
import PageWithLayoutType from '@/types/pageWithLayout';
import { MainLayout } from '@/layouts/index';

const Home: React.FC = () => {
  return (
    <div>
      <p className="text-3xl font-bold text-green-500">Hello world!</p>
    </div>
  )
}

(Home as PageWithLayoutType).layout = MainLayout;

export default Home;
