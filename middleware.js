import { NextResponse } from "next/server"



export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
}

export default function middleware(request) {

  if (request.nextUrl.pathname.startsWith('/vehicles')) {

  }

  const { nextUrl: { search } } = request
  const urlSearchParams = new URLSearchParams(search)
  const params = Object.fromEntries(urlSearchParams.entries())

  //console.log(request.headers.get('X-Forwarded-For'))
  const response = NextResponse.next()
  //url.searchParams.set("city", city);
  response.cookies.set("test", JSON.stringify(params))
  return response


}

function saveParams(request, page) {


}
