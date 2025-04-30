"use client"

import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState, useRef } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import { FaBars, FaTimes } from 'react-icons/fa'
import { ShinyButton } from '@/components/magicui/shiny-button'

export default function Navbar() {
    const pathname = usePathname()
    const router = useRouter()
    const [scrolled, setScrolled] = useState(false)
    const [isHamOpen, setIsHamOpen] = useState(false)
    const mobileNavRef = useRef<HTMLDivElement>(null)

    // add shadow on scroll
    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 0)
        onScroll()
        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    // close mobile nav on click outside
    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (mobileNavRef.current && !mobileNavRef.current.contains(e.target as Node)) {
                setIsHamOpen(false)
            }
        }
        if (isHamOpen) document.addEventListener('mousedown', handleClickOutside)
        return () => document.removeEventListener('mousedown', handleClickOutside)
    }, [isHamOpen])

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About kamiytech', path: '/about' },
        { name: 'Services', path: '/#ourservices' },
        { name: 'Projects', path: '/projects' },
        { name: 'Contact', path: '/#contactus' },
        { name: 'Blog', path: '/blog' },
    ]

    return (
        <nav 
        className={`flex justify-between sticky top-0 z-50 bg-[--bg-color] items-center px-4 py-2 w-full mx-auto h-24 transition-all duration-300 ${
            scrolled
              ? 'bg-white/70 backdrop-blur-md shadow-lg'
              : 'bg-transparent'
          }`}        >
            <div className='max-w-7xl mx-auto flex justify-between items-center w-full'>

                {/* Logo */}
                <Link href="/">
                    <Image src="/logo.png" className="cursor-pointer object-cover" alt="logo" width={100} height={25} />
                </Link>

                {/* Desktop Links */}
                <div className="hidden md:flex gap-8 font-semibold text-black items-center">
                    {navLinks.map(link => (
                        <Link
                            key={link.path}
                            href={link.path}
                            className={`transition-colors hover:text-blue-600 ${pathname === link.path ? 'text-blue-600' : 'text-black'}`}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <ShinyButton
                        onClick={() => router.push('/#contactus')}
                        className="bg-blue-600 cursor-pointer text-white rounded-full text-xs px-4 py-2 hover:bg-blue-800 hover:scale-75 transition"
                    >
                        Book a demo
                    </ShinyButton>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden p-2 text-2xl text-black"
                    onClick={() => setIsHamOpen(open => !open)}
                    aria-label="Toggle menu"
                >
                    {isHamOpen ? <FaTimes /> : <FaBars />}
                </button>

                {/* Fullscreen Mobile Menu */}
                {isHamOpen && (
                    <div
                        ref={mobileNavRef}
                        className="md:hidden fixed inset-0 bg-white z-50 flex flex-col"
                    >
                        {/* Header with close */}
                        <div className="flex items-center justify-between p-4 border-b">
                            <Link href="/">
                                <Image src="/logo.png" className="cursor-pointer object-cover" alt="logo" width={100} height={25} />
                            </Link>
                            <button className="p-2 text-2xl" onClick={() => setIsHamOpen(false)}>
                                <FaTimes />
                            </button>
                        </div>
                        {/* Nav Links */}
                        <div className="flex-grow overflow-y-auto p-4 space-y-4 font-semibold">
                            {navLinks.map(link => (
                                <Link
                                    key={link.path}
                                    href={link.path}
                                    onClick={() => setIsHamOpen(false)}
                                    className={`block px-4 py-2 rounded transition-colors ${pathname === link.path ? 'text-blue-600 bg-blue-100' : 'text-black hover:bg-gray-100'}`}
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                        {/* Footer Button */}
                        <div className="p-4 border-t">
                            <button
                                onClick={() => { setIsHamOpen(false); router.push('/#contactus') }}
                                className="w-full cursor-pointer bg-blue-600 text-white rounded-full text-xs px-4 py-2 hover:bg-blue-800 transition"
                            >
                                Book a demo
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    )
}