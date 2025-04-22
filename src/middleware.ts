import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

const isAdminRoute = createRouteMatcher(['/admin(.*)']);

export default clerkMiddleware(async (auth, req) => {
  const { userId, sessionClaims, redirectToSignIn } = await auth();

  if (!userId && isAdminRoute(req)) {
    return redirectToSignIn({ returnBackUrl: req.url });
  }

  if (isAdminRoute(req)) {
    const role = sessionClaims?.role;
    if (role !== 'admin') {
      // Optionally, you can redirect to a 403 page or homepage
      return Response.redirect(new URL('/', req.url));
    }
  }
});
