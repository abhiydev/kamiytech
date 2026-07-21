import React from "react";
import type { Metadata } from "next";
import {
  FaRegLightbulb,
  FaProjectDiagram,
  FaPencilRuler,
  FaCode,
  FaBug,
  FaCloudUploadAlt,
  FaTools,
} from "react-icons/fa";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Custom Software Development Process | KamiyTech",
  description:
    "Explore KamiyTech's agile custom software development methodology — from requirement gathering, UI/UX design, to deployment and maintenance.",
  keywords: [
    "Software Development Process",
    "Agile web development Indore",
    "Custom software engineering methodology",
    "KamiyTech development steps",
  ],
  alternates: {
    canonical: "https://kamiytech.com/services/development-process",
  },
  openGraph: {
    title: "Custom Software Development Process | KamiyTech",
    description: "Discover how KamiyTech transforms client ideas into production-ready software.",
    url: "https://kamiytech.com/services/development-process",
    siteName: "KamiyTech",
    locale: "en_US",
    type: "website",
  },
};

const steps = [
  {
    icon: <FaRegLightbulb className="w-8 h-8 text-blue-500 animate-pulse" />,
    title: "Requirement Gathering & Analysis",
    desc: "In-depth discussions and research to understand your business goals, challenges, and user needs.",
  },
  {
    icon: <FaProjectDiagram className="w-8 h-8 text-green-500" />,
    title: "Planning",
    desc: "Roadmap creation, tech stack selection, milestones, budget, and team roles definition.",
  },
  {
    icon: <FaPencilRuler className="w-8 h-8 text-yellow-500 animate-bounce" />,
    title: "Design",
    desc: "Wireframes, UI/UX prototypes and system architecture for an intuitive experience.",
  },
  {
    icon: <FaCode className="w-8 h-8 text-purple-500" />,
    title: "Development",
    desc: "Building with MERN stack, NestJS backends and React Native for cross-platform mobile.",
  },
  {
    icon: <FaBug className="w-8 h-8 text-red-500 animate-pulse" />,
    title: "Testing",
    desc: "Rigorous unit, integration, and user acceptance testing for robustness.",
  },
  {
    icon: <FaCloudUploadAlt className="w-8 h-8 text-blue-400" />,
    title: "Deployment",
    desc: "Secure production deployment with performance monitoring and error tracking.",
  },
  {
    icon: <FaTools className="w-8 h-8 text-gray-500 animate-spin" />,
    title: "Maintenance & Support",
    desc: "Ongoing updates, enhancements and 24/7 support to keep your system running.",
  },
];

export default function DevelopmentProcess() {
  return (
    <>
      <Navbar />
      <main className="bg-gray-50 py-16">
        <div className="max-w-5xl mx-auto px-4">
          <header className="text-center mb-12">
            <h1 className="text-5xl font-extrabold text-gray-900">
              Our Development Process
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              Custom Software Development at KamiyTech
            </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {steps.map((step, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-gray-100 rounded-full">{step.icon}</div>
                  <h2 className="ml-4 text-xl font-semibold text-gray-800">
                    {step.title}
                  </h2>
                </div>
                <p className="text-gray-600 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>

          <section className="mt-16 bg-white p-8 rounded-2xl shadow-md">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">
              Payment Method
            </h2>
            <div className="space-y-4 text-gray-700">
              <p>
                <span className="font-semibold">Initial Payment:</span> 50% of the
                total project cost is required before development begins.
              </p>
              <p>
                <span className="font-semibold">Final Payment:</span> Remaining
                50% payable upon delivery, before final handover.
              </p>
              <p>
                <span className="font-semibold">Ownership Transfer:</span> All
                legal and IP rights transfer to the client after final payment; until
                then rights remain with KamiyTech.
              </p>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
