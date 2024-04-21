import { NextResponse, NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const respone = NextResponse.next();
  const themePreference = request.cookies.get("theme");

  if (!themePreference) {
    respone.cookies.set("theme", "dark");
  }
  return respone;
  //   if (request.nextUrl.pathname === "/profile") {
  //     return NextResponse.rewrite(new URL("/api/hello", request.url));
  //   }
  //   return NextResponse.redirect(new URL("/", request.url));
}

// export const config = {
//   matcher: "/profile",
// };
