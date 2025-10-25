'use client'

import React, { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
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

const BlogDetails = () => {
  const { id } = useParams()
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
          <p className="text-gray-500 text-lg">Loading blog...</p>
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
            className="mt-6 inline-block bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition"
          >
            Back to Blogs
          </Link>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-100 text-gray-800">
      <Navbar />

      <main className="flex-1 flex flex-col items-center text-center px-4 py-20">
        <h2 className="text-4xl font-bold mb-6">{blog.title}</h2>

        {blog.imageURL && (
          <div className="relative w-full max-w-3xl h-[400px] mb-6">
            <Image
              src={
                blog.imageURL.startsWith('/')
                  ? blog.imageURL
                  : `/uploads/${blog.imageURL}`
              }
              alt={blog.title}
              fill
              className="rounded-lg object-cover"
            />
          </div>
        )}

        <p className="text-lg max-w-3xl mb-8 text-gray-600 whitespace-pre-line">
          {blog.desc}
        </p>

        <Link
          href="/blog"
          className="mt-6 inline-block bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition"
        >
          Back to Blogs
        </Link>
      </main>

      <Footer />
    </div>
  )
}

export default BlogDetails
