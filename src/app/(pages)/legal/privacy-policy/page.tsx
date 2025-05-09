import React from 'react';
import Head from 'next/head';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const PrivacyPolicy: React.FC = () => (
  <>
    <Head>
      <title>Privacy Policy – KamiyTech</title>
      <meta
        name="description"
        content="How KamiyTech collects, uses, and protects your personal information."
      />
    </Head>

    <Navbar />

    <main className="bg-gray-50 py-16">
      <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-2xl shadow-lg mb-10">
        <header className="mb-8">
          <h1 className="text-4xl font-extrabold text-gray-900">Privacy Policy</h1>
          <p className="mt-2 text-sm text-gray-500">
            Last updated: <time dateTime="2025-05-09">May 09, 2025</time>
          </p>
        </header>

        <div className="space-y-8 divide-y divide-gray-200">
          <section className="pt-6">
            <p className="text-gray-700 leading-relaxed">
              KamiyTech (<span className="italic">“we,” “us,” or “our”</span>) is
              committed to safeguarding your privacy. This Privacy Policy explains
              how we collect, use, share, and protect your personal information when
              you visit or use our website, products, and services. By accessing or
              using our Service, you agree to the terms outlined in this policy.
            </p>
          </section>

          <section className="pt-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Interpretation &amp; Definitions
            </h2>
            <h3 className="text-xl font-medium text-gray-700 mt-4">
              Interpretation
            </h3>
            <p className="text-gray-600 mt-2">
              Capitalized terms have specific meanings defined below. These
              definitions apply equally in singular and plural form.
            </p>

            <h3 className="text-xl font-medium text-gray-700 mt-6">
              Definitions
            </h3>
            <ul className="list-disc list-inside text-gray-600 mt-3 space-y-2">
              <li>
                <span className="font-semibold">Account</span>: A unique account
                created for you to access our Service.
              </li>
              <li>
                <span className="font-semibold">Company</span> (<span
                  className="italic"
                >“KamiyTech”</span>): KamiyTech, Scheme 54, Indore, Madhya Pradesh,
                India.
              </li>
              <li>
                <span className="font-semibold">Cookies</span>: Small data files
                stored on your device by your browser.
              </li>
              <li>
                <span className="font-semibold">Device</span>: Any
                internet-enabled device (computer, smartphone, tablet).
              </li>
              <li>
                <span className="font-semibold">Personal Data</span>: Information
                that identifies or relates to an individual.
              </li>
              <li>
                <span className="font-semibold">Service</span>: The KamiyTech
                website and related services.
              </li>
              <li>
                <span className="font-semibold">Service Provider</span>: Third
                parties who process data on our behalf.
              </li>
              <li>
                <span className="font-semibold">Usage Data</span>: Data generated
                automatically when you use our Service (e.g., IP address, pages
                visited).
              </li>
              <li>
                <span className="font-semibold">Website</span>:
                https://www.kamiytech.com
              </li>
              <li>
                <span className="font-semibold">You</span>: The individual or
                entity using our Service.
              </li>
            </ul>
          </section>

          <section className="pt-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              1. Information We Collect
            </h2>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>
                <span className="font-semibold">Personal Information</span>:
                Name, email, phone, address when you contact us or register.
              </li>
              <li>
                <span className="font-semibold">Business Information</span>:
                Company details and project requirements.
              </li>
              <li>
                <span className="font-semibold">Usage Data</span>: Browser type,
                IP address, pages viewed, time spent, device details.
              </li>
              <li>
                <span className="font-semibold">Cookies &amp; Tracking</span>:
                Cookies, web beacons, tags to enhance experience and analytics.
              </li>
            </ul>
          </section>

          <section className="pt-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              2. How We Use Your Information
            </h2>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Deliver and maintain our Service.</li>
              <li>Manage your Account and provide support.</li>
              <li>Carry out contracts and transactions.</li>
              <li>Send updates, promotions, and security alerts.</li>
              <li>Analyze usage to improve features and performance.</li>
              <li>Comply with legal obligations.</li>
            </ul>
          </section>

          <section className="pt-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              3. Disclosure of Your Information
            </h2>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>
                <span className="font-semibold">Service Providers</span>: For
                payment, analytics, hosting.
              </li>
              <li>
                <span className="font-semibold">Affiliates &amp; Partners</span>:
                Under confidentiality agreements.
              </li>
              <li>
                <span className="font-semibold">Legal Compliance</span>: To
                comply with laws or protect rights.
              </li>
              <li>
                <span className="font-semibold">Business Transfers</span>: In
                mergers or asset sales.
              </li>
              <li>
                <span className="font-semibold">With Your Consent</span>: For any
                other purpose you agree to.
              </li>
            </ul>
          </section>

          <section className="pt-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              4. Cookies &amp; Tracking Technologies
            </h2>
            <p className="text-gray-700 leading-relaxed">
              We use cookies and similar tools to track activity and store
              preferences. You can disable cookies in your browser, but some
              features may break.
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2 mt-4">
              <li>
                <span className="font-semibold">Essential Cookies</span>: Enable
                core functionality.
              </li>
              <li>
                <span className="font-semibold">Preference Cookies</span>:
                Remember settings like language.
              </li>
              <li>
                <span className="font-semibold">Analytics Cookies</span>:
                Collect usage metrics.
              </li>
              <li>
                <span className="font-semibold">Marketing Cookies</span>:
                Track for advertising purposes.
              </li>
            </ul>
          </section>

          <section className="pt-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              5. Third-Party Social Logins
            </h2>
            <p className="text-gray-700 leading-relaxed">
              You may register or log in via Google, Facebook, Instagram, Twitter,
              or LinkedIn. We obtain only the information you authorize.
            </p>
          </section>

          <section className="pt-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              6. Retention &amp; Transfer
            </h2>
            <p className="text-gray-700 leading-relaxed">
              We retain Personal Data as long as needed for our operations or
              legal obligations. Data may be processed in India or other countries
              with appropriate safeguards.
            </p>
          </section>

          <section className="pt-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              7. Your Rights
            </h2>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Access, correct, or delete your Personal Data.</li>
              <li>Opt out of marketing communications.</li>
              <li>Withdraw consent where applicable.</li>
            </ul>
            <p className="text-gray-600 mt-3">
              To exercise these rights, log into your account or contact us at{' '}
              <a href="mailto:contact@kamiytech.com" className="text-blue-600 underline">
                contact@kamiytech.com
              </a>.
            </p>
          </section>

          <section className="pt-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              8. Children’s Privacy
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Our Service is not for children under 13. We do not knowingly collect
              their data. Contact us to remove any inadvertently collected
              information.
            </p>
          </section>

          <section className="pt-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              9. Changes to This Policy
            </h2>
            <p className="text-gray-700 leading-relaxed">
              We may update this Privacy Policy and will notify you via email or a
              site notice. Changes take effect when posted with a new “Last updated”
              date.
            </p>
          </section>

          <section className="pt-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              10. Contact Us
            </h2>
            <p className="text-gray-600 leading-relaxed">
              For any questions or concerns, reach out at:{' '}
              <a href="mailto:contact@kamiytech.com" className="text-blue-600 underline">
                contact@kamiytech.com
              </a>{' '}
              or call{' '}
              <a href="tel:+919977858817" className="text-blue-600 underline">
                +91 9977858817
              </a>
              .
            </p>
          </section>
        </div>
      </div>

      <Footer/>
    </main>
  </>
);

export default PrivacyPolicy;
