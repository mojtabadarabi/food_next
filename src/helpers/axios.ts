import { ServerResponseType } from '@/types/axios'
import { AxiosResponse } from 'axios'

export const getAxiosReponseMessages = (response: AxiosResponse<ServerResponseType> | undefined): string[] | null => {
    if (!response) return null
    const message = response.data.message
    if (message instanceof Array) return message
    if (message instanceof Object) return Object.values(message)
    return [message]
}