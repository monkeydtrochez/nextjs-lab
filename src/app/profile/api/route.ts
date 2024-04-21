import { NextRequest } from "next/server";
import { headers, cookies } from "next/headers";

export async function GET(request: NextRequest) {
  const requestHeaders = new Headers(request.headers);
  console.log("headers: ", requestHeaders.get("Authorization"));

  const headerList = headers();
  console.log("Headers from next/headers", headerList.get("Authorization"));

  cookies().set("reaultsPerPage", "20");
  const allCookies = request.cookies.getAll();
  console.log("Cookie value: ", allCookies);

  return new Response("<h1>This is a html response<h1/>", {
    headers: {
      "Content-Type": "text/html",
      "Set-Cookie": "theme=dark",
    },
  });
}
