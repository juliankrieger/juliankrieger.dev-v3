import '../styles/overrides.scss';
import type { AppProps } from 'next/app'
import React from 'react'
import { Layout } from '../components/Layout'
import Head from 'next/head'
import { useRouter } from 'next/router'

function MyApp({ Component, pageProps }: AppProps) {

  const router = useRouter();

  const { asPath } = router;

  const title = asPath.split("/")[1];

  const adjustedTitle = "- " + title.charAt(0).toUpperCase() + title.slice(1);

  return (
    <div>
      <Head>
        <title>juliankrieger.dev {title && adjustedTitle} </title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Julian Krieger's personal website. "></meta>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  )
}
export default MyApp
