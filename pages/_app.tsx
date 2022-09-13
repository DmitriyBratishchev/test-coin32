import { AppProps } from 'next/app';
import Layout from '../components/layout';
import '../styles/globals.css';

const MyApp = ({ Component, pageProps }: AppProps) => {
  console.log('page props', pageProps, Component);

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default MyApp;
