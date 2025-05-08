"use client";

import React, { useEffect } from "react";
import Head from "next/head";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BookDemoForm from "@/components/GoogleForm";

export default function About() {
  // read Google Maps API key
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
  // const mapUrl = apiKey
  //   ? `https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=${encodeURIComponent(
  //       "Kamiytech 1/32, behind SICA School Road, Vijay Nagar, Scheme No 54, Indore, Madhya Pradesh 452010"
  //     )}`
  //   : "about:blank";

  // inject AboutPage structured data
  useEffect(() => {
    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "AboutPage",
      name: "About KamiyTech – Indore’s Premier Custom Software Solutions",
      url: "https://kamiytech.com/about",
      description:
        "Learn about KamiyTech’s history, mission, success stories, team, core values, and office location in Indore.",
    };
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.innerHTML = JSON.stringify(jsonLd);
    document.head.appendChild(script);
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <>
      <Head>
        <title>About KamiyTech | Custom Software & Web Solutions in Indore</title>
        <meta
          name="description"
          content="Discover KamiyTech’s story, mission, team, success stories, and office location. Leading custom software development in Indore."
        />
        <link rel="canonical" href="https://kamiytech.com/about" />
      </Head>

      <div className="flex flex-col min-h-screen bg-[url('/paper-texture.svg')] bg-cover">
        <Navbar />

        <div>
          {/* Top blue wave */}
          <div className="relative -mt-1">
            <svg
              viewBox="0 0 1440 200"
              className="w-full h-40 md:h-60"
              preserveAspectRatio="none"
            >
              <path
                fill="#E0F2FE"
                d="M0,96L48,128C96,160,192,224,288,224C384,224,480,160,576,144C672,128,768,160,864,170.7C960,181,1056,171,1152,154.7C1248,139,1344,117,1392,106.7L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
              />
            </svg>
          </div>

          <main className="flex-grow container mx-auto px-6 py-12 space-y-16">
          </main>
            {/* Title */}
            <motion.h1
              className="text-5xl md:text-6xl font-bold text-gray-900 text-center"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              About KamiyTech — Indore’s Premier Custom Software Solutions
            </motion.h1>

            {/* Our Story + Mission */}
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: "Our Story",
                  icon: "✏️",
                  paragraphs: [
                    "KamiyTech (aka Kamiy), headquartered in Indore, Madhya Pradesh, was born from a dorm-room sketch and a vision to humanize custom software development.",
                    "Since our founding, we’ve grown into KamiyTech: a dynamic team of developers, designers, and strategists crafting scalable web and mobile applications.",
                    "We take pride in being a leading software company in Indore, delivering personal, high-performance code for startups and enterprises across India.",
                  ],
                },
                {
                  title: "Our Mission",
                  icon: "🎯",
                  paragraphs: [
                    "At Kamiytech, our mission is to blend empathy-driven UX/UI design with robust engineering to create digital experiences users love.",
                    "We partner with clients to transform ideas into scalable solutions—from MVPs to full-scale platforms—right here in Indore, Madhya Pradesh.",
                    "Our commitment to quality and innovation makes KamiyTech the go-to software development partner for businesses in India.",
                  ],
                },
              ].map((sec, i) => (
                <motion.section
                  key={i}
                  className="p-6 bg-white bg-opacity-80 rounded-xl shadow-lg hover:shadow-2xl transition-shadow transform hover:scale-105"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.1 * i }}
                >
                  <h2 className="text-3xl font-semibold mb-4">
                    {sec.icon} {sec.title}
                  </h2>
                  {sec.paragraphs.map((p, j) => (
                    <p key={j} className="text-gray-800 mb-3 leading-relaxed">
                      {p}
                    </p>
                  ))}
                </motion.section>
              ))}
            </div>

            {/* Success Stories */}
            <section>
              <h2 className="text-4xl font-semibold text-gray-900 mb-6 text-center">
                🚀 Success Stories
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    name: "GymPro Management",
                    desc: "KamiyTech’s custom gym-management SaaS boosted member retention by 40%, with smooth payments and branded portals.",
                  },
                  {
                    name: "QuickShop App",
                    desc: "A local-retailer mobile shopping solution—built in 8 weeks in Indore, processing 10,000+ orders in month one.",
                  },
                  {
                    name: "Karela Hurbal",
                    desc: "An eCommerce platform with real-time tracking and secure payments, driving 500+ orders growth within two months.",
                  },
                ].map((s, i) => (
                  <motion.div
                    key={i}
                    className="p-5 bg-white bg-opacity-80 rounded-xl shadow-lg hover:shadow-2xl transition-shadow transform hover:scale-105"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 * i }}
                  >
                    <h3 className="text-2xl font-bold mb-2">{s.name}</h3>
                    <p className="text-gray-700">{s.desc}</p>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* Team Carousel */}
            <section>
              <h2 className="text-4xl font-semibold text-gray-900 mb-6 text-center">
                👥 Meet Our Team
              </h2>
              <div className="flex space-x-4 overflow-x-auto py-4">
                {[
                  { name: "Ankit Vaja", role: "Business Executive" },
                  { name: "Abhishek Chedwal", role: "Founder & CTO" },
                  { name: "Sahil Dhameliya", role: "Business Manager" },
                  { name: "Vaidehi Gupta", role: "Business Executive" },
                ].map((e, i) => (
                  <motion.div
                    key={i}
                    className="min-w-[200px] p-4 bg-white bg-opacity-80 rounded-xl shadow-lg text-center"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.1 * i, type: "spring" }}
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0 20px 25px -5px rgba(0,0,0,0.1)",
                    }}
                  >
                    <div className="w-16 h-16 bg-blue-200 rounded-full mx-auto mb-3 flex items-center justify-center text-xl">
                      {e.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                    <h4 className="font-medium">{e.name}</h4>
                    <p className="text-sm text-gray-600">{e.role}</p>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* Values */}
            <section>
              <h2 className="text-4xl font-semibold text-gray-900 mb-6 text-center">
                💡 Our Core Values
              </h2>
              <ul className="max-w-2xl mx-auto list-disc list-inside text-lg text-gray-800 space-y-3">
                {[
                  "Craftsmanship – precise, scalable code evolving with your business.",
                  "Empathy – focused on user needs through research-driven design.",
                  "Innovation – leveraging cutting-edge tech from Indore, Madhya Pradesh.",
                  "Collaboration – transparent, agile partnership with clients.",
                ].map((val, i) => (
                  <motion.li
                    key={i}
                    className="pl-2"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * i }}
                    whileHover={{ scale: 1.02 }}
                  >
                    {val}
                  </motion.li>
                ))}
              </ul>
            </section>

          <BookDemoForm />
            {/* Google Maps Embed */}

          {/* Bottom wave */}
          <div className="relative -mt-1">
            <svg
              viewBox="0 0 1440 200"
              className="w-full h-32"
              preserveAspectRatio="none"
            >
              <path
                fill="#E0F2FE"
                d="M0,64L48,106.7C96,149,192,235,288,240C384,245,480,171,576,144C672,117,768,139,864,138.7C960,139,1056,117,1152,96C1248,75,1344,53,1392,42.7L1440,32L1440,200L1392,200C1344,200,1248,200,1152,200C1056,200,960,200,864,200C768,200,672,200,576,200C480,200,384,200,288,200C192,200,96,200,48,200L0,200Z"
              />
            </svg>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}
