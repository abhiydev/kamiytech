"use client";

import React, { useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import { GlareCard } from "@/components/ui/glare-card";
import Image from "next/image";
import { motion } from "framer-motion";

export default function OurServices() {
  // inject Services schema
  useEffect(() => {
    const services = [
      {
        "@type": "Service",
        name: "Custom Website Development",
        description:
          "Professional custom website development optimized for SEO, performance, and conversions.",
        provider: { "@type": "Organization", name: "KamiyTech", url: "https://kamiytech.com" },
      },
      {
        "@type": "Service",
        name: "Mobile App Development",
        description:
          "End-to-end iOS & Android mobile app development for maximum user engagement.",
        provider: { "@type": "Organization", name: "KamiyTech", url: "https://kamiytech.com" },
      },
      {
        "@type": "Service",
        name: "Business Management Software",
        description:
          "Custom CRM, dashboards, and reporting tools to streamline operations and boost productivity.",
        provider: { "@type": "Organization", name: "KamiyTech", url: "https://kamiytech.com" },
      },
      {
        "@type": "Service",
        name: "Digital Marketing & SEO Services",
        description:
          "Targeted SEO, social media ads, and content marketing to drive qualified traffic and leads.",
        provider: { "@type": "Organization", name: "KamiyTech", url: "https://kamiytech.com" },
      },
    ];
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.innerHTML = JSON.stringify({ "@context": "https://schema.org", "@graph": services });
    document.head.appendChild(script);
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <>
      <Head>
        <title>Our Services | SEO, Web & App Development | KamiyTech</title>
        <meta
          name="description"
          content="KamiyTech offers professional custom website development, mobile app development, business management software, and digital marketing & SEO services."
        />
        <link rel="canonical" href="https://kamiytech.com/#ourservices" />
      </Head>

      <section
        className="relative pt-20 pb-32 overflow-hidden bg-white max-w-7xl mx-auto"
        id="ourservices"
      >
        {/* Top wave */}
        <div className="absolute inset-x-0 top-0 -mt-40 pointer-events-none">
          <svg
            viewBox="0 0 1440 320"
            className="w-full h-80"
            preserveAspectRatio="none"
          >
            <path
              fill="#E0F2FE"
              d="M0,192L48,186.7C96,181,192,171,288,154.7C384,139,480,117,576,112C672,107,768,117,864,122.7C960,128,1056,128,1152,133.3C1248,139,1344,149,1392,154.7L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
            />
          </svg>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-4xl font-extrabold text-gray-900">
              Our Services — Web, Mobile & Digital Marketing Solutions
            </h2>
            <p className="mt-4 text-sm text-gray-600">
              We deliver SEO-optimized websites, high-performance mobile apps, robust business software, and data-driven digital marketing.
            </p>
          </div>

          {/* 1️⃣ Custom Website Development */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="flex flex-col md:flex-row items-center md:space-x-12 space-y-10 md:space-y-0 mb-8"
          >
            <GlareCard className="w-full max-w-sm shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <Image
                src="/service1.png"
                alt="Custom Website Development"
                width={500}
                height={500}
                className="rounded-lg object-cover"
              />
            </GlareCard>
            <div className="max-w-md text-center md:text-left">
              <h3 className="text-xl font-semibold text-gray-800">
                Custom Website Development
              </h3>
              <p className="mt-4 text-gray-600 text-sm md:text-base">
                Bespoke website design and development with a focus on SEO, fast load times, and conversion optimization.
              </p>
              <Link href="/#contactus">
                <button className="mt-6 inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 hover:scale-105 hover:shadow-2xl cursor-pointer transition">
                  Launch My Site
                  <svg
                    className="w-5 h-5 ml-2"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </button>
              </Link>
            </div>
          </motion.div>

          {/* separator */}
          <div className="w-full overflow-hidden mb-8">
            <svg
              viewBox="0 0 1200 60"
              className="w-full h-12"
              preserveAspectRatio="none"
            >
              <path
                d="M0,30 C300,0 900,60 1200,30 L1200,60 L0,60 Z"
                fill="#E0F2FE"
              />
            </svg>
          </div>

          {/* 2️⃣ Mobile App Development */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col md:flex-row-reverse items-center md:space-x-12 md:space-x-reverse space-y-10 md:space-y-0 mb-8"
          >
            <GlareCard className="w-full max-w-sm shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <Image
                src="/service2.png"
                alt="Mobile App Development"
                width={500}
                height={500}
                className="rounded-lg object-cover"
              />
            </GlareCard>
            <div className="max-w-md text-center md:text-left">
              <h3 className="text-xl font-semibold text-gray-800">
                Mobile App Development
              </h3>
              <p className="mt-4 text-gray-600">
                Full-stack iOS and Android app development to engage users and drive retention.
              </p>
              <Link href="/#contactus">
                <button className="mt-6 inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 hover:scale-105 hover:shadow-2xl cursor-pointer transition">
                  Build My App
                  <svg
                    className="w-5 h-5 ml-2"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </button>
              </Link>
            </div>
          </motion.div>

          {/* separator */}
          <div className="w-full overflow-hidden mb-8">
            <svg
              viewBox="0 0 1200 60"
              className="w-full h-12"
              preserveAspectRatio="none"
            >
              <path
                d="M0,30 C300,0 900,60 1200,30 L1200,60 L0,60 Z"
                fill="#E0F2FE"
              />
            </svg>
          </div>

          {/* 3️⃣ Business Management Software */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col md:flex-row items-center md:space-x-12 space-y-10 md:space-y-0 mb-8"
          >
            <GlareCard className="w-full max-w-sm shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <Image
                src="/service3.png"
                alt="Business Management Software"
                width={500}
                height={500}
                className="rounded-lg object-cover"
              />
            </GlareCard>
            <div className="max-w-md text-center md:text-left">
              <h3 className="text-xl font-semibold text-gray-800">
                Business Management Software
              </h3>
              <p className="mt-4 text-gray-600">
                Streamline your operations with custom CRM, dashboards, and reporting tools.
              </p>
              <Link href="/#contactus">
                <button className="mt-6 inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 hover:scale-105 hover:shadow-2xl cursor-pointer transition">
                  Try a Demo
                  <svg
                    className="w-5 h-5 ml-2"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </button>
              </Link>
            </div>
          </motion.div>

          {/* separator */}
          <div className="w-full overflow-hidden mb-8">
            <svg
              viewBox="0 0 1200 60"
              className="w-full h-12"
              preserveAspectRatio="none"
            >
              <path
                d="M0,30 C300,0 900,60 1200,30 L1200,60 L0,60 Z"
                fill="#E0F2FE"
              />
            </svg>
          </div>

          {/* 4️⃣ Digital Marketing & SEO Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col md:flex-row-reverse items-center md:space-x-12 md:space-x-reverse space-y-10 md:space-y-0"
          >
            <GlareCard className="w-full max-w-sm shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <Image
                src="/service4.png"
                alt="Digital Marketing & SEO Services"
                width={500}
                height={500}
                className="rounded-lg object-cover"
              />
            </GlareCard>
            <div className="max-w-md text-center md:text-left">
              <h3 className="text-xl font-semibold text-gray-800">
                Digital Marketing & SEO Services
              </h3>
              <p className="mt-4 text-gray-600">
                Drive targeted traffic and increase ROI with SEO, social media ads, and content marketing.
              </p>
              <Link href="/#contactus">
                <button className="mt-6 inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 hover:scale-105 hover:shadow-2xl cursor-pointer transition">
                  Boost My Traffic
                  <svg
                    className="w-5 h-5 ml-2"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </button>
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Bottom wave */}
        <div className="absolute inset-x-0 bottom-0 pointer-events-none">
          <svg
            viewBox="0 0 1440 320"
            className="w-full h-40"
            preserveAspectRatio="none"
          >
            <path
              fill="#E0F2FE"
              d="M0,288L48,272C96,256,192,224,288,202.7C384,181,480,171,576,186.7C672,203,768,245,864,256C960,267,1056,245,1152,208C1248,171,1344,117,1392,90.7L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            />
          </svg>
        </div>
      </section>
    </>
  );
}
