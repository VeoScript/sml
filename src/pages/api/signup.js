import bcrypt from 'bcryptjs'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async (req, res) => {
  const { image, name, email, username, password: rawPassword } = JSON.parse(req.body)

  const salt = await bcrypt.genSalt()
  const password = await bcrypt.hash(rawPassword, salt)

  const signup = await prisma.user.create({
    data: {
      image: image,
      name: name,
      email: email,
      username: username,
      password: password,
      bio: '',
      phone: '',
      facebook: '',
      twitter: '',
      instagram: '',
      tiktok: '',
      youtube: '',
    }
  })
  res.json(signup) 
}