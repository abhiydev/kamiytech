import React from 'react';
import Head from 'next/head';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import {
  FaBullseye,
  FaSearch,
  FaPenFancy,
  FaChartLine,
  FaSearchDollar,
  FaUsers,
  FaChartBar,
} from 'react-icons/fa';

const steps = [
  {
    icon: <FaBullseye className="w-8 h-8 text-blue-500 animate-pulse" />, 
    title: 'Strategy & Goal Setting',
    desc: 'Define business objectives, target audience, and set measurable goals like brand visibility, leads, or conversions.'
  },
  {
    icon: <FaSearch className="w-8 h-8 text-green-500" />, 
    title: 'Market Research & Competitor Analysis',
    desc: 'Analyze industry trends and competitors to identify gaps and unique positioning opportunities.'
  },
  {
    icon: <FaPenFancy className="w-8 h-8 text-yellow-500 animate-bounce" />, 
    title: 'Content Creation',
    desc: 'Produce engaging graphics, videos, blogs, and ad creatives optimized for each platform.'
  },
  {
    icon: <FaChartLine className="w-8 h-8 text-purple-500" />, 
    title: 'Campaign Planning & Execution',
    desc: 'Launch and manage campaigns on Google, Facebook, Instagram, LinkedIn with A/B testing and data-driven tactics.'
  },
  {
    icon: <FaSearchDollar className="w-8 h-8 text-red-500 animate-pulse" />, 
    title: 'SEO (Search Engine Optimization)',
    desc: 'Improve visibility with keyword research, technical SEO, content optimization, and backlink strategies.'
  },
  {
    icon: <FaUsers className="w-8 h-8 text-blue-400" />, 
    title: 'Social Media Management',
    desc: 'Consistent posting, audience engagement, and community growth across social channels.'
  },
  {
    icon: <FaChartBar className="w-8 h-8 text-gray-500 animate-spin" />, 
    title: 'Analytics & Reporting',
    desc: 'Regular performance reports with insights and recommendations using Google Analytics, Meta Insights, and more.'
  }
];

const DigitalMarketingProcess: React.FC = () => (
  <>
    <Navbar />
    <Head>
      <title>Digital Marketing Process – KamiyTech</title>
      <meta
        name="description"
        content="Our proven digital marketing process at KamiyTech, from strategy to analytics."
      />
    </Head>

    <main className="bg-gray-50 py-16">
      <div className="max-w-5xl mx-auto px-4">
        <header className="text-center mb-12">
          <h1 className="text-5xl font-extrabold text-gray-900">Digital Marketing Process</h1>
          <p className="mt-4 text-lg text-gray-600">Result-oriented strategies tailored to your brand’s goals</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {steps.map((step, idx) => (
            <div key={idx} className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-gray-100 rounded-full">
                  {step.icon}
                </div>
                <h2 className="ml-4 text-xl font-semibold text-gray-800">{step.title}</h2>
              </div>
              <p className="text-gray-600 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>

        <section className="mt-16 bg-white p-8 rounded-2xl shadow-md">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">Payment Method – Monthly Retainer</h2>
          <div className="space-y-4 text-gray-700">
            <p><span className="font-semibold">Advance Payment:</span> 100% of the monthly retainer fee is payable at the start of each month.</p>
            <p><span className="font-semibold">Billing Cycle:</span> Monthly; services commence after payment confirmation.</p>
            <p><span className="font-semibold">Contract Terms:</span> Minimum 3‑month engagement recommended (custom durations available).</p>
            <p><span className="font-semibold">Ad Spend:</span> Budgets charged separately and must be prepaid or managed directly by the client.</p>
            <p><span className="font-semibold">Ownership:</span> Creative and campaign rights remain with KamiyTech until full monthly payment is received.</p>
          </div>
        </section>
      </div>
    </main>
    <Footer />
  </>
);

export default DigitalMarketingProcess;