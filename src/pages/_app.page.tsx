import { ContentfulLivePreviewProvider } from '@contentful/live-preview/react';
import { appWithTranslation } from 'next-i18next';
import type { AppProps } from 'next/app';
import { Josefin_Sans } from 'next/font/google';
import './utils/globals.css';
import '@contentful/live-preview/style.css';
import { useRouter } from 'next/router';

import { Layout } from '@src/components/templates/layout';

const font = Josefin_Sans({ subsets: ['latin'], variable: '--font-urbanist' });

const App = ({ Component, pageProps }: AppProps) => {
  const { locale } = useRouter();
  return (
    <ContentfulLivePreviewProvider
      enableInspectorMode={pageProps.previewActive}
      enableLiveUpdates={pageProps.previewActive}
      locale={locale || 'en-US'}
    >
      <>
        <main className={`${font.variable} font-sans`}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </main>
        <div id="portal" className={`${font.variable} font-sans`} />
      </>
    </ContentfulLivePreviewProvider>
  );
};

export default appWithTranslation(App);
