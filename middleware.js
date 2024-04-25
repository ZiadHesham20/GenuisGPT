import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
    secretKey: 'sk_test_obazPxPqO9QA0wAgGCqztrhX7IDyfvd21kBEhIQLzn',
    publicRoutes:['/'],
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};