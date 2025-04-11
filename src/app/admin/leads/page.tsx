'use client';

import { useUser } from '@clerk/nextjs';
import { useEffect, useState } from 'react';
import api from '@/lib/axios';

interface Lead {
    _id: string;
    companyname: string;
    name: string;
    contact: string;
    address?: string;
    area?: string;
    city: string;
    country: string;
    cat?: string;
    desc?: string;
    quality?: string;
    author: string;
    createdAt?: string;
    updatedAt?: string;
}

export default function LeadsPage() {
    const { user, isLoaded } = useUser();
    const [leads, setLeads] = useState<Lead[]>([]);
    const [deleteCardId, setDeleteCardId] = useState<string | null>(null);
    const [updateCardId, setUpdateCardId] = useState<string | null>(null);
    const [updateData, setUpdateData] = useState<Partial<Lead>>({});

    const qualityOptions = ['High', 'Mid', 'Low', 'Unknown'];
    const categoryOptions = [
        'Gym',
        'Realestate',
        'School',
        'Hospital',
        'Super market',
        'Mp online',
        'Cafe & Resturant'
    ];

    const [formData, setFormData] = useState<Omit<Lead, '_id'>>({
        companyname: '',
        name: '',
        contact: '',
        address: '',
        area: '',
        city: 'Indore',
        country: 'India',
        cat: '',
        desc: '',
        quality: 'Unknown',
        author: '',
    });

    // When user data is loaded, auto-set the author
    useEffect(() => {
        if (isLoaded && user?.fullName) {
            setFormData(prev => ({ ...prev, author: user.fullName }));
        }
    }, [isLoaded, user]);

    // Fetch leads from backend
    const fetchLeads = async () => {
        try {
            const res = await api.get('/api/leads');
            setLeads(res.data);
        } catch (err) {
            console.error('Fetch error:', err);
            alert('Failed to fetch leads');
        }
    };

    useEffect(() => {
        fetchLeads();
    }, []);

    // Handle form change for adding lead
    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Add lead handler (POST)
    const handleAdd = async () => {
        if (!formData.author) {
            alert('Author is missing. Make sure you are logged in.');
            return;
        }
        try {
            await api.post('/api/leads', formData);
            setFormData({
                companyname: '',
                name: '',
                contact: '',
                address: '',
                area: '',
                city: 'Indore',
                country: 'India',
                cat: '',
                desc: '',
                quality: 'Unknown',
                author: user?.fullName || '',
            });
            fetchLeads();
        } catch (err) {
            console.error('❌ Error adding lead:', err);
            alert('Error adding lead');
        }
    };

    // Delete lead handler (DELETE)
    const handleDelete = async (id: string) => {
        try {
            await api.delete('/api/leads', { data: { id } });
            fetchLeads();
        } catch (err) {
            console.error('❌ Error deleting lead:', err);
            alert('Error deleting lead');
        }
    };

    // For updating, prefill updateData and open update modal
    const openUpdatePopup = (lead: Lead) => {
        setUpdateCardId(lead._id);
        setUpdateData({ ...lead });
    };

    // Handle change inside update modal
    const handleUpdateChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        setUpdateData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    // Handle update save (PUT request)
    const handleUpdateSave = async () => {
        try {
            await api.put('/api/leads', { ...updateData, id: updateCardId });
            setUpdateCardId(null);
            setUpdateData({});
            fetchLeads();
        } catch (err) {
            console.error('❌ Error updating lead:', err);
            alert('Error updating lead');
        }
    };

    const getQualityColor = (quality?: string) => {
        switch (quality) {
            case 'High':
                return 'bg-green-600 text-white';
            case 'Mid':
                return 'bg-yellow-600 text-white';
            case 'Low':
                return 'bg-red-600 text-white';
            default:
                return 'bg-gray-600 text-white';
        }
    };

    if (!isLoaded) return <p className="text-white text-center">Loading user...</p>;

    return (
        <div className="min-h-screen bg-gray-900 text-white p-6 relative">
            <h1 className="text-3xl font-bold mb-10 text-center">Lead Management CRM</h1>

            {/* Add Lead Form */}
            <div className="bg-gray-800 rounded-lg shadow-lg p-8 mb-12 max-w-4xl mx-auto">
                <h2 className="text-2xl font-semibold mb-6 border-b border-gray-700 pb-2">Add New Lead</h2>
                <form className="space-y-6">
                    {/* Company Name & Category */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-300 mb-1">Company Name</label>
                            <input
                                type="text"
                                name="companyname"
                                value={formData.companyname}
                                onChange={handleChange}
                                placeholder="Enter company name"
                                className="w-full p-3 bg-gray-700 text-white border border-gray-600 rounded"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-300 mb-1">Category</label>
                            <select
                                name="cat"
                                value={formData.cat}
                                onChange={handleChange}
                                className="w-full p-3 bg-gray-700 text-white border border-gray-600 rounded"
                            >
                                <option value="">Select category</option>
                                {categoryOptions.map((option) => (
                                    <option key={option} value={option.toLowerCase()}>
                                        {option}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>

                    {/* Name & Contact */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-300 mb-1">Name</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Enter contact name"
                                className="w-full p-3 bg-gray-700 text-white border border-gray-600 rounded"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-300 mb-1">Contact</label>
                            <input
                                type="text"
                                name="contact"
                                value={formData.contact}
                                onChange={handleChange}
                                placeholder="Enter phone or email"
                                className="w-full p-3 bg-gray-700 text-white border border-gray-600 rounded"
                            />
                        </div>
                    </div>

                    {/* Address, Area, City & Country */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        <div className="md:col-span-2">
                            <label className="block text-sm font-medium text-gray-300 mb-1">Address</label>
                            <input
                                type="text"
                                name="address"
                                value={formData.address}
                                onChange={handleChange}
                                placeholder="Enter address"
                                className="w-full p-3 bg-gray-700 text-white border border-gray-600 rounded"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-300 mb-1">Area</label>
                            <input
                                type="text"
                                name="area"
                                value={formData.area}
                                onChange={handleChange}
                                placeholder="Enter area"
                                className="w-full p-3 bg-gray-700 text-white border border-gray-600 rounded"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-300 mb-1">City</label>
                            <input
                                type="text"
                                name="city"
                                value={formData.city}
                                onChange={handleChange}
                                placeholder="Enter city"
                                className="w-full p-3 bg-gray-700 text-white border border-gray-600 rounded"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-300 mb-1">Country</label>
                            <input
                                type="text"
                                name="country"
                                value={formData.country}
                                onChange={handleChange}
                                placeholder="Enter country"
                                className="w-full p-3 bg-gray-700 text-white border border-gray-600 rounded"
                            />
                        </div>
                    </div>

                    {/* Lead Quality */}
                    <div>
                        <label className="block text-sm font-medium text-gray-300 mb-1">Lead Quality</label>
                        <select
                            name="quality"
                            value={formData.quality}
                            onChange={handleChange}
                            className="w-full p-3 bg-gray-700 text-white border border-gray-600 rounded"
                        >
                            {qualityOptions.map((option) => (
                                <option key={option} value={option}>
                                    {option}
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* Description */}
                    <div>
                        <label className="block text-sm font-medium text-gray-300 mb-1">Description</label>
                        <textarea
                            name="desc"
                            value={formData.desc}
                            onChange={handleChange}
                            placeholder="Enter additional notes..."
                            rows={4}
                            className="w-full p-3 bg-gray-700 text-white border border-gray-600 rounded"
                        />
                    </div>

                    {/* Author */}
                    <div>
                        <label className="block text-sm font-medium text-gray-300 mb-1">Author</label>
                        <input
                            type="text"
                            name="author"
                            value={formData.author}
                            readOnly
                            className="w-full p-3 bg-gray-600 text-white border border-gray-600 rounded"
                        />
                    </div>

                    <button
                        type="button"
                        onClick={handleAdd}
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded shadow-md transition"
                    >
                        Add Lead
                    </button>
                </form>
            </div>

            {/* Leads Display */}
            <div className="max-w-5xl mx-auto">
                <h2 className="text-2xl font-semibold mb-6 border-b border-gray-700 pb-2">Leads</h2>
                {leads.length === 0 ? (
                    <p className="text-gray-400 text-center mt-10">No leads found.</p>
                ) : (
                    <div className="space-y-6">
                        {leads.map((lead) => (
                            <div
                                key={lead._id}
                                className="bg-gray-800 border border-gray-700 p-6 rounded-lg shadow-md flex flex-col md:flex-row md:items-center justify-between relative"
                            >
                                <div className="space-y-2">
                                    <p className="text-lg font-bold text-blue-400">{lead.companyname}</p>
                                    <p className="text-gray-200">
                                        <span className="font-semibold">{lead.name}</span> | {lead.contact}
                                    </p>
                                    <p className="text-sm text-gray-400"><span className="font-bold">Address:</span> {lead.address}</p>
                                    <p className="text-sm text-gray-400"><span className="font-bold">Area:</span> {lead.area}</p>
                                    <p className="text-sm text-gray-400"><span className="font-bold">City:</span> {lead.city}</p>
                                    <p className="text-sm text-gray-400"><span className="font-bold">Country:</span> {lead.country}</p>
                                    <p className="text-sm text-gray-400"><span className="font-bold">Category:</span> {lead.cat}</p>
                                    <p className={`text-sm font-semibold px-3 py-1 rounded inline-block ${getQualityColor(lead.quality)}`}>
                                        Quality: {lead.quality}
                                    </p>
                                    <p className="text-sm text-gray-400"><span className="font-bold">Description:</span> {lead.desc}</p>
                                    <p className="text-xs italic text-gray-500">By: {lead.author || 'Unknown'}</p>
                                    <p className="text-xs italic text-gray-500">
                                        Created At:{' '}
                                        {lead.createdAt
                                            ? new Date(lead.createdAt).toLocaleString('en-IN', {
                                                dateStyle: 'medium',
                                                timeStyle: 'short',
                                            })
                                            : 'Unknown'}
                                    </p>
                                </div>

                                {/* Update Button */}
                                <div className="flex flex-col gap-4">
                                    <button
                                        onClick={() => {
                                            setUpdateCardId(lead._id);
                                            setUpdateData({ ...lead });
                                        }}
                                        className="mt-4 cursor-pointer md:mt-0 bg-green-500 text-white px-6 py-3 rounded hover:bg-green-600 transition"
                                    >
                                        Update
                                    </button>

                                    {/* Update Confirmation Popup */}
                                    {updateCardId === lead._id && (
                                        <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center rounded-lg z-10">
                                            <div className="bg-gray-900 border border-yellow-500 p-6 rounded-lg text-center space-y-4 shadow-lg max-w-xl w-full">
                                                <h3 className="text-2xl font-bold text-white mb-4">Update Lead Info</h3>
                                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
                                                    <input
                                                        type="text"
                                                        name="companyname"
                                                        value={updateData.companyname || ''}
                                                        onChange={handleUpdateChange}
                                                        placeholder="Company Name"
                                                        className="w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500"
                                                    />
                                                    <input
                                                        type="text"
                                                        name="name"
                                                        value={updateData.name || ''}
                                                        onChange={handleUpdateChange}
                                                        placeholder="Name"
                                                        className="w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500"
                                                    />
                                                    <input
                                                        type="text"
                                                        name="contact"
                                                        value={updateData.contact || ''}
                                                        onChange={handleUpdateChange}
                                                        placeholder="Contact"
                                                        className="w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500"
                                                    />
                                                    <input
                                                        type="text"
                                                        name="address"
                                                        value={updateData.address || ''}
                                                        onChange={handleUpdateChange}
                                                        placeholder="Address"
                                                        className="w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500"
                                                    />
                                                    <input
                                                        type="text"
                                                        name="area"
                                                        value={updateData.area || ''}
                                                        onChange={handleUpdateChange}
                                                        placeholder="Area"
                                                        className="w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500"
                                                    />
                                                    <input
                                                        type="text"
                                                        name="city"
                                                        value={updateData.city || ''}
                                                        onChange={handleUpdateChange}
                                                        placeholder="City"
                                                        className="w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500"
                                                    />
                                                    <input
                                                        type="text"
                                                        name="country"
                                                        value={updateData.country || ''}
                                                        onChange={handleUpdateChange}
                                                        placeholder="Country"
                                                        className="w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500"
                                                    />
                                                    <select
                                                        name="cat"
                                                        value={updateData.cat || ''}
                                                        onChange={handleUpdateChange}
                                                        className="w-full p-2 rounded bg-gray-800 border border-gray-600 text-white"
                                                    >
                                                        <option value="">Select category</option>
                                                        {categoryOptions.map((c) => (
                                                            <option key={c} value={c.toLowerCase()}>
                                                                {c}
                                                            </option>
                                                        ))}
                                                    </select>
                                                    <select
                                                        name="quality"
                                                        value={updateData.quality || ''}
                                                        onChange={handleUpdateChange}
                                                        className="w-full p-2 rounded bg-gray-800 border border-gray-600 text-white"
                                                    >
                                                        {qualityOptions.map((q) => (
                                                            <option key={q} value={q}>
                                                                {q}
                                                            </option>
                                                        ))}
                                                    </select>
                                                    <textarea
                                                        name="desc"
                                                        rows={2}
                                                        value={updateData.desc || ''}
                                                        onChange={handleUpdateChange}
                                                        placeholder="Description"
                                                        className="col-span-1 sm:col-span-2 p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500"
                                                    />
                                                </div>
                                                <div className="flex justify-end gap-4 mt-6">
                                                    <button
                                                        onClick={() => setUpdateCardId(null)}
                                                        className="px-5 py-2 bg-gray-600 hover:bg-gray-500 text-white rounded transition"
                                                    >
                                                        Cancel
                                                    </button>
                                                    <button
                                                        onClick={handleUpdateSave}
                                                        className="px-5 py-2 bg-green-500 hover:bg-green-600 text-white rounded transition"
                                                    >
                                                        Save
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                    {/* Delete Button */}
                                    <button
                                        onClick={() => setDeleteCardId(lead._id)}
                                        className="mt-4 cursor-pointer md:mt-0 bg-red-500 text-white px-6 py-3 rounded hover:bg-red-600 transition"
                                    >
                                        Delete
                                    </button>
                                </div>

                                {/* Delete Confirmation Popup */}
                                {deleteCardId === lead._id && (
                                    <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center rounded-lg z-10">
                                        <div className="bg-gray-900 border border-red-600 p-6 rounded-lg text-center space-y-4 shadow-lg max-w-xs">
                                            <h3 className="text-lg font-bold text-white">Are you sure?</h3>
                                            <p className="text-sm text-gray-400">This action cannot be undone.</p>
                                            <div className="flex justify-center gap-4">
                                                <button
                                                    onClick={() => setDeleteCardId(null)}
                                                    className="bg-gray-600 hover:bg-gray-500 text-white px-4 py-2 rounded"
                                                >
                                                    No
                                                </button>
                                                <button
                                                    onClick={() => {
                                                        handleDelete(lead._id);
                                                        setDeleteCardId(null);
                                                    }}
                                                    className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded"
                                                >
                                                    Yes
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
