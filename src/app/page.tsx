import { auth } from "@clerk/nextjs/server";

interface SessionClaims {
  metadata?: {
    role?: string;
  };
}

export default async function Home() {
  const { userId, sessionClaims } = await auth();
  console.log(userId);
  console.log((sessionClaims as SessionClaims)?.metadata?.role);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl items-center justify-between font-mono text-sm">
        <h1 className="text-4xl font-bold text-center mb-8">Welcome to KamiyTech</h1>
        {
          userId ? (
            <p className="text-center">You are logged in as {String(sessionClaims?.role)}</p>
          ) : (
            <p className="text-center">You are not logged in</p>
          )
        }
      </div>
    </main>
  )
}
