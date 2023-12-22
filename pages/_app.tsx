import type { AppProps } from 'next/app';
import Head from 'next/head';

import { ThemeManager } from '@/components';

const App = ({ Component, pageProps }: AppProps) => (
  <ThemeManager>
    <Head>
      <meta name="theme-color" content="#ffffff" />
      <meta charSet="utf-8" />
      <meta name="title" content="SuiTears 💧" />
      <meta
        name="description"
        content="Set of standard production ready modules"
      />
      <meta property="og:locale" content="en_US" />
      <meta property="og:title" content="SuiTears 💧" />
      <meta property="og:site_name" content="SuiTears 💧" />
      <meta
        property="og:description"
        content="Set of standard production ready modules"
      />
      <meta property="og:image" content="/ms-icon-310x310.png" />
      <meta property="og:image:secure_url" content="/ms-icon-310x310.png" />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:image:width" content="310" />
      <meta property="og:image:height" content="310" />
      <meta property="og:image:alt" content="SuiTears 💧" />
      <meta
        name="twitter:card"
        content="Set of standard production ready modules"
      />
      <meta name="twitter:title" content="SUITears" />
      <meta name="twitter:site" content="https://interestprotocol.com" />
      <meta name="twitter:image" content="/ms-icon-310x310.png" />
      <meta
        name="twitter:description"
        content="Set of standard production ready modules"
      />
      <link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png" />
      <link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png" />
      <link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png" />
      <link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png" />
      <link
        rel="apple-touch-icon"
        sizes="114x114"
        href="/apple-icon-114x114.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="120x120"
        href="/apple-icon-120x120.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="144x144"
        href="/apple-icon-144x144.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="152x152"
        href="/apple-icon-152x152.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-icon-180x180.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="192x192"
        href="/android-icon-192x192.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="96x96"
        href="/favicon-96x96.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/manifest.json" />
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
      <meta name="theme-color" content="#ffffff" />
      <title>SuiTears 💧</title>
    </Head>
    <Component {...pageProps} />
  </ThemeManager>
);

export default App;
