import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async (req, res) => {
  const post = await prisma.likes.deleteMany({
    where: {
      liker: req.body.liker,
      postId: req.body.postId
    }
  })
  res.json(post)
}