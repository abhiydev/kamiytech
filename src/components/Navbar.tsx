'use client'

import Link from 'next/link'
import { useUser, UserButton } from '@clerk/nextjs'
import { useState, useEffect, useRef, JSX } from 'react'
import { usePathname } from 'next/navigation'
import { IoIosArrowDropdownCircle } from 'react-icons/io'
import { GrUserAdmin } from 'react-icons/gr'
import { BiPurchaseTag } from 'react-icons/bi'

interface NavLink {
  label: string
  href: string
}

const navLinks: NavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Contact', href: '/contact' }
]

export default function Navbar(): JSX.Element {
  const { user, isSignedIn } = useUser()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false)
  const [isUserDropDownOpen, setIsUserDropDownOpen] = useState<boolean>(false)
  const pathname = usePathname()
  const mobileMenuRef = useRef<HTMLDivElement>(null)

  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev)
  const toggleUserDropDown = () => setIsUserDropDownOpen((prev) => !prev)

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false)
    setIsUserDropDownOpen(false)
  }, [pathname])

  // Close mobile menu when clicking outside its panel
  useEffect(() => {
    function handleClickOutside(event: globalThis.MouseEvent) {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target as Node)
      ) {
        setIsMobileMenuOpen(false)
        setIsUserDropDownOpen(false)
      }
    }
    if (isMobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    } else {
      document.removeEventListener('mousedown', handleClickOutside)
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isMobileMenuOpen])

  const isActive = (path: string): boolean => pathname === path

  return (
    <nav
      role="navigation"
      aria-label="Main Navigation"
      className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-md text-gray-900 font-sans"
    >
      {/* Container with max-width */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <Link
            href="/"
            className="text-2xl font-bold text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            KamiyTech
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                className={`relative transition-colors duration-300 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 ${
                  isActive(href)
                    ? 'text-blue-600 font-medium'
                    : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                {label}
                {isActive(href) && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600" />
                )}
              </Link>
            ))}
          </div>

          {/* Desktop Auth & User Dropdown */}
          <div className="hidden md:flex items-center space-x-4 relative">
            {isSignedIn ? (
              <div>
                <button
                  onClick={toggleUserDropDown}
                  className="flex items-center gap-2 px-4 py-2 rounded hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  aria-haspopup="true"
                  aria-expanded={isUserDropDownOpen}
                >
                  <UserButton
                    appearance={{
                      elements: {
                        avatarBox:
                          'w-10 h-10 transition-transform duration-300 hover:scale-105',
                        userButtonPopoverCard:
                          'bg-white shadow-lg border border-gray-200',
                        userButtonPopoverActionButton:
                          'text-gray-600 hover:text-blue-600'
                      }
                    }}
                  />
                  <div className="flex items-center gap-1">
                    {user?.fullName}
                    <IoIosArrowDropdownCircle className="text-blue-600" />
                  </div>
                </button>
                {isUserDropDownOpen && (
                  <ul className="absolute right-0 mt-2 w-48 bg-white text-gray-800 p-2 rounded shadow-lg z-10">
                    <Link
                      href="/purchases"
                      className="flex items-center gap-2 px-2 py-1 hover:bg-gray-100 rounded transition"
                    >
                      <BiPurchaseTag />
                      Purchases
                    </Link>
                    {user?.publicMetadata?.role === 'admin' && (
                      <Link
                        href="/admin"
                        className="flex items-center gap-2 px-2 py-1 hover:bg-gray-100 rounded transition"
                      >
                        <GrUserAdmin />
                        Admin Dashboard
                      </Link>
                    )}
                  </ul>
                )}
              </div>
            ) : (
              <div className="flex items-center gap-4">
                <Link
                  href="/sign-in"
                  className="text-blue-600 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-400"
                >
                  Sign In
                </Link>
                <Link
                  href="/sign-up"
                  className="bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700 transition focus:outline-none focus:ring-2 focus:ring-blue-400"
                >
                  Sign Up
                </Link>
              </div>
            )}
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-gray-600 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-transform"
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`md:hidden fixed inset-0 z-40 transition-opacity duration-300 ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        aria-hidden={!isMobileMenuOpen}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/30 backdrop-blur-sm"
          onClick={toggleMobileMenu}
        />

        {/* Slide-in Mobile Menu Panel */}
        <div
          ref={mobileMenuRef}
          className={`fixed top-0 right-0 h-full w-[90vw] max-w-sm bg-white shadow-xl transform transition-transform duration-300 ${
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-[100vw]'
          }`}
        >
          <div className="flex justify-between items-center px-4 h-16 border-b border-gray-200 bg-white">
            <span className="text-xl font-semibold text-blue-600">Menu</span>
            <button
              onClick={toggleMobileMenu}
              className="text-gray-600 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
              aria-label="Close menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col px-4 py-6 space-y-3 bg-black">
            {navLinks.map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                onClick={toggleMobileMenu}
                className={`block px-4 py-3 rounded-xl transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400 ${
                  isActive(href)
                    ? 'text-blue-600 bg-blue-50 font-medium shadow'
                    : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                }`}
              >
                {label}
              </Link>
            ))}
          </div>

          {/* Mobile Authentication Section */}
          <div className="px-4 py-4 border-t border-gray-200">
            {!isSignedIn ? (
              <div className="flex flex-col gap-3">
                <Link
                  href="/sign-in"
                  onClick={toggleMobileMenu}
                  className="text-blue-600 border border-blue-600 px-4 py-3 rounded-xl text-center hover:bg-blue-50 transition focus:outline-none focus:ring-2 focus:ring-blue-400"
                >
                  Sign In
                </Link>
                <Link
                  href="/sign-up"
                  onClick={toggleMobileMenu}
                  className="bg-blue-600 text-white px-4 py-3 rounded-xl text-center hover:bg-blue-700 transition focus:outline-none focus:ring-2 focus:ring-blue-400"
                >
                  Sign Up
                </Link>
              </div>
            ) : (
              <div className="px-2 bg-white rounded-xl shadow-md">
                <button
                  onClick={toggleUserDropDown}
                  className="flex items-center justify-between w-full focus:outline-none"
                  aria-haspopup="true"
                  aria-expanded={isUserDropDownOpen}
                >
                  <div className="flex items-center gap-3">
                    <UserButton
                      appearance={{
                        elements: {
                          avatarBox:
                            'w-10 h-10 transition-transform duration-300 hover:scale-105',
                          userButtonPopoverCard:
                            'bg-white shadow-lg border border-gray-200',
                          userButtonPopoverActionButton:
                            'text-gray-600 hover:text-blue-600'
                        }
                      }}
                    />
                    <span className="text-gray-800">{user?.fullName}</span>
                  </div>
                  <IoIosArrowDropdownCircle className="text-blue-600" />
                </button>
                {isUserDropDownOpen && (
                  <ul className="mt-2 bg-gray-50 rounded shadow p-2">
                    <Link
                      href="/purchases"
                      onClick={toggleMobileMenu}
                      className="block px-2 py-1 hover:bg-gray-100 rounded transition"
                    >
                      <div className="flex items-center gap-2">
                        <BiPurchaseTag />
                        <span>Purchases</span>
                      </div>
                    </Link>
                    {user?.publicMetadata?.role === 'admin' && (
                      <Link
                        href="/admin"
                        onClick={toggleMobileMenu}
                        className="block px-2 py-1 hover:bg-gray-100 rounded transition"
                      >
                        <div className="flex items-center gap-2">
                          <GrUserAdmin />
                          <span>Admin Dashboard</span>
                        </div>
                      </Link>
                    )}
                  </ul>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}
