import type { AppProps } from 'next/app';
import Head from 'next/head';
import dynamic from 'next/dynamic';

import 'react-toastify/dist/ReactToastify.css';
import GlobalStyle from '`@/styles/global`';
import { ThemeProvider } from 'styled-components';
import theme from '`@/styles/theme`';
import AuthProvider from '`@/hooks/useAuth`';
import { QueryClientProvider } from '@tanstack/react-query';
import queryClient from '`@/services/queryClient`';
import DraggableWindowProvider from '`@/hooks/useDraggableWindow`';

const ToastContainer = dynamic(
  () => import('react-toastify').then(mod => mod.ToastContainer),
  { ssr: false },
);

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <GlobalStyle />

      <ThemeProvider theme={theme}>
        <DraggableWindowProvider>
          <AuthProvider>
            <QueryClientProvider client={queryClient}>
              <main>
                <Component {...pageProps} />
              </main>
            </QueryClientProvider>
          </AuthProvider>
        </DraggableWindowProvider>
      </ThemeProvider>

      <ToastContainer />
    </>
  );
}

export default MyApp;
