import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async (req, res) => {
  const post = await prisma.likes.deleteMany({
    where: {
      id: req.body.likesId,
      postId: req.body.postId
    }
  })
  res.json(post)
}