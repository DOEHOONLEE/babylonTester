import { NextApiResponse, NextApiRequest } from 'next'
import { Person } from '../interfaces'

export default function handler(
  _req: NextApiRequest,
  res: NextApiResponse<Person[]>
) {
  return res.status(200)
}
