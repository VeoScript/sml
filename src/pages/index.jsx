import Head from 'next/head'
import withSession from '~/lib/Session'
import Layout from '~/layouts/default'
import ContentEditable from '~/components/ContentEditable'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default function Home({ account }) {
  return (
    <>
      <Head>
        <title>SML</title>
      </Head>
      <Layout account={ account }>
        <div className="flex flex-col w-full h-full overflow-y-auto px-5 py-5">
          <ContentEditable account={account} />
        </div>
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
