export interface ServerResponseType {
    data: any,
    message: string | string[] | Record<string, string>,
    stack: any,
    status: number
}