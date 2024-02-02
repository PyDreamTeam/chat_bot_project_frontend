import Cookies from "js-cookie";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {

    const userRole = request.cookies.get("userRole");

    // if (!(userRole?.value === "AD" || userRole?.value === "SA" || userRole?.value === "MN")) {
    //     return NextResponse.redirect(new URL("/home", request.url));
    // } 

    if (request.nextUrl.pathname.startsWith("/my-account")) {
        if (userRole?.value !== "US") {
            return NextResponse.redirect(new URL("/sign-in", request.url));
        }
    }

    if (request.nextUrl.pathname.startsWith("/admin/users")) {
        if (userRole?.value !== "SA") {
            return NextResponse.redirect(new URL("/admin", request.url));
        }
    }

    if (request.nextUrl.pathname.startsWith("/admin/settings/tariffs")) {
        if (!(userRole?.value === "AD" || userRole?.value === "SA")) {
            return NextResponse.redirect(new URL("/admin", request.url));
        }
    }

    if (request.nextUrl.pathname.startsWith("/admin")) {
        if (!(userRole?.value === "AD" || userRole?.value === "SA" || userRole?.value === "MN")) {
            return NextResponse.redirect(new URL("/home", request.url));
        }
    }
    
}
 
// See "Matching Paths"
// export const config = {
//     matcher: "/admin/:path*",
// };