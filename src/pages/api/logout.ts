// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { removeAuthCookies } from '@/helpers/auth'
import { deleteCookie, setCookie } from 'cookies-next'
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
    name: string
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    console.log(req.cookies?.refresh_token)
    console.log('req.cookies')
    const response = await fetch('http://localhost:8000/api/user/logout', {
        method:'get',
        headers:{
            "Content-Type":"application/json",
            "Authorization":'Bearer '+req.cookies?.refresh_token
        }
    })
    const data = await response.json()
    if(response.ok){
        removeAuthCookies({req,res})
    }
    res.status(data.status).json(data)
}
