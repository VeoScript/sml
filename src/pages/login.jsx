import Head from 'next/head'
import Link from 'next/link'

export default function Login() {
  return (
    <>
      <Head>
        <title>SML | Login</title>
      </Head>
      <div className="flex items-center justify-center w-full h-screen bg-sml-dark text-sml-white">
        <div className="flex flex-row items-center justify-center w-full max-w-screen-2xl h-full">
          <div className="flex flex-col items-center w-full">
            <div className="flex flex-col space-y-2">
              <div className="flex flex-col">
                <h1 className="font-normal text-2xl">VEOSCRIPT</h1>
                <span className="font-light text-xl text-sml-mocha">Presents</span>
              </div>
              <h1 className="font-bold text-5xl text-sml-mocha">#ShareMoLang</h1>
              <h2 className="font-normal text-xl text-gray-300">i-share mo lang sa amin lahat ng ka gagohan mo.</h2>
            </div>
          </div>
          <div className="flex flex-col items-center w-full space-y-3">
            <form className="flex flex-col w-full max-w-sm space-y-2">
              <h1 className="font-semibold text-xl ml-2 mb-2">Login</h1>
              <div className="flex flex-col w-full space-y-1">
                <input className="w-full px-5 py-3 rounded-lg bg-sml-dim text-sml-white focus:outline-none" type="text" name="username" placeholder="Username" />
                <span className="text-xs text-sml-mocha ml-1 hidden">Username is required.</span>
              </div>
              <div className="flex flex-col w-full space-y-1">
                <input className="w-full px-5 py-3 rounded-lg bg-sml-dim text-sml-white focus:outline-none" type="password" name="password" placeholder="Password" />
                <span className="text-xs text-sml-mocha ml-1 hidden">Password is required.</span>
              </div>
              <button className="w-full px-5 py-3 rounded-lg bg-sml-dim text-sml-mocha transition ease-in-out duration-200 focus:outline-none hover:opacity-80" type="submit">Login</button>
            </form>
            <div className="flex flex-col items-center w-full max-w-sm space-y-2">
              <hr className="w-full border border-sml-coffee opacity-20" />
              <Link href="/signup">
                <a className="w-full px-5 py-3 rounded-lg bg-sml-mocha text-sml-dim text-center transition ease-in-out duration-200 focus:outline-none hover:opacity-80">Create Account</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}