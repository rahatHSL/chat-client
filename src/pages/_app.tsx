import Navbar from '@/components/navber/Navber'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
    <Navbar />
    <Component {...pageProps} />
    </>
  )
  }