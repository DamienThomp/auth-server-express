import { rateLimit } from 'express-rate-limit'

// Limit to 100 calls per 10 minute window
// excedding limit will return 429 http status
const limiter = rateLimit({
	windowMs: 10 * 60 * 1000,
	limit: 100,
})

export default limiter
