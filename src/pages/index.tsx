import { NextComponentType, NextPage } from 'next'
import { AppProps } from 'next/app'
import Head from 'next/head'
import Homes from '@/components/home/Home'
import Navbar from '@/components/navber/Navber'

export default function Home({Component , pageProps} : AppProps   ) {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
     
      <div >
        <Homes />
        {/* <Component {...pageProps} /> */}
      </div>
    </>
  )
}
