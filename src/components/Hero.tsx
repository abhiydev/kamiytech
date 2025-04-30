"use client"

import Image from 'next/image'
import React from 'react'
import { BoxReveal } from '@/components/magicui/box-reveal'
import KiyoPopup from './KiyoPopUp'
import { useRouter } from 'next/navigation'

const Hero = () => {
    const router = useRouter()
    return (
        <section className="relative w-full h-auto md:h-[85vh] bg-gradient-to-br overflow-hidden">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 items-center h-full px-4 sm:px-6 lg:px-12 gap-8">

                {/* Text + CTAs */}
                <BoxReveal width="100%" boxColor="#0693E3" duration={0.6}>
                    <div className="w-full flex flex-col justify-center items-start space-y-6 p-0 sm:pl-16 lg:pl-24">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
                            Welcome to Our <span className="text-blue-600">Innovative Platform</span>
                        </h1>
                        <p className="text-base sm:text-lg md:text-xl text-gray-600">
                            At Kamiytech we craft custom software, websites, and mobile apps tailored for startups and growing businesses.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full sm:w-auto">

                            {/* your actual CTA button stays static on top */}
                            <button
                                onClick={() => router.push('/#contactus')}
                                className="relative w-full sm:w-auto px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 transition"
                                style={{ borderRadius: '0.75rem' }}
                            >
                                Get Started
                            </button>
                            {/* Learn More stays unchanged */}
                            <button 
                            onClick={() => router.push('/about')}
                            className="w-full sm:w-auto px-6 py-3 bg-gray-200 text-gray-800 font-semibold rounded-lg shadow hover:bg-gray-300 transition">
                                Learn More
                            </button>
                        </div>

                    </div>
                </BoxReveal>

                {/* Hero Image */}
                {/* <div className="relative w-full h-64 sm:h-80 md:h-96 lg:h-[500px] group">
                    <Image
                        src="/kiyo.png"
                        alt="Hero Illustration"
                        fill
                        className="object-contain animate-float z-10"
                    />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="bg-white z-20 text-black text-sm px-4 py-2 rounded-lg shadow-lg">
                            Hey, I am Kamiy
                        </div>
                    </div>
                </div> */}
                <KiyoPopup />
            </div>

            {/* Decorative Wave */}
            <Image
                src="/ani-wave.svg"
                alt="wave foreground"
                fill
                className="object-cover -z-10 opacity-50"
            />
        </section>
    )
}

export default Hero
