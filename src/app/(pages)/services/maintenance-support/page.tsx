import React from "react";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  FaBug,
  FaTachometerAlt,
  FaShieldAlt,
  FaPlusCircle,
  FaSyncAlt,
  FaDatabase,
  FaHeadset,
} from "react-icons/fa";

export const metadata: Metadata = {
  title: "Software Maintenance & Support Services | KamiyTech",
  description:
    "Keep your web applications, mobile apps, and servers secure, optimized, and updated with KamiyTech's maintenance and technical support packages.",
  keywords: [
    "Software Maintenance Services",
    "Website Support Indore",
    "Bug fixes and speed optimization",
    "Server backup and security patches",
  ],
  alternates: {
    canonical: "https://kamiytech.com/services/maintenance-support",
  },
  openGraph: {
    title: "Software Maintenance & Support Services | KamiyTech",
    description: "Ongoing updates, security patches, and 24/7 technical support for your digital products.",
    url: "https://kamiytech.com/services/maintenance-support",
    siteName: "KamiyTech",
    locale: "en_US",
    type: "website",
  },
};

const services = [
  {
    icon: <FaBug className="w-8 h-8 text-red-500 animate-pulse" />,
    title: "Bug Fixes & Error Handling",
    desc: "Prompt resolution of any bugs or system errors to keep your software stable.",
  },
  {
    icon: <FaTachometerAlt className="w-8 h-8 text-blue-500 animate-bounce" />,
    title: "Performance Optimization",
    desc: "Regular speed and stability checks to maintain peak performance.",
  },
  {
    icon: <FaShieldAlt className="w-8 h-8 text-green-500" />,
    title: "Security Updates",
    desc: "Routine security patches and SSL certificate renewals to protect your data.",
  },
  {
    icon: <FaPlusCircle className="w-8 h-8 text-yellow-500 animate-pulse" />,
    title: "Feature Enhancements",
    desc: "Minor updates and improvements based on your evolving business needs.",
  },
  {
    icon: <FaSyncAlt className="w-8 h-8 text-purple-500 animate-spin" />,
    title: "Framework & Compatibility Updates",
    desc: "Keep your tech stack (React, Node, NestJS) up to date across devices.",
  },
  {
    icon: <FaDatabase className="w-8 h-8 text-indigo-500" />,
    title: "Data Backup & Recovery",
    desc: "Scheduled backups and recovery support to safeguard against data loss.",
  },
  {
    icon: <FaHeadset className="w-8 h-8 text-gray-500 animate-pulse" />,
    title: "Technical Support",
    desc: "Email or phone support with SLAs tailored to your chosen plan.",
  },
];

export default function MaintenanceSupport() {
  return (
    <>
      <Navbar />
      <main className="bg-gray-50 py-16">
        <div className="max-w-5xl mx-auto px-4">
          <header className="text-center mb-12">
            <h1 className="text-5xl font-extrabold text-gray-900">
              Maintenance & Support
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              Ensuring your digital products stay secure, optimized, and reliable.
            </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((svc, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-gray-100 rounded-full">{svc.icon}</div>
                  <h2 className="ml-4 text-xl font-semibold text-gray-800">
                    {svc.title}
                  </h2>
                </div>
                <p className="text-gray-600 leading-relaxed">{svc.desc}</p>
              </div>
            ))}
          </div>

          <section className="mt-16 bg-white p-8 rounded-2xl shadow-md">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">
              Available Maintenance Plans
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
              {["3-Month Plan", "6-Month Plan", "1-Year Plan"].map((plan, i) => (
                <div
                  key={i}
                  className="p-6 border border-gray-200 rounded-xl hover:border-blue-500 transition-colors"
                >
                  <h3 className="text-xl font-medium text-gray-800 mb-2">
                    {plan}
                  </h3>
                  <p className="text-gray-600">
                    Full-featured support services for the duration of the plan.
                  </p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
