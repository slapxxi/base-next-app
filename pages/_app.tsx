import { ThemeProvider } from '@emotion/react';
import { AppType } from 'next/dist/next-server/lib/utils';
import React from 'react';
import { QueryCache, ReactQueryCacheProvider } from 'react-query';
import { Hydrate } from 'react-query/hydration';
import { defaultTheme } from '../lib/style/theme';
import '../styles/index.scss';

let queryCache = new QueryCache();

let AppPage: AppType = (props) => {
  let { Component, pageProps } = props;

  return (
    <ReactQueryCacheProvider queryCache={queryCache}>
      <Hydrate state={pageProps.dehydratedState}>
        <ThemeProvider theme={defaultTheme}>
          <Component {...pageProps}></Component>
        </ThemeProvider>
      </Hydrate>
    </ReactQueryCacheProvider>
  );
};

export default AppPage;
