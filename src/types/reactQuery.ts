export interface RequestsHeaders{
    Authorization:string|null
}
export interface SsrReturnType {
    isError: boolean,
    dehydratedState: any,
    headers: RequestsHeaders | null
}