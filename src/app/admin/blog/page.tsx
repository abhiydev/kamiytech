'use client'
import { useState } from 'react'
import dynamic from 'next/dynamic'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import api from '@/lib/axios'
import Image from 'next/image'

const CldUploadButton = dynamic(
  () => import('next-cloudinary').then((mod) => mod.CldUploadButton),
  { ssr: false }
)

const AddBlog = () => {
  const [title, setTitle] = useState('')
  const [desc, setDesc] = useState('')
  const [imageUrl, setImageUrl] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)
    setSuccess(null)

    try {
      const res = await api.post('/api/blog', {
        title: title.trim(),
        desc: desc.trim(),
        image: imageUrl,
      })

      if (res.data?.success) {
        setSuccess('✅ Blog added successfully!')
        setTitle('')
        setDesc('')
        setImageUrl(null)
      } else {
        throw new Error(res.data?.error || 'Failed to add blog')
      }
    } catch (err) {
      console.error('Error adding blog:', err)
      setError('❌ Failed to add blog. Please try again later.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-100 text-gray-800">
      <Navbar />
      <main className="flex-1 flex flex-col items-center text-center px-4 py-20">
        <h2 className="text-4xl font-bold mb-6">Add New Blog Post</h2>

        <form
          onSubmit={handleSubmit}
          className="w-full max-w-lg bg-white p-8 rounded shadow"
        >
          {error && <p className="text-red-500 mb-4">{error}</p>}
          {success && <p className="text-green-600 mb-4">{success}</p>}

          {/* Title */}
          <div className="mb-4">
            <label className="block text-left text-gray-700 mb-2" htmlFor="title">
              Title
            </label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-3 py-2 border rounded"
              required
            />
          </div>

          {/* Description */}
          <div className="mb-4">
            <label className="block text-left text-gray-700 mb-2" htmlFor="desc">
              Description
            </label>
            <textarea
              id="desc"
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
              className="w-full px-3 py-2 border rounded"
              rows={5}
              required
            ></textarea>
          </div>

          {/* Cloudinary Upload */}
          <div className="mb-6">
            <label className="block text-left text-gray-700 mb-2">
              Blog Image
            </label>

            <CldUploadButton
              uploadPreset="ml_default"
              options={{ multiple: false, cloudName: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || "kamiytech" }}
              onSuccess={(result) => {
                if (
                  typeof result?.info === 'object' &&
                  'secure_url' in result.info
                ) {
                  setImageUrl(result.info.secure_url as string)
                }
              }}
              onError={(err) => {
                console.error('Upload failed:', err)
                setError('Image upload failed. Please try again.')
              }}
            >
              <div className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer hover:bg-blue-600 transition">
                Upload Image
              </div>
            </CldUploadButton>

            {imageUrl && (
              <div className="mt-4">
                <Image
                  src={imageUrl}
                  alt="Uploaded Blog"
                  width={300}
                  height={200}
                  className="rounded-lg shadow-md mx-auto object-contain"
                />
              </div>
            )}
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600 transition"
            disabled={loading || !imageUrl}
          >
            {loading ? 'Adding...' : 'Add Blog'}
          </button>
        </form>
      </main>
      <Footer />
    </div>
  )
}

export default AddBlog
