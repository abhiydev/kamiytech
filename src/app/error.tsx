"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Unhandled runtime application error:", error);
  }, [error]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-900 text-white p-6">
      <div className="max-w-md text-center bg-slate-800 p-8 rounded-2xl border border-slate-700 shadow-xl">
        <h2 className="text-3xl font-extrabold text-red-500 mb-4">Something went wrong</h2>
        <p className="text-slate-300 text-sm mb-6">
          An unhandled error occurred while rendering this view. Our team has been notified.
        </p>
        <div className="flex justify-center gap-4">
          <button
            onClick={() => reset()}
            className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition"
          >
            Try Again
          </button>
          <Link
            href="/"
            className="px-5 py-2.5 bg-slate-700 hover:bg-slate-600 text-slate-200 font-medium rounded-lg transition"
          >
            Return Home
          </Link>
        </div>
      </div>
    </div>
  );
}
