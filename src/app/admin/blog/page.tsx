'use client'
import { useState } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import api from '@/lib/axios'

const AddBlog = () => {
    const [title, setTitle] = useState('')
    const [desc, setDesc] = useState('')
    const [image, setImage] = useState<File | null>(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)
    const [success, setSuccess] = useState<string | null>(null)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setLoading(true)
        setError(null)
        setSuccess(null)
        try {
            const formData = new FormData()
            formData.append('title', title)
            formData.append('desc', desc)
            if (image) {
                formData.append('image', image)
            }
            const res = await api.post('/api/blog', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            })
            if (res.data?.success) {
                setSuccess('Blog added successfully!')
                setTitle('')
                setDesc('')
                setImage(null)
            } else {
                throw new Error(res.data?.error || 'Failed to add blog')
            }
        } catch (err) {
            console.error('Error adding blog:', err)
            setError('Failed to add blog. Please try again later.')
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
                    {success && <p className="text-green-500 mb-4">{success}</p>}
                    <div className="mb-4">
                        <label className="block text-left text-gray-700 mb-2" htmlFor="title">  Title</label>
                        <input
                            type="text" 
                            id="title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className="w-full px-3 py-2 border rounded"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-left text-gray-700 mb-2" htmlFor="desc">Description</label>
                        <textarea
                            id="desc"
                            value={desc}
                            onChange={(e) => setDesc(e.target.value)}
                            className="w-full px-3 py-2 border rounded"
                            rows={5}
                            required    
                        ></textarea>
                    </div>
                    <div className="mb-6">
                        <label className="block text-left text-gray-700 mb-2" htmlFor="image">Image</label>
                        <input
                            type="file"
                            id="image"
                            accept="image/*"
                            onChange={(e) => {  
                                if (e.target.files && e.target.files[0]) {
                                    setImage(e.target.files[0])
                                }   
                            }}
                            className="w-full"
                        />
                    </div>
                    <button
                        type="submit"           
                        className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition"
                        disabled={loading}
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