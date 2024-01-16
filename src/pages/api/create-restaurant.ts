// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { checkResponseStatus } from '@/helpers/auth'
import { setCookie } from 'cookies-next'
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
    name: string
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    const response = await fetch('http://localhost:8000/api/restaurant/admin', {
        body: JSON.stringify(req.body),
        method:'post',
        headers:{
            "Authorization":'Bearer '+req.cookies?.refresh_token,
            "Content-Type":"application/json"
        }
    })
    const data = await response.json()
    checkResponseStatus(data.status,{req,res})
    res.status(data.status).json(data)
}
