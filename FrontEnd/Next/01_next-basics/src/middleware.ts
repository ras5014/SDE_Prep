import { withAuth } from "@kinde-oss/kinde-auth-nextjs/middleware";
import { NextRequest } from "next/server";

export default function middleware(request: NextRequest) {
  return withAuth(request);
}

export const config = {
  matcher: ["/create-post"],
};
