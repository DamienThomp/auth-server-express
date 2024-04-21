import crypto from 'crypto'

export default (length: number): string => {
  return crypto.randomBytes(60).toString('hex').slice(0, length)
}
