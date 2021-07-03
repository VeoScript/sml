import Head from 'next/head'
import withSession from '~/lib/Session'
import Layout from '~/layouts/default'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default function Home({ account }) {
  return (
    <>
      <Head>
        <title>SML</title>
      </Head>
      <Layout account={ account }>
        <h1 className="font-light text-3xl">Welcome to SML <span className="font-bold text-3xl">{ account.name }</span></h1>
      </Layout>
    </>
  )
}

export const getServerSideProps = withSession(async function ({ req }) {
  //check the user session
  const user = req.session.get('user')

  if (!user) {
    return {
      redirect: {
        destination: '/login',
        permanent: false
      }
    }
  }

  //get the user that logged in
  const account = await prisma.user.findFirst({
    where: {
      username: user.username
    }
  })
  
  return {
    props: {
      account
    }
  }
})
