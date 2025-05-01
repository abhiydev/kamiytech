"use client";

import React, { useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import { BoxReveal } from "@/components/magicui/box-reveal";
import KiyoPopup from "./KiyoPopUp";
import { useRouter } from "next/navigation";

const Hero = () => {
  const router = useRouter();

  // Inject WebPage structured data
  useEffect(() => {
    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: "KamiyTech – Innovative Software & Web Solutions",
      url: "https://kamiytech.com",
      description:
        "KamiyTech crafts custom software, SEO-optimized websites, and mobile apps tailored for startups and growing businesses.",
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
        <title>KamiyTech | Custom Software, Web & Mobile App Development</title>
        <meta
          name="description"
          content="KamiyTech builds SEO-friendly websites, custom software, and mobile apps to help startups and businesses thrive online."
        />
        <link rel="canonical" href="https://kamiytech.com" />
      </Head>

      <header className="relative w-full h-auto md:h-[85vh] bg-gradient-to-br overflow-hidden" aria-label="Hero section">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 items-center h-full px-4 sm:px-6 lg:px-12 gap-8">
          {/* Text + CTAs */}
          <BoxReveal width="100%" boxColor="#0693E3" duration={0.6}>
            <div className="w-full flex flex-col justify-center items-start space-y-6 p-0 sm:pl-16 lg:pl-24">
              <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight">
                KamiyTech <strong className="text-blue-600">Innovative Software</strong> &amp; Web Solutions
              </h1>
              <p className="text-base text-gray-600">
                At KamiyTech we craft custom software, SEO-optimized websites, and engaging mobile apps tailored for startups and growing businesses.
              </p>

              <nav aria-label="Hero call to actions" className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full sm:w-auto">
                <button
                  onClick={() => router.push("/#contactus")}
                  className="w-full sm:w-auto px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 transition"
                  style={{ borderRadius: "0.75rem" }}
                  aria-label="Get Started with KamiyTech"
                >
                  Get Started
                </button>
                <button
                  onClick={() => router.push("/about")}
                  className="w-full sm:w-auto px-6 py-3 bg-gray-200 text-gray-800 font-semibold rounded-lg shadow hover:bg-gray-300 transition"
                  aria-label="Learn More About KamiyTech"
                >
                  Learn More
                </button>
              </nav>
            </div>
          </BoxReveal>

          {/* Hero Image */}
          <KiyoPopup />
        </div>

        {/* Decorative Wave */}
        <Image
          src="/ani-wave.svg"
          alt="Decorative wave foreground"
          fill
          className="object-cover -z-10 opacity-50"
          role="presentation"
        />
      </header>
    </>
  );
};

export default Hero;
