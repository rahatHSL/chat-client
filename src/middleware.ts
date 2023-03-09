import router from "next/router";
import { NextRequest, NextResponse } from "next/server";
export const middleware = (req: NextRequest, res: NextResponse) => {
  const validation = req.cookies.get("auth");
  if (req.nextUrl.pathname === "/news") {
    return NextResponse.redirect("http://localhost:3000/hello");
  }
  return NextResponse.next();
};
