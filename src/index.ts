import express from 'express'
import cors from 'cors'
import limiter from './middleware/rateLimit'
import authRouter from './routes/authRouter'
import { AuthRoutes } from './routes/authRoutes'
import { PORT } from './utils/Constants'

const app = express()

//Middleware
app.use(limiter)
app.use(cors())

//Routes
app.use(AuthRoutes.base, authRouter)

app.listen(PORT, () => {
	console.log(`Server running on port: ${PORT}`)
})
