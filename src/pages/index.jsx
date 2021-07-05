import Head from 'next/head'
import withSession from '~/lib/Session'
import Layout from '~/layouts/default'
import ContentEditable from '~/components/ContentEditable'
import DisplayContent from '~/components/DisplayContent'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default function Home({ account, posts }) {
  return (
    <>
      <Head>
        <title>SML</title>
      </Head>
      <Layout account={ account }>
        <div className="flex flex-col w-full h-full overflow-y-auto px-5 py-5 space-y-2">
          <ContentEditable account={account} />
          <DisplayContent posts={posts} />
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

  //get all posts from the server
  const posts = await prisma.post.findMany({
    orderBy: [
      {
        id: 'desc'
      }
    ]
  })
  
  return {
    props: {
      account,
      posts
    }
  }
})
