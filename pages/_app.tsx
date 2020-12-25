import { ThemeProvider } from '@emotion/react';
import { AppType } from 'next/dist/next-server/lib/utils';
import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Hydrate } from 'react-query/hydration';
import { defaultTheme } from '../lib/style/theme';
import '../styles/index.scss';

let queryClient = new QueryClient();

let AppPage: AppType = (props) => {
  let { Component, pageProps } = props;

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <ThemeProvider theme={defaultTheme}>
          <Component {...pageProps}></Component>
        </ThemeProvider>
      </Hydrate>
    </QueryClientProvider>
  );
};

export default AppPage;
