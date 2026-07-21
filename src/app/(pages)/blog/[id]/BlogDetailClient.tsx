'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Image from 'next/image'
import api from '@/lib/axios'

type BlogType = {
  _id: string
  title: string
  desc: string
  imageURL?: string
  createdAt: string
}

export default function BlogDetailClient({ id }: { id: string }) {
  const [blog, setBlog] = useState<BlogType | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (!id) return

    const fetchBlog = async () => {
      try {
        setLoading(true)
        const res = await api.get(`/api/blog?id=${id}`)
        if (res.data?.success && res.data?.blog) {
          setBlog(res.data.blog)
        } else {
          setError('Blog not found.')
        }
      } catch (err) {
        console.error('Error fetching blog:', err)
        setError('Failed to load blog.')
      } finally {
        setLoading(false)
      }
    }

    fetchBlog()
  }, [id])

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col bg-gray-100 text-gray-800">
        <Navbar />
        <main className="flex-1 flex items-center justify-center text-center">
          <p className="text-gray-500 text-lg">Loading blog post...</p>
        </main>
        <Footer />
      </div>
    )
  }

  if (error || !blog) {
    return (
      <div className="min-h-screen flex flex-col bg-gray-100 text-gray-800">
        <Navbar />
        <main className="flex-1 flex flex-col items-center text-center px-4 py-20">
          <h2 className="text-4xl font-bold mb-6">Blog Not Found</h2>
          <p className="text-lg text-gray-600">{error || 'Something went wrong.'}</p>
          <Link
            href="/blog"
            className="mt-6 inline-block bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
          >
            Back to Blogs
          </Link>
        </main>
        <Footer />
      </div>
    )
  }

  const getImageSrc = (url?: string) => {
    if (!url) return ''
    if (url.startsWith('http')) return url
    if (url.startsWith('/')) return url
    return `/uploads/${url}`
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-100 text-gray-800">
      <Navbar />

      <main className="flex-1 flex flex-col items-center text-center px-4 py-20">
        <h1 className="text-4xl font-extrabold mb-6 max-w-4xl text-gray-900">{blog.title}</h1>

        {blog.imageURL && (
          <div className="relative w-full max-w-3xl h-[400px] mb-8 shadow-xl rounded-xl overflow-hidden">
            <Image
              src={getImageSrc(blog.imageURL)}
              alt={blog.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        )}

        <article className="text-lg max-w-3xl mb-8 text-gray-700 text-left leading-relaxed whitespace-pre-line bg-white p-8 rounded-xl shadow-sm border border-gray-200">
          {blog.desc}
        </article>

        <Link
          href="/blog"
          className="mt-4 inline-block bg-blue-600 text-white px-6 py-2.5 rounded-lg hover:bg-blue-700 transition font-medium"
        >
          ← Back to All Blogs
        </Link>
      </main>

      <Footer />
    </div>
  )
}
