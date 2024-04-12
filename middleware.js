import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
    secretKey: process.env.CLERK_SECRET_KEY,
    publicRoutes:['/'],
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};