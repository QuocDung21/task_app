import '../styles/globals.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import Head from 'next/head'

import type { AppProps } from 'next/app'
import { DarkModeProvider } from '../utils/DarkModeContext'
import { FoldersProvider } from '../utils/FoldersContext'
import { SessionProvider } from 'next-auth/react'


export default function App({ Component, pageProps }: AppProps) {
  return (
    <DarkModeProvider>
      <FoldersProvider>
        <Head>
          <title>TaskMe</title>
          <meta name="description" content="Minimalistic task manager" />
          <link rel="icon" href="/favicon.ico" />
          <link rel="apple-touch-icon" href="/favicon.ico" />
        </Head>
        <SessionProvider session={pageProps.session}>
          <Component {...pageProps} />
        </SessionProvider>
      </FoldersProvider>
    </DarkModeProvider>
  )
}
