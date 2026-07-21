import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-950 text-white p-6">
      <div className="max-w-md text-center bg-slate-900 p-8 rounded-2xl border border-slate-800 shadow-2xl">
        <h1 className="text-6xl font-extrabold text-blue-500 mb-2">404</h1>
        <h2 className="text-2xl font-bold text-slate-100 mb-4">Page Not Found</h2>
        <p className="text-slate-400 text-sm mb-6">
          The page you are looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition shadow-lg"
        >
          Back to Homepage
        </Link>
      </div>
    </div>
  );
}
