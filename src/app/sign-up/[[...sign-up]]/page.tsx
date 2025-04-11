import { SignUp } from "@clerk/nextjs";
import AuthHeader from "@/components/AuthHeader";

export default function SignUpPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4">
      <div className="w-full max-w-md">
        <AuthHeader />
        <div className="bg-white rounded-lg shadow-md p-6">
          <SignUp
            appearance={{
              elements: {
                rootBox: "mx-auto",
                card: "bg-transparent shadow-none",
                headerTitle: "text-primary text-2xl font-bold",
                headerSubtitle: "text-secondary",
                socialButtonsBlockButton: "bg-primary hover:bg-secondary text-white",
                formButtonPrimary: "bg-primary hover:bg-secondary text-white",
                footerActionLink: "text-primary hover:text-secondary",
              },
            }}
            routing="path"
            path="/sign-up"
            signInUrl="/sign-in"
            afterSignInUrl="/"
            afterSignUpUrl="/"
            redirectUrl="/"
          />
        </div>
      </div>
    </div>
  );
} 