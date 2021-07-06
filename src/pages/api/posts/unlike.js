import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async (req, res) => {
  const post = await prisma.likes.delete({
    where: {
      id: req.body.likesId
    }
  })
  res.json(post)
}