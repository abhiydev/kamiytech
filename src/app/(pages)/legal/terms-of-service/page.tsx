import React from "react";
import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Terms of Service | KamiyTech",
  description:
    "Read the Terms & Services governing the use of KamiyTech's website, custom software development, and digital marketing services.",
  alternates: {
    canonical: "https://kamiytech.com/legal/terms-of-service",
  },
  openGraph: {
    title: "Terms of Service | KamiyTech",
    description: "KamiyTech Terms of Service and Client Agreement guidelines.",
    url: "https://kamiytech.com/legal/terms-of-service",
    siteName: "KamiyTech",
    locale: "en_US",
    type: "website",
  },
};

export default function TermsServices() {
  return (
    <>
      <Navbar />
      <main className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-2xl shadow-lg">
          <header className="mb-8">
            <h1 className="text-4xl font-extrabold text-gray-900">Terms &amp; Services</h1>
            <p className="mt-2 text-sm text-gray-500">
              Effective Date: <time dateTime="2025-05-09">09-May-2025</time> &nbsp;|&nbsp; Jurisdiction: India
            </p>
          </header>

          <div className="space-y-8 divide-y divide-gray-200">
            <section className="pt-6">
              <p className="text-gray-700 leading-relaxed">
                Welcome to KamiyTech. By using our website, products, or entering into a service agreement with us, you agree to these Terms &amp; Services. Please read them carefully before proceeding.
              </p>
            </section>

            <section className="pt-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-700 leading-relaxed">
                By accessing or engaging with KamiyTech, you accept these Terms &amp; Services, which may be updated without prior notice. Continued use of our services implies your agreement to any changes.
              </p>
            </section>

            <section className="pt-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. Services Offered</h2>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Custom software and mobile app development</li>
                <li>Website development and maintenance</li>
                <li>Digital marketing and branding services</li>
                <li>Technical support, consulting, and post-deployment maintenance</li>
              </ul>
            </section>

            <section className="pt-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. Payment Terms</h2>
              <div className="space-y-4 text-gray-600">
                <div>
                  <h3 className="text-xl font-medium text-gray-800">Software Development</h3>
                  <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>50% advance payment required before project start.</li>
                    <li>Remaining 50% due upon delivery and before final handover.</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-medium text-gray-800">Digital Marketing</h3>
                  <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>100% monthly retainer to be paid in advance.</li>
                    <li>Ad spend billed separately per client instructions.</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="pt-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">4. Contact Us</h2>
              <address className="not-italic text-gray-600 mt-2 space-y-1">
                <p>
                  Email: <a href="mailto:contact@kamiytech.com" className="text-blue-600 underline">contact@kamiytech.com</a>
                </p>
                <p>
                  Phone: <a href="tel:+919977858817" className="text-blue-600 underline">+91 9977858817</a>
                </p>
                <p>
                  Address: 1/32, behind SICA School Road, Vijay Nagar, Scheme No 54, Indore, Madhya Pradesh 452010
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