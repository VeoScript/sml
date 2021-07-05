import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async (req, res) => {
  const post = await prisma.post.create({
    data: {
      content: req.body.create_post,
      authorId: req.body.authorId,
      createdAt: req.body.createdAt
    }
  })
  res.json(post)
}