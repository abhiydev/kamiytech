'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import api from '@/lib/axios'
import Image from 'next/image'

type BlogType = {
  _id: string
  title: string
  desc: string
  imageURL?: string
  createdAt: string
}

const Blog = () => {
  const [blogs, setBlogs] = useState<BlogType[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [search, setSearch] = useState('')
  const router = useRouter()

  // Fetch blogs
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setLoading(true)
        setError(null)
        const res = await api.get('/api/blog')
        if (res.data?.success && Array.isArray(res.data.blogs)) {
          setBlogs(res.data.blogs)
        } else {
          throw new Error('Invalid API response')
        }
      } catch (err) {
        console.error('Error fetching blogs:', err)
        setError('Failed to load blogs. Please try again later.')
      } finally {
        setLoading(false)
      }
    }

    fetchBlogs()
  }, [])

  const filteredBlogs = blogs.filter(
    (blog) =>
      blog.title.toLowerCase().includes(search.toLowerCase()) ||
      blog.desc.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="min-h-screen flex flex-col bg-gray-100 text-gray-800">
      <Navbar />

      <main className="flex-1 flex flex-col items-center text-center px-4 py-20">
        <h2 className="text-4xl font-bold mb-2">Welcome to Our Blog</h2>
        <p className="text-lg max-w-2xl mb-8 text-gray-600">
          Insights on technology, finance, and corporate trends — straight from our team.
        </p>

        {/* Search */}
        <div className="flex justify-center items-center w-full mb-8">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border border-gray-300 rounded-lg px-4 py-2 w-full max-w-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            placeholder="Search blog posts..."
          />
        </div>

        {/* Blog Cards */}
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl animate-pulse">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow-sm">
                <div className="h-40 bg-gray-300 rounded mb-4"></div>
                <div className="h-6 bg-gray-300 rounded w-3/4 mb-3"></div>
                <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
                <div className="h-4 bg-gray-200 rounded w-2/3"></div>
              </div>
            ))}
          </div>
        ) : error ? (
          <p className="text-red-500 font-medium">{error}</p>
        ) : filteredBlogs.length === 0 ? (
          <p className="text-gray-500">No blogs found.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
            {filteredBlogs.map((blog) => (
              <article
                key={blog._id}
                className="bg-white shadow-md rounded-xl overflow-hidden text-left hover:shadow-2xl hover:-translate-y-1 transition-all duration-200"
              >
                {/* ✅ Cloudinary Image */}
                {blog.imageURL ? (
                  <div className="relative w-full h-48">
                    <Image
                      src={blog.imageURL}
                      alt={blog.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover"
                    />
                  </div>
                ) : (
                  <div className="h-48 bg-gray-200 flex items-center justify-center text-gray-400 text-sm">
                    No Image
                  </div>
                )}

                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {blog.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">{blog.desc}</p>
                  <div className="flex justify-between items-center text-sm text-gray-400">
                    <span>{new Date(blog.createdAt).toLocaleDateString()}</span>
                    <button
                      onClick={() => router.push(`/blog/${blog._id}`)}
                      className="text-blue-600 font-medium hover:underline"
                    >
                      Read More →
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </main>

      <Footer />
    </div>
  )
}

export default Blog
