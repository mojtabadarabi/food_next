import { NextRequest, NextResponse } from "next/server";

const PUBLIC_FILE = /\.(.*)$/

export function middleware (req:NextRequest){
    const url = req.nextUrl.clone();
    //  return if not in route
      if (
          req.nextUrl.pathname.startsWith('/_next') ||
          req.nextUrl.pathname.includes('/api/') ||
          PUBLIC_FILE.test(req.nextUrl.pathname) ||
          url.pathname.startsWith('/_next') ||
          url.pathname.endsWith('.txt')  || // example = /robots.txt
          url.pathname.endsWith('.ico') ||   //example = /favicon.ico
          url.pathname.startsWith('/files')  // public files
      ){
        return NextResponse.next()
      }
      const isLogin = !!req.cookies.get("refresh_token")
      const userCookie = req.cookies.get("user")?.value
      const pathname = url.pathname
      if (pathname.startsWith('/admin')) {
        if (!isLogin||!userCookie) {
          const response = NextResponse.redirect(new URL('/', req.url))
          response.headers.set('x-middleware-cache', 'no-cache')
          return response
        }
        const user = JSON.parse(userCookie)
        if(!user?.permissions||user.permissions?.length===0){
            const response = NextResponse.redirect(new URL('/', req.url))
            response.headers.set('x-middleware-cache', 'no-cache')
            return response
        }
    }

}