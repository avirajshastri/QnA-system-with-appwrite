import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 import getOrCreateDB from './models/server/dbSetup'
import getOrCreateStorage from './models/server/storageSetup'


// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  
  await Promise.all([
    getOrCreateDB(),
    getOrCreateStorage()
  ])
  
    return NextResponse.next()
} // this function works wverywhere we want to

 
// See "Matching Paths" below to learn more
export const config = {
    /* match all request paths except for the ones that starts with:
    - api
    - _next/static
    - _next/image
    - favicon.com
    */  //apart from these routes middleware will run everywhere
   matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico).*)"
   ], //chatgpt se regex(string) me convert krwaliya 
} // in matcher object me jo rahega to ye code (above function )udhar run nai hoga

//wherever the matcher matches the path, this middleware method will not run there