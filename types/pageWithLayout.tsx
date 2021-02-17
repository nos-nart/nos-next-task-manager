import { NextPage } from 'next';
import { MainLayout, AuthLayout } from '@/layouts/index';

type PageWithMainLayoutType = NextPage & { layout: typeof MainLayout };

type PageWithAuthLayoutType = NextPage & { layout: typeof AuthLayout };

type PageWithLayoutType = PageWithMainLayoutType | PageWithAuthLayoutType;
 
export default PageWithLayoutType;
