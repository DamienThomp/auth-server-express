import express from 'express'
import cors from 'cors'
import limiter from './middleware/rateLimit'
import authRouter from './routes/authRouter'
import { AuthRoutes } from './routes/authRoutes'
import { PORT } from './utils/Constants'

const app = express()
const port = process.env.PORT || PORT

//Middleware
app.use(limiter)
app.use(cors())
app.set('trust proxy', 1)

//Routes
app.use(AuthRoutes.base, authRouter)

app.listen(port, () => {
	console.log(`Server running on port: ${port}`)
})
