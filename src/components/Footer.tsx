"use client";

import React, { JSX } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaTwitter, FaFacebook, FaInstagram, FaWhatsapp, FaGithub } from 'react-icons/fa'

export default function Footer(): JSX.Element {
  return (
    <footer className="bg-gradient-to-tr from-blue-600 via-blue-700 to-indigo-800 text-gray-100 md:w-full w-screen">
      <div className=" mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo & Social */}
        <div className="space-y-4 md:max-w-7xl md:mx-auto">
          <div>
            <Image
              src="/logo.png"
              alt="KamiyTech Logo"
              width={150}
              height={40}
              className="object-contain"
            />
          </div>
          <div className="flex space-x-4">
            <Link href="https://twitter.com/kamiytech" target="_blank" aria-label="Twitter">
              <FaTwitter className="w-6 h-6 hover:text-blue-300 transition-colors" />
            </Link>
            <Link href="https://facebook.com/kamiytech" target="_blank" aria-label="Facebook">
              <FaFacebook className="w-6 h-6 hover:text-blue-300 transition-colors" />
            </Link>
            <Link href="https://instagram.com/kamiytech" target="_blank" aria-label="Instagram">
              <FaInstagram className="w-6 h-6 hover:text-blue-300 transition-colors" />
            </Link>
            <Link href="https://wa.me/yourwhatsappphonenumber" target="_blank" aria-label="WhatsApp">
              <FaWhatsapp className="w-6 h-6 hover:text-blue-300 transition-colors" />
            </Link>
            <Link href="https://github.com/kamiytech" target="_blank" aria-label="GitHub">
              <FaGithub className="w-6 h-6 hover:text-blue-300 transition-colors" />
            </Link>
          </div>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-xl font-bold mb-4 text-blue-200">Services</h3>
          <ul className="space-y-2 text-gray-200">
            <li>
              <Link href="/services/custom-software" className="hover:text-white transition-colors">
                Custom Software Development
              </Link>
            </li>
            <li>
              <Link href="/services/mobile-apps" className="hover:text-white transition-colors">
                Mobile App Development
              </Link>
            </li>
            <li>
              <Link href="/services/ui-ux" className="hover:text-white transition-colors">
                UI/UX Design
              </Link>
            </li>
            <li>
              <Link href="/services/digital-marketing" className="hover:text-white transition-colors">
                Digital Marketing
              </Link>
            </li>
            <li>
              <Link href="/services/support" className="hover:text-white transition-colors">
                Maintenance & Support
              </Link>
            </li>
          </ul>
        </div>

        {/* Helpful Links */}
        <div>
          <h3 className="text-xl font-bold mb-4 text-blue-200">Helpful Links</h3>
          <ul className="space-y-2 text-gray-200">
            <li>
              <Link href="/about" className="hover:text-white transition-colors">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/careers" className="hover:text-white transition-colors">
                Careers
              </Link>
            </li>
            <li>
              <Link href="/blog" className="hover:text-white transition-colors">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-white transition-colors">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h3 className="text-xl font-bold mb-4 text-blue-200">Legal</h3>
          <ul className="space-y-2 text-gray-200">
            <li>
              <Link href="/legal/privacy-policy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/legal/terms-of-service" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
            </li>
            <li>
              <Link href="/legal/cookie-policy" className="hover:text-white transition-colors">
                Cookie Policy
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-blue-500/50 pt-6">
        <p className="text-center text-sm text-blue-100 pb-10">
          © {new Date().getFullYear()} KamiyTech. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
