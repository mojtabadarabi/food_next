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
    console.log(req.body)
    const response = await fetch('http://localhost:8000/api/user/sign', {
        body: JSON.stringify(req.body),
        method:'post',
        headers:{
            "Content-Type":"application/json"
        }
    })
    const data = await response.json()
    if(response.ok){
        setCookie('refresh_token',data.data.token.token,{req,res})
    }
    res.status(data.status).json(data)
}
