import express from 'express'
import limiter from './middleware/rateLimit'
import authRouter from './routes/authRouter'
import { AuthRoutes } from './routes/authRoutes'
import cors from 'cors'

const PORT: number = 3000
const app = express()

app.use(limiter).use(cors()).use(AuthRoutes.base, authRouter)

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`)
})
