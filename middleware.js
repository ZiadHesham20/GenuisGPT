import { authMiddleware } from "@clerk/nextjs";

CLERK_SECRET_KEY='sk_test_obazPxPqO9QA0wAgGCqztrhX7IDyfvd21kBEhIQLzn'

export default authMiddleware({
    secretKey: CLERK_SECRET_KEY,
    publicRoutes:['/'],
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};