import Head from 'next/head'
import Link from 'next/link'

export default function SignUp() {
  return (
    <>
      <Head>
        <title>SML | Sign Up</title>
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
              <h1 className="font-semibold text-xl ml-2 mb-2">Create Account</h1>
              <div className="flex flex-col w-full space-y-1">
                <input className="w-full px-5 py-3 rounded-lg bg-sml-dim text-sml-white focus:outline-none" type="text" name="image" placeholder="Image Url" />
                <span className="text-xs text-sml-mocha ml-1 hidden">Image URL is required.</span>
              </div>
              <div className="flex flex-col w-full space-y-1">
                <input className="w-full px-5 py-3 rounded-lg bg-sml-dim text-sml-white focus:outline-none" type="text" name="name" placeholder="Name" />
                <span className="text-xs text-sml-mocha ml-1 hidden">Name is required.</span>
              </div>
              <div className="flex flex-col w-full space-y-1">
                <input className="w-full px-5 py-3 rounded-lg bg-sml-dim text-sml-white focus:outline-none" type="email" name="email" placeholder="Email" />
                <span className="text-xs text-sml-mocha ml-1 hidden">Email is required.</span>
              </div>
              <div className="flex flex-col w-full space-y-1">
                <input className="w-full px-5 py-3 rounded-lg bg-sml-dim text-sml-white focus:outline-none" type="text" name="username" placeholder="Username" />
                <span className="text-xs text-sml-mocha ml-1 hidden">Username is required.</span>
              </div>
              <div className="flex flex-row w-full space-x-2">
                <div className="flex flex-col w-full space-y-1">
                  <input className="w-full px-5 py-3 rounded-lg bg-sml-dim text-sml-white focus:outline-none" type="password" name="password" placeholder="Password" />
                  <span className="text-xs text-sml-mocha ml-1 hidden">Password is required.</span>
                </div>
                <div className="flex flex-col w-full space-y-1">
                  <input className="w-full px-5 py-3 rounded-lg bg-sml-dim text-sml-white focus:outline-none" type="password" name="repassword" placeholder="Re-Enter Password" />
                  <span className="text-xs text-sml-mocha ml-1 hidden">Re-Enter Password is required.</span>
                </div>
              </div>
              <button className="w-full px-5 py-3 rounded-lg bg-sml-dim text-sml-mocha transition ease-in-out duration-200 focus:outline-none hover:opacity-80" type="submit">Sign Up</button>
            </form>
            <div className="flex flex-col items-center w-full max-w-sm space-y-2">
              <hr className="w-full border border-sml-coffee opacity-20" />
              <Link href="/login">
                <a className="w-full px-5 py-3 rounded-lg bg-sml-mocha text-sml-dim text-center transition ease-in-out duration-200 focus:outline-none hover:opacity-80">Go to Login</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}