import express from 'express'

const PORT: number = 3000
const app = express()

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`)
})
