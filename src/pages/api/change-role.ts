// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { setCookie } from 'cookies-next'
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
    name: string
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    const response = await fetch('http://localhost:8000/api/user/change-role/'+req.body.userId, {
        body: JSON.stringify({
            role:req.body.role
        }),
        method:'put',
        headers:{
            "Authorization":'Bearer '+req.cookies?.refresh_token,
            "Content-Type":"application/json"
        }
    })
    const data = await response.json()
    res.status(data.status).json(data)
}
