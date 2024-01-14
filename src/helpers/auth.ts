import { deleteCookie } from "cookies-next"
import { NextApiRequest, NextApiResponse } from "next"

export const checkResponseStatus = (status: number, options: { req: NextApiRequest, res: NextApiResponse }) => {
    if (isUnAuthResponseStatus(status)) {
        removeAuthCookies(options)
    }

}

export const isUnAuthResponseStatus = (status: number) => {
    return status === 403
}

export const removeAuthCookies = (options: { req: NextApiRequest, res: NextApiResponse }) => {
    deleteCookie('refresh_token', options)
    deleteCookie('user', options)
}