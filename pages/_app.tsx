// import App from "next/app";
import "tailwindcss/tailwind.css";
import PageWithLayoutType from '../types/pageWithLayout';
import { GlobalStyles } from '@/components/index';

type AppLayoutProps = {
  Component: PageWithLayoutType
  pageProps: any
}

function MyApp({ Component, pageProps }: AppLayoutProps) {
  const Layout = Component.layout || ((children: any) => <>{children}</>);

  return (
    <>
      {/* <GlobalStyles> */}
        <Layout>
          <Component {...pageProps} />
        </Layout>
      {/* </GlobalStyles> */}
    </>
  )
}

export default MyApp