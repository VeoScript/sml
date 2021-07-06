import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async (req, res) => {
  const post = await prisma.likes.create({
    data: {
      liker: req.body.liker,
      postId: req.body.postId,
      createdAt: req.body.createdAt
    }
  })
  res.json(post)
}