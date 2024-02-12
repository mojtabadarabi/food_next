export * from './food'
export * from './reactQuery'

export interface ImageType {
    name: string,
    src: string,
    size: number,
    type: string
}

// comments

export interface CommentType{
    _id:string,
    text:string,
    author:UserType,
    date:string,
    rate:number
}

// user

export interface UserType{
    _id:string,
    profile:string
}