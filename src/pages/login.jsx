import Head from 'next/head'
import Link from 'next/link'
import bcrypt from 'bcryptjs'
import withSession from '~/lib/Session'
import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'
import toast, { Toaster } from 'react-hot-toast'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default function Login({ all_users }) {

  const router = useRouter()

  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm()

  async function handleLogin(formData) {
    const username = formData.username
    const password = formData.password

    console.log(username)

    const checkUser = all_users.find(user => user.username === username)

    if (!checkUser) {
      toast.error('This account is not registered!')
      return
    }

    const hashPassword = checkUser.password
    const matchPassword = await bcrypt.compare(password, hashPassword)

    if (!matchPassword) {
      toast.error('Incorrect password!')
      return
    }

    await fetch('/api/login', {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username })
    })

    reset()
    router.replace('/')

  }

  return (
    <>
      <Head>
        <title>SML | Login</title>
      </Head>
      <div className="flex items-center justify-center w-full h-screen overflow-y-auto bg-ghostwhite text-panther">
        <Toaster
          position="top-center"
          reverseOrder={true}
        />
        <div className="flex flex-row items-center justify-center w-full max-w-screen-2xl h-full">
          <div className="flex flex-col items-center w-full">
            <div className="flex flex-col space-y-2">
              <div className="flex flex-col">
                <h1 className="font-normal text-2xl">VEOSCRIPT</h1>
                <span className="font-light text-xl">Presents</span>
              </div>
              <h1 className="font-bold text-5xl text-marigold">#ShareMoLang</h1>
              <h2 className="font-normal text-xl text-cool-gray">Share mo lang dito lahat ng mga kagaguhan mo.</h2>
            </div>
          </div>
          <div className="flex flex-col items-center w-full space-y-4">
            <form onSubmit={handleSubmit(handleLogin)} className="flex flex-col w-full max-w-sm space-y-2">
              <h1 className="font-semibold text-xl ml-2 mb-2">Login</h1>
              <div className="flex flex-col w-full space-y-1">
                <input className="w-full px-5 py-3 rounded-lg bg-white border border-cool-gray focus:border-marigold focus:outline-none disabled:cursor-not-allowed disabled:opacity-50" type="text" name="username" placeholder="Username" {...register("username", { required: true })} disabled={isSubmitting} />
                {errors.username && <span className="text-xs ml-1">Username is required.</span>}
              </div>
              <div className="flex flex-col w-full space-y-1">
                <input className="w-full px-5 py-3 rounded-lg bg-white border border-cool-gray focus:border-marigold focus:outline-none disabled:cursor-not-allowed disabled:opacity-50" type="password" name="password" placeholder="Password" {...register("password", { required: true })} disabled={isSubmitting} />
                {errors.password && <span className="text-xs ml-1">Password is required.</span>}
              </div>
              <button className="w-full px-5 py-3 rounded-lg bg-marigold text-white transition ease-in-out duration-200 focus:outline-none hover:opacity-80 disabled:cursor-not-allowed disabled:opacity-50" type="submit" disabled={isSubmitting}>Login</button>
            </form>
            <div className="flex flex-col items-center w-full max-w-sm space-y-4">
              <hr className="w-full border-t border-panther opacity-10" />
              <Link href="/signup">
                <a className="w-full px-5 py-3 rounded-lg bg-panther text-white text-center transition ease-in-out duration-200 focus:outline-none hover:opacity-80">Create Account</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export const getServerSideProps = withSession(async function ({ req }) {
  //check the user session
  const user = req.session.get('user')

  if (user) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }

  //find all users from the database
  const all_users = await prisma.user.findMany()

  return {
    props: {
      all_users
    }
  }
})