import React from 'react';
import Head from 'next/head';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

const CookiePolicy: React.FC = () => (
  <>
  <Navbar />
    <Head>
      <title>Cookie Policy – KamiyTech</title>
      <meta
        name="description"
        content="Understand how KamiyTech uses cookies to enhance your experience and protect your privacy."
      />
    </Head>

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
              2. Why We Use Cookies
            </h2>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Ensure reliable operation of our website.</li>
              <li>Understand user interaction and improve usability.</li>
              <li>Enhance performance and loading speeds.</li>
              <li>Analyze traffic patterns and site usage.</li>
              <li>Deliver targeted marketing and ads, where applicable.</li>
            </ul>
          </section>

          <section className="pt-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              3. Types of Cookies We Use
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-medium text-gray-700">Strictly Necessary Cookies</h3>
                <p className="text-gray-600 mt-2">
                  Essential for core website functions like security and
                  authentication. Without these, the site cannot operate properly.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-medium text-gray-700">Performance & Analytics Cookies</h3>
                <p className="text-gray-600 mt-2">
                  Collect information about how visitors use our site (e.g., pages
                  visited, time spent) to help us optimize content and structure.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-medium text-gray-700">Functionality Cookies</h3>
                <p className="text-gray-600 mt-2">
                  Remember preferences such as language or region to personalize
                  your experience.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-medium text-gray-700">Advertising & Tracking Cookies</h3>
                <p className="text-gray-600 mt-2">
                  Used by third parties to deliver personalized ads and measure
                  campaign performance. May track activity across multiple sites.
                </p>
              </div>
            </div>
          </section>

          <section className="pt-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              4. Third-Party Cookies
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Some cookies are set by external providers (e.g., Google Analytics,
              Facebook). We recommend reviewing their privacy policies for details
              on how they manage data.
            </p>
          </section>

          <section className="pt-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              5. Managing & Disabling Cookies
            </h2>
            <p className="text-gray-700 leading-relaxed">
              You can control cookies via your browser settings. Disabling certain
              cookies may affect site functionality.
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2 mt-4">
              <li><strong>Chrome:</strong> Settings &gt; Privacy & security &gt; Cookies</li>
              <li><strong>Firefox:</strong> Preferences &gt; Privacy & Security &gt; Cookies</li>
              <li><strong>Safari:</strong> Preferences &gt; Privacy &gt; Manage Website Data</li>
              <li><strong>Edge:</strong> Settings &gt; Site permissions &gt; Cookies</li>
            </ul>
          </section>

          <section className="pt-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              6. Policy Updates
            </h2>
            <p className="text-gray-700 leading-relaxed">
              We may revise this Cookie Policy periodically. Check back for updates
              and review the “Effective Date” above to see when changes took effect.
            </p>
          </section>

          <section className="pt-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              7. Contact Us
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Questions about our Cookie Policy? Reach out:
            </p>
            <address className="not-italic text-gray-600 mt-2 space-y-1">
              <p>
                Email: <a href="mailto:contact@kamiytech.com" className="text-blue-600 underline">contact@kamiytech.com</a>
              </p>
              <p>
                Phone: <a href="tel:+919977858817" className="text-blue-600 underline">9977858817</a>
              </p>
              <p>
                Address: 1/32, behind SICA School Road, Vijay Nagar, Scheme No 54,
                Indore, Madhya Pradesh 452010
              </p>
            </address>
          </section>
        </div>
      </div>
    </main>
    <Footer />
  </>
);

export default CookiePolicy;