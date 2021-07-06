import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async (req, res) => {
  const post = await prisma.post.findMany({
    select: {
      id: true,
      likes: {
        select: {
          id: true,
          liker: true
        }
      },
      author: {
        select: {
          id: true,
          image: true,
          name: true,
          username: true
        }
      }
    }
  })  
  res.json(post)
}