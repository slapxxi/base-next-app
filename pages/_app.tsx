import { ThemeProvider } from 'emotion-theming';
import { AppType } from 'next/dist/next-server/lib/utils';
import { QueryCache, ReactQueryCacheProvider } from 'react-query';
import { Hydrate } from 'react-query/hydration';
import { Layout } from '../components/Layout';
import { defaultTheme } from '../lib/style/theme';
import '../styles/index.scss';

let queryCache = new QueryCache();

let AppPage: AppType = (props) => {
  let { Component, pageProps } = props;

  return (
    <ReactQueryCacheProvider queryCache={queryCache}>
      <Hydrate state={pageProps.dehydratedState}>
        <ThemeProvider theme={defaultTheme}>
          <Layout>
            <Component {...pageProps}></Component>
          </Layout>
        </ThemeProvider>
      </Hydrate>
    </ReactQueryCacheProvider>
  );
};

export default AppPage;
