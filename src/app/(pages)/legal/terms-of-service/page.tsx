import React from 'react';
import Head from 'next/head';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

const TermsServices: React.FC = () => (
  <>
  <Navbar />
    <Head>
      <title>Terms & Services – KamiyTech</title>
      <meta
        name="description"
        content="Read the terms and conditions for using KamiyTech's website and services."
      />
    </Head>

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
            <p className="text-gray-700 leading-relaxed mt-4">
              All services are delivered as per mutually agreed proposals, scope, and timelines.
            </p>
          </section>

          <section className="pt-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. Payment Terms</h2>
            <div className="space-y-4 text-gray-600">
              <div>
                <h3 className="text-xl font-medium">Software Development</h3>
                <ul className="list-disc list-inside mt-2 space-y-1">
                  <li>50% advance payment required before project start.</li>
                  <li>Remaining 50% due upon delivery and before final handover.</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-medium">Digital Marketing</h3>
                <ul className="list-disc list-inside mt-2 space-y-1">
                  <li>100% monthly retainer to be paid in advance.</li>
                  <li>Ad spend billed separately per client instructions.</li>
                </ul>
              </div>
              <p className="mt-2">
                <span className="font-semibold">Ownership:</span> KamiyTech retains all rights to deliverables until full payment is received.
              </p>
            </div>
          </section>

          <section className="pt-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">4. Refund Policy</h2>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>90% refund if canceled within 24 hours of first payment.</li>
              <li>No refund if canceled after 24 hours.</li>
              <li>Refunds processed within 7 working days, if applicable.</li>
            </ul>
          </section>

          <section className="pt-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">5. Intellectual Property</h2>
            <p className="text-gray-700 leading-relaxed">
              All deliverables (code, design, campaigns) remain KamiyTech’s property until final payment. After payment, IP transfers per the service agreement. Unauthorized use violates Indian copyright law.
            </p>
          </section>

          <section className="pt-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">6. Client Responsibilities</h2>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Provide accurate, timely input and feedback.</li>
              <li>Cooperate during development or marketing cycles.</li>
              <li>Avoid delays or out-of-scope changes unless agreed.</li>
            </ul>
          </section>

          <section className="pt-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">7. Confidentiality</h2>
            <p className="text-gray-700 leading-relaxed">
              Both parties will keep sensitive project data confidential. Breaches may lead to legal action.
            </p>
          </section>

          <section className="pt-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">8. Limitation of Liability</h2>
            <p className="text-gray-700 leading-relaxed">
              KamiyTech is not liable for indirect, incidental, or consequential damages, third-party issues, client misconfigurations, or force majeure delays.
            </p>
          </section>

          <section className="pt-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">9. Termination</h2>
            <p className="text-gray-700 leading-relaxed">
              Either party may terminate with written notice. Pending payments must be settled. KamiyTech may suspend services for breaches.
            </p>
          </section>

          <section className="pt-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">10. Legal Compliance &amp; Jurisdiction</h2>
            <p className="text-gray-700 leading-relaxed">
              Governed by the Indian Contract Act, 1872 and IT Act, 2000. Exclusive jurisdiction: Indore courts, India.
            </p>
          </section>

          <section className="pt-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">11. Arbitration Clause</h2>
            <p className="text-gray-700 leading-relaxed">
              Disputes resolved via binding arbitration under the Arbitration and Conciliation Act, 1996 in Indore, India with one agreed arbitrator.
            </p>
          </section>

          <section className="pt-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">12. Indemnification</h2>
            <p className="text-gray-700 leading-relaxed">
              You agree to indemnify KamiyTech against liabilities, damages, or claims from your misuse or breach of this agreement.
            </p>
          </section>

          <section className="pt-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">13. Contact Us</h2>
            <p className="text-gray-600 leading-relaxed">
              Questions about these terms? Contact us at:
            </p>
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

export default TermsServices;