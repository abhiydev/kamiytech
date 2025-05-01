"use client";

import React, { JSX } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaTwitter,
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa";

export default function Footer(): JSX.Element {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-tr from-blue-600 via-blue-700 to-indigo-800 text-gray-100 w-full">
      {/* Organization JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "KamiyTech",
            url: "https://kamiytech.com",
            logo: "https://kamiytech.com/logo.png",
            sameAs: [
              "https://twitter.com/kamiytech",
              "https://facebook.com/kamiytech",
              "https://instagram.com/kamiytech",
              "https://github.com/kamiytech",
              "https://linkedin.com/company/kamiytech",
            ],
            contactPoint: [
              {
                "@type": "ContactPoint",
                telephone: "+919977858817",
                contactType: "customer support",
                areaServed: "IN",
                availableLanguage: ["en"],
              },
            ],
          }),
        }}
      />

      <div className="mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo & Social */}
        <div className="space-y-4">
          <Link href="/" title="Go to KamiyTech homepage">
            <Image
              src="/logo.png"
              alt="KamiyTech Logo"
              width={150}
              height={40}
              className="object-contain"
            />
          </Link>
          <div className="flex space-x-4">
            <Link
              href="https://twitter.com/kamiytech"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow us on Twitter"
              title="KamiyTech on Twitter"
            >
              <FaTwitter className="w-6 h-6 hover:text-blue-300 transition-colors" />
            </Link>
            <Link
              href="https://facebook.com/kamiytech"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow us on Facebook"
              title="KamiyTech on Facebook"
            >
              <FaFacebook className="w-6 h-6 hover:text-blue-300 transition-colors" />
            </Link>
            <Link
              href="https://instagram.com/kamiytech"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow us on Instagram"
              title="KamiyTech on Instagram"
            >
              <FaInstagram className="w-6 h-6 hover:text-blue-300 transition-colors" />
            </Link>
            <Link
              href="https://wa.me/919977858817"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat with us on WhatsApp"
              title="KamiyTech on WhatsApp"
            >
              <FaWhatsapp className="w-6 h-6 hover:text-blue-300 transition-colors" />
            </Link>
            <Link
              href="https://github.com/kamiytech"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View our GitHub"
              title="KamiyTech on GitHub"
            >
              <FaGithub className="w-6 h-6 hover:text-blue-300 transition-colors" />
            </Link>
            <Link
              href="https://linkedin.com/company/kamiytech"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Connect with us on LinkedIn"
              title="KamiyTech on LinkedIn"
            >
              <FaLinkedinIn className="w-6 h-6 hover:text-blue-300 transition-colors" />
            </Link>
          </div>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-xl font-bold mb-4 text-blue-200">Services</h3>
          <ul className="space-y-2 text-gray-200">
            {[
              { href: "/services/custom-software", label: "Custom Software Development" },
              { href: "/services/mobile-apps", label: "Mobile App Development" },
              { href: "/services/ui-ux", label: "UI/UX Design" },
              { href: "/services/digital-marketing", label: "Digital Marketing" },
              { href: "/services/support", label: "Maintenance & Support" },
            ].map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="hover:text-white transition-colors"
                  title={item.label}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Helpful Links */}
        <div>
          <h3 className="text-xl font-bold mb-4 text-blue-200">Helpful Links</h3>
          <ul className="space-y-2 text-gray-200">
            {[
              { href: "/about", label: "About Us" },
              { href: "/careers", label: "Careers" },
              { href: "/blog", label: "Blog" },
              { href: "/contact", label: "Contact Us" },
            ].map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="hover:text-white transition-colors"
                  title={item.label}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h3 className="text-xl font-bold mb-4 text-blue-200">Legal</h3>
          <ul className="space-y-2 text-gray-200">
            {[
              { href: "/legal/privacy-policy", label: "Privacy Policy" },
              { href: "/legal/terms-of-service", label: "Terms of Service" },
              { href: "/legal/cookie-policy", label: "Cookie Policy" },
            ].map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="hover:text-white transition-colors"
                  title={item.label}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-blue-500/50 pt-6">
        <address className="text-center not-italic">
          <p className="text-sm text-blue-100">
            Contact us:{" "}
            <a
              href="mailto:contact@kamiytech.com"
              title="Email KamiyTech"
              className="underline hover:text-white"
            >
              contact@kamiytech.com
            </a>{" "}
            |{" "}
            <a
              href="tel:+919977858817"
              title="Call KamiyTech"
              className="underline hover:text-white"
            >
              +91 99778 58817
            </a>
          </p>
        </address>
        <p className="text-center text-sm text-blue-100 pb-10">
          © {currentYear} KamiyTech. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
