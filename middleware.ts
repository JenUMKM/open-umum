import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {

  const allCookies = request.cookies.getAll();
  const hasSupabaseSession = allCookies.some((cookie) =>
    cookie.name.startsWith("sb-"),
  );

  if (!hasSupabaseSession) {
    const loginUrl = new URL("/login", request.url);
    loginUrl.searchParams.set("next", request.nextUrl.pathname);

    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*"],
};
