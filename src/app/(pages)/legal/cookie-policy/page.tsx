import React from "react";
import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Cookie Policy | KamiyTech",
  description:
    "Understand how KamiyTech uses cookies to enhance your experience and protect your privacy.",
  alternates: {
    canonical: "https://kamiytech.com/legal/cookie-policy",
  },
  openGraph: {
    title: "Cookie Policy | KamiyTech",
    description: "KamiyTech Cookie Policy guidelines.",
    url: "https://kamiytech.com/legal/cookie-policy",
    siteName: "KamiyTech",
    locale: "en_US",
    type: "website",
  },
};

export default function CookiePolicy() {
  return (
    <>
      <Navbar />
      <main className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-2xl shadow-lg">
          <header className="mb-8">
            <h1 className="text-4xl font-extrabold text-gray-900">Cookie Policy</h1>
            <p className="mt-2 text-sm text-gray-500">
              Effective Date: <time dateTime="2025-05-09">09-May-2025</time>
            </p>
          </header>

          <div className="space-y-8 divide-y divide-gray-200">
            <section className="pt-6">
              <p className="text-gray-700 leading-relaxed">
                At KamiyTech, we value transparency and your privacy. This Cookie
                Policy explains how we use cookies and similar technologies when you
                visit our website. By continuing to browse or use our site, you agree
                to our use of cookies as described below.
              </p>
            </section>

            <section className="pt-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                1. What Are Cookies?
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Cookies are small text files placed on your device (computer, mobile,
                or tablet) when you visit a website. They help remember your
                preferences, enable site functionality, and provide analytics data.
                Cookies do not store sensitive personal information like your name or
                email address.
              </p>
            </section>

            <section className="pt-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                2. Contact Us
              </h2>
              <address className="not-italic text-gray-600 mt-2 space-y-1">
                <p>
                  Email: <a href="mailto:contact@kamiytech.com" className="text-blue-600 underline">contact@kamiytech.com</a>
                </p>
                <p>
                  Phone: <a href="tel:+919977858817" className="text-blue-600 underline">+91 9977858817</a>
                </p>
              </address>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}