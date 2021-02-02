import React from 'react';
import PageWithLayoutType from '@/types/pageWithLayout';
import { MainLayout } from '@/layouts/index';
import { Button } from '@/components/index';

const Home: React.FunctionComponent = () => {
  return (
    <div>
      <p className="text-3xl font-bold text-green-500">Hello world!</p>
      <Button
        id="a"
        kind="tertiary"
      >
        click me
      </Button>
    </div>
  )
}

(Home as PageWithLayoutType).layout = MainLayout;

export default Home;
