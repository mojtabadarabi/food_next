// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { checkResponseStatus } from '@/helpers/auth'
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
    name: string
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    const response = await fetch('http://localhost:8000/api/user/search-users', {
        method: 'post',
        body:JSON.stringify(req.body),
        headers: {
            "Content-Type": "application/json",
            "Authorization": 'Bearer ' + req.cookies?.refresh_token
        }
    })
    const data = await response.json()
    checkResponseStatus(data.status, { req, res })
    res.status(data.status).json(data)
}
