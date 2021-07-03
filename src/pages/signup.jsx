import Head from 'next/head'
import Link from 'next/link'
import withSession from '~/lib/Session'
import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'
import toast, { Toaster } from 'react-hot-toast'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default function SignUp({ all_users }) {

  const router = useRouter()

  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm()

  async function handleSignUp(formData) {
    const username = formData.username
    const email = formData.email
    const password = formData.password
    const repassword = formData.repassword

    const usernameExist = all_users.some(user => user.username === username)
    const emailExist = all_users.some(user => user.email === email)

    if (usernameExist || emailExist) {
      toast.error('This account is already exist.')
      return
    }

    if (password !== repassword) {
      toast.error('The password did not match, try again.')
      return
    }

    await fetch('/api/signup', {
      method: 'POST',
      body: JSON.stringify(formData)
    })
    reset()
    router.replace('/login')
  }

  return (
    <>
      <Head>
        <title>SML | Sign Up</title>
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
          <div className="flex flex-col items-center w-full space-y-3">
            <form onSubmit={handleSubmit(handleSignUp)} className="flex flex-col w-full max-w-sm space-y-2">
              <h1 className="font-semibold text-xl ml-2 mb-2">Create Account</h1>
              <div className="flex flex-col w-full space-y-1">
                <input className="w-full px-5 py-3 rounded-lg bg-white border border-cool-gray focus:border-marigold focus:outline-none disabled:cursor-not-allowed disabled:opacity-50" type="text" name="image" placeholder="Image Url" {...register("image", { required: true })} disabled={isSubmitting} />
                {errors.image && <span className="text-xs ml-1">Image URL is required.</span>}
              </div>
              <div className="flex flex-col w-full space-y-1">
                <input className="w-full px-5 py-3 rounded-lg bg-white border border-cool-gray focus:border-marigold focus:outline-none disabled:cursor-not-allowed disabled:opacity-50" type="text" name="name" placeholder="Name" {...register("name", { required: true })} disabled={isSubmitting}  />
                {errors.name && <span className="text-xs ml-1">Name is required.</span>}
              </div>
              <div className="flex flex-col w-full space-y-1">
                <input className="w-full px-5 py-3 rounded-lg bg-white border border-cool-gray focus:border-marigold focus:outline-none disabled:cursor-not-allowed disabled:opacity-50" type="email" name="email" placeholder="Email" {...register("email", { required: true })} disabled={isSubmitting}  />
                {errors.email && <span className="text-xs ml-1">Email is required.</span>}
              </div>
              <div className="flex flex-col w-full space-y-1">
                <input className="w-full px-5 py-3 rounded-lg bg-white border border-cool-gray focus:border-marigold focus:outline-none disabled:cursor-not-allowed disabled:opacity-50" type="text" name="username" placeholder="Username" {...register("username", { required: true })} disabled={isSubmitting}  />
                {errors.username && <span className="text-xs ml-1">Username is required.</span>}
              </div>
              <div className="flex flex-row w-full space-x-2">
                <div className="flex flex-col w-full space-y-1">
                  <input className="w-full px-5 py-3 rounded-lg bg-white border border-cool-gray focus:border-marigold focus:outline-none disabled:cursor-not-allowed disabled:opacity-50" type="password" name="password" placeholder="Password" {...register("password", { required: true })} disabled={isSubmitting}  />
                  {errors.password && <span className="text-xs ml-1">Password is required.</span>}
                </div>
                <div className="flex flex-col w-full space-y-1">
                  <input className="w-full px-5 py-3 rounded-lg bg-white border border-cool-gray focus:border-marigold focus:outline-none disabled:cursor-not-allowed disabled:opacity-50" type="password" name="repassword" placeholder="Re-Enter Password" {...register("repassword", { required: true })} disabled={isSubmitting}  />
                  {errors.repassword && <span className="text-xs ml-1">Re-Enter Password is required.</span>}
                </div>
              </div>
              <button className="w-full px-5 py-3 rounded-lg bg-marigold text-white transition ease-in-out duration-200 focus:outline-none hover:opacity-80 disabled:cursor-not-allowed disabled:opacity-50" type="submit" disabled={isSubmitting}>Sign Up</button>
            </form>
            <div className="flex flex-col items-center w-full max-w-sm space-y-2">
              <hr className="w-full border border-panther opacity-10" />
              <Link href="/login">
                <a className="w-full px-5 py-3 rounded-lg bg-panther text-white text-center transition ease-in-out duration-200 focus:outline-none hover:opacity-80">Go to Login</a>
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