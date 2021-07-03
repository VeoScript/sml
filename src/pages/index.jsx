import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>SML</title>
      </Head>
      <div className="flex flex-row items-center justify-center w-full max-w-screen-2xl h-screen">
        <h1 className="font-bold text-5xl">Share Mo Lang</h1>
      </div>
    </>
  )
}
