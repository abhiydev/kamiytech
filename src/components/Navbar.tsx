'use client'

import Link from 'next/link'
import { useUser, UserButton } from '@clerk/nextjs'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { IoIosArrowDropdownCircle } from 'react-icons/io'
import { GrUserAdmin } from 'react-icons/gr'
import { BiPurchaseTag } from 'react-icons/bi'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Contact', href: '/contact' }
]

export default function Navbar() {
  const { user, isSignedIn } = useUser()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isUserDropDownOpen, setIsUserDropDownOpen] = useState(false)
  const pathname = usePathname()

  const toggleMobileMenu = () => setIsMobileMenuOpen(prev => !prev)
  const toggleUserDropDown = () => setIsUserDropDownOpen(prev => !prev)

  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [pathname])

  const isActive = (path: string) => pathname === path

  return (
    <nav className="sticky top-0 z-50 bg-surface/95 backdrop-blur-sm shadow-md text-text font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-primary">KamiyTech</Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                className={`relative transition-colors duration-300 ${isActive(href)
                  ? 'text-primary font-medium'
                  : 'text-muted hover:text-primary'
                  }`}
              >
                {label}
                {isActive(href) && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary" />
                )}
              </Link>
            ))}
          </div>

          {/* Desktop Auth */}
          <div className="hidden md:flex items-center space-x-4">
            {isSignedIn ? (
              <button
                onClick={toggleUserDropDown}
                className="flex items-center gap-2 hover:bg-[secondary] px-4 py-2">
                <UserButton
                  appearance={{
                    elements: {
                      avatarBox: 'w-10 h-10 hover:scale-105 transition-transform duration-300',
                      userButtonPopoverCard: 'bg-surface shadow-lg border border-border',
                      userButtonPopoverActionButton: 'text-muted hover:text-primary'
                    }
                  }}
                />
                <div className='flex items-center gap-2'>
                  {user.fullName}
                  <IoIosArrowDropdownCircle className='text-white' />
                </div>
                {isUserDropDownOpen && (
                  <ul className='h-auto w-2xs absolute top-14 bg-white text-black p-2 rounded shadow-md flex flex-col'>
                    <Link
                    href={"/purchases"}
                    className="py-1 px-2 hover:bg-gray-100 rounded cursor-pointer flex gap-2 items-center justify-center ">
                      <BiPurchaseTag />
                      Purchases
                    </Link>
                    {user?.publicMetadata?.role === 'admin' && (
                    <Link
                    href={"/admin"}
                    className="py-1 px-2 hover:bg-gray-100 rounded cursor-pointer flex gap-2 items-center justify-center">
                      <GrUserAdmin />
                      Admin Dashboard
                    </Link>
                    )}
                  </ul>
                )}

              </button>
            ) : (
              <>
                <Link href="/sign-in" className="text-primary hover:underline">
                  Sign In
                </Link>
                <Link
                  href="/sign-up"
                  className="bg-primary text-white px-4 py-2 rounded-xl hover:bg-primary-dark transition"
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-muted hover:text-primary transition-transform hover:scale-110"
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden fixed inset-0 z-40 transition-all ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
        {/* Backdrop */}
        <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" onClick={toggleMobileMenu} />

        {/* Menu Panel */}
        <div className={`absolute top-0 right-0 h-full w-full max-w-sm bg-surface shadow-xl transition-transform duration-300 ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="flex justify-between items-center px-4 h-16 border-b border-border">
            <span className="text-xl font-semibold text-primary">Menu</span>
            <button onClick={toggleMobileMenu} className="text-muted hover:text-primary">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="flex flex-col px-4 py-6 gap-3">
            {navLinks.map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                onClick={toggleMobileMenu}
                className={`px-4 py-3 rounded-xl transition-all ${isActive(href)
                  ? 'text-primary bg-primary/5 font-medium shadow-sm'
                  : 'text-muted hover:text-primary hover:bg-primary/5 hover:shadow'
                  }`}
              >
                {label}
              </Link>
            ))}
          </div>

          <div className="px-4 py-4 border-t border-border">
            {!isSignedIn ? (
              <div className="flex flex-col gap-3">
                <Link
                  href="/sign-in"
                  onClick={toggleMobileMenu}
                  className="text-primary border-2 border-primary px-4 py-3 rounded-xl text-center hover:bg-primary/10 transition"
                >
                  Sign In
                </Link>
                <Link
                  href="/sign-up"
                  onClick={toggleMobileMenu}
                  className="bg-primary text-white px-4 py-3 rounded-xl text-center hover:bg-primary-dark transition"
                >
                  Sign Up
                </Link>
              </div>
            ) : (
              <div className="px-4 py-2">
                <UserButton
                  appearance={{
                    elements: {
                      avatarBox: 'w-10 h-10 hover:scale-105 transition-transform duration-300',
                      userButtonPopoverCard: 'bg-surface shadow-lg border border-border',
                      userButtonPopoverActionButton: 'text-muted hover:text-primary'
                    }
                  }}
                />
                <p>
                  {user.fullName}
                  <IoIosArrowDropdownCircle className='text-white' />
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}
