'use client';

import React, { useEffect, useMemo, useState, useCallback } from 'react';
import { useUser } from '@clerk/nextjs';
import api from '@/lib/axios';
import Loader from '@/components/Loader';
import { IoIosSearch, IoMdAdd } from 'react-icons/io';
import { FaFilter, FaEllipsisV } from 'react-icons/fa';

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
  state?: string;
}

export default function LeadsPage() {
  const { user, isLoaded } = useUser();
  const [leads, setLeads] = useState<Lead[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  // Modals state
  const [showAddModal, setShowAddModal] = useState(false);
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedLeadId, setSelectedLeadId] = useState<string | null>(null);

  // Update Data state
  const [updateData, setUpdateData] = useState<Partial<Lead>>({});

  // Form state for adding new lead
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

  // Filter and sort state
  const [filters, setFilters] = useState({
    search: '',
    quality: '',
    area: '',
    city: '',
    state: '',
    cat: '',
  });
  const [sortOption, setSortOption] = useState<string>('newest');
  const [showFilterSort, setShowFilterSort] = useState<boolean>(false);

  // Options (feel free to extend)
  const qualityOptions = ['High', 'Mid', 'Low', 'Unknown'];
  const categoryOptions = [
    'Gym',
    'Real Estate',
    'School',
    'Hospital',
    'Super Market',
    'Mp online',
    'Cafe & Restaurant',
  ];

  // Set the author from the user data when loaded.
  useEffect(() => {
    if (isLoaded && user?.fullName) {
      setFormData((prev) => ({ ...prev, author: user.fullName || '' }));
    }
  }, [isLoaded, user]);

  // Fetch leads from backend
  const fetchLeads = useCallback(async () => {
    try {
      setIsLoading(true);
      if (!user) {
        alert('Please login to view leads.');
        window.location.href = '/login';
        return;
      }
      const res = await api.get('/api/leads');
      setLeads(res.data);
    } catch (err) {
      console.error('Fetch error:', err);
      alert('Failed to fetch leads');
    } finally {
      setIsLoading(false);
    }
  }, [user]);

  useEffect(() => {
    if (!user) {
      alert('Please login to view leads.');
      window.location.href = '/login';
      return;
    }
    fetchLeads();
  }, [user, fetchLeads]);

  // Handle change for add/update forms
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleUpdateChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setUpdateData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // Add lead handler
  const handleAdd = async () => {
    if (!formData.author) {
      alert('Author is missing. Make sure you are logged in.');
      return;
    }
    if (!formData.companyname || !formData.name || !formData.contact || !formData.area || !formData.cat) {
      alert('Please fill in all required fields: Company, Name, Contact, Area, and Category.');
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
      setShowAddModal(false);
    } catch (err) {
      console.error('Error adding lead:', err);
      alert('Error adding lead');
    }
  };

  // Delete lead handler
  const handleDelete = async (id: string) => {
    try {
      setIsLoading(true);
      if (!user) {
        alert('Please login to delete leads.');
        window.location.href = '/login';
        return;
      }
      await api.delete('/api/leads', { data: { id } });
      fetchLeads();
      setShowDeleteModal(false);
    } catch (err) {
      console.error('Error deleting lead:', err);
      alert('Error deleting lead');
    } finally {
      setIsLoading(false);
    }
  };

  // Update lead handler
  const handleUpdateSave = async () => {
    try {
      setIsLoading(true);
      await api.put('/api/leads', { ...updateData, id: selectedLeadId });
      setSelectedLeadId(null);
      setUpdateData({});
      fetchLeads();
      setShowUpdateModal(false);
    } catch (err) {
      console.error('Error updating lead:', err);
      alert('Error updating lead');
    } finally {
      setIsLoading(false);
    }
  };

  // Handle filter changes
  const handleFilterChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  // Compute filtered leads
  const filteredLeads = leads.filter((lead) => {
    const search = filters.search.toLowerCase();
    const matchesSearch =
      lead.name.toLowerCase().includes(search) ||
      lead.companyname.toLowerCase().includes(search) ||
      lead.contact.toLowerCase().includes(search);
    const matchesQuality = filters.quality === '' || lead.quality === filters.quality;
    const matchesArea =
      filters.area === '' ||
      (lead.area && lead.area.toLowerCase().includes(filters.area.toLowerCase()));
    const matchesCity =
      filters.city === '' || lead.city.toLowerCase().includes(filters.city.toLowerCase());
    const matchesState =
      filters.state === '' ||
      (lead.state && lead.state.toLowerCase().includes(filters.state.toLowerCase()));
    const matchesCategory =
      filters.cat === '' || (lead.cat && lead.cat.toLowerCase() === filters.cat.toLowerCase());
    return matchesSearch && matchesQuality && matchesArea && matchesCity && matchesState && matchesCategory;
  });

  // Compute sorted leads
  const sortedLeads = useMemo(() => {
    const leadsCopy = [...filteredLeads];
    if (sortOption === 'company') {
      return leadsCopy.sort((a, b) => a.companyname.localeCompare(b.companyname));
    } else if (sortOption === 'newest') {
      return leadsCopy.sort(
        (a, b) =>
          new Date(b.createdAt || 0).getTime() - new Date(a.createdAt || 0).getTime()
      );
    } else if (sortOption === 'oldest') {
      return leadsCopy.sort(
        (a, b) =>
          new Date(a.createdAt || 0).getTime() - new Date(b.createdAt || 0).getTime()
      );
    }
    return leadsCopy;
  }, [filteredLeads, sortOption]);

  // Format date helper
  const formatDate = (dateStr?: string) => {
    if (!dateStr) return 'Unknown';
    return new Date(dateStr).toLocaleString('en-IN', {
      dateStyle: 'medium',
      timeStyle: 'short',
    });
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

  if (!isLoaded) return <Loader />;

  return (
    <div className="min-h-screen bg-gray-900 text-white p-4 sm:p-6 relative">
      {/* Floating Add Button */}
      <button
        onClick={() => setShowAddModal(true)}
        className="bg-blue-600 rounded-full fixed bottom-5 right-5 z-20 h-12 w-12 flex items-center justify-center cursor-pointer hover:bg-blue-700 transition shadow-lg"
        aria-label="Add lead"
      >
        <IoMdAdd size={28} />
      </button>

      {/* Top Bar with Search */}
      <div className="flex flex-col sm:flex-row items-center justify-between mb-4">
        <div className="flex items-center w-full sm:w-2/3 mb-4 sm:mb-0">
          <div className="relative flex-grow text-center">
            <IoIosSearch className="absolute top-3 left-3 text-gray-400" size={20} />
            <input
              type="text"
              name="search"
              id="search"
              list="search-options"
              autoComplete="on"
              placeholder="Search by name, company, or contact"
              value={filters.search}
              onChange={handleFilterChange}
              className="w-full pl-10 p-3 bg-gray-800 border border-gray-700 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <datalist id="search-options">
            {leads.map((lead) => (
              <React.Fragment key={`${lead._id}-opt`}>
                <option key={`${lead._id}-name`} value={lead.name} />
                <option key={`${lead._id}-company`} value={lead.companyname} />
                <option key={`${lead._id}-contact`} value={lead.contact} />
              </React.Fragment>
            ))}
          </datalist>
        </div>
        <button
          onClick={() => setShowFilterSort(!showFilterSort)}
          className="flex items-center gap-2 bg-gray-800 p-3 rounded-md hover:bg-gray-700 transition"
        >
          <FaFilter size={16} />
          <span>Filter & Sort</span>
        </button>
      </div>

      {/* Filter & Sort Panel */}
      {showFilterSort && (
        <div className="mb-6 p-4 bg-gray-800 rounded-md grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <select
            name="quality"
            value={filters.quality}
            onChange={handleFilterChange}
            className="p-3 bg-gray-700 border border-gray-600 rounded"
          >
            <option value="">All Qualities</option>
            {qualityOptions.map((q) => (
              <option key={q} value={q}>
                {q}
              </option>
            ))}
          </select>
          <input
            type="text"
            name="area"
            placeholder="Filter by area"
            value={filters.area}
            onChange={handleFilterChange}
            className="p-3 bg-gray-700 border border-gray-600 rounded"
          />
          <input
            type="text"
            name="city"
            placeholder="Filter by city"
            value={filters.city}
            onChange={handleFilterChange}
            className="p-3 bg-gray-700 border border-gray-600 rounded"
          />
          <input
            type="text"
            name="state"
            placeholder="Filter by state"
            value={filters.state}
            onChange={handleFilterChange}
            className="p-3 bg-gray-700 border border-gray-600 rounded"
          />
          <select
            name="cat"
            value={filters.cat}
            onChange={handleFilterChange}
            className="p-3 bg-gray-700 border border-gray-600 rounded"
          >
            <option value="">All Categories</option>
            {categoryOptions.map((c) => (
              <option key={c} value={c.toLowerCase()}>
                {c}
              </option>
            ))}
          </select>
          <select
            name="sort"
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
            className="p-3 bg-gray-700 border border-gray-600 rounded"
          >
            <option value="newest">Newest</option>
            <option value="oldest">Oldest</option>
            <option value="company">Company (A-Z)</option>
          </select>
        </div>
      )}

      {/* Leads Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {isLoading ? (
          <Loader />
        ) : sortedLeads.length === 0 ? (
          <p className="col-span-full text-center text-gray-400 mt-10">No leads found.</p>
        ) : (
          sortedLeads.map((lead) => (
            <div
              key={lead._id}
              className="bg-gray-800 border border-gray-700 p-6 rounded-lg shadow-md relative flex flex-col justify-between"
            >
              <div className="space-y-1">
                <h3 className="text-lg font-bold text-blue-400">{lead.companyname}</h3>
                <p className="text-sm">
                  <span className="font-semibold">{lead.name}</span> | {lead.contact}
                </p>
                <p className="text-xs text-gray-400">
                  <span className="font-semibold">Address:</span> {lead.address || 'N/A'}
                </p>
                <p className="text-xs text-gray-400">
                  <span className="font-semibold">Area:</span> {lead.area || 'N/A'}
                </p>
                <p className="text-xs text-gray-400">
                  <span className="font-semibold">City:</span> {lead.city}
                </p>
                <p className="text-xs text-gray-400">
                  <span className="font-semibold">Country:</span> {lead.country}
                </p>
                <p className="text-xs text-gray-400">
                  <span className="font-semibold">Category:</span> {lead.cat || 'N/A'}
                </p>
                <p className={`mt-2 inline-block text-xs font-semibold px-2 py-1 rounded ${getQualityColor(lead.quality)}`}>
                  Quality: {lead.quality}
                </p>
                <p className="text-xs text-gray-400">
                  <span className="font-semibold">Desc:</span> {lead.desc || 'N/A'}
                </p>
              </div>
              <div className="mt-4 border-t border-gray-700 pt-2">
                <p className="text-xs text-gray-500">
                  <span className="font-semibold">Created:</span> {formatDate(lead.createdAt)}
                </p>
                <p className="text-xs text-gray-500">
                  <span className="font-semibold">Updated:</span> {formatDate(lead.updatedAt)}
                </p>
                <p className="text-xs italic text-gray-500">
                  <span className="font-semibold">By:</span> {lead.author || 'Unknown'}
                </p>
              </div>

              {/* Options Dropdown (3-dot button) */}
              <div className="absolute top-2 right-2">
                <div className="relative inline-block text-left">
                  <button
                    onClick={() =>
                      setSelectedLeadId(selectedLeadId === lead._id ? null : lead._id)
                    }
                    className="p-2 rounded-full hover:bg-gray-700 focus:outline-none"
                    aria-label="Lead options"
                  >
                    <FaEllipsisV size={16} />
                  </button>
                  {selectedLeadId === lead._id && (
                    <div className="origin-top-right absolute right-0 mt-2 w-36 rounded-md shadow-lg bg-gray-800 ring-1 ring-black ring-opacity-5">
                      <div className="py-1">
                        <button
                          onClick={() => {
                            setUpdateData({ ...lead });
                            setShowUpdateModal(true);
                          }}
                          className="block px-4 py-2 text-sm text-white hover:bg-gray-700 w-full text-left"
                        >
                          Update
                        </button>
                        <button
                          onClick={() => {
                            setSelectedLeadId(lead._id);
                            setShowDeleteModal(true);
                          }}
                          className="block px-4 py-2 text-sm text-white hover:bg-gray-700 w-full text-left"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Add Lead Modal */}
      {showAddModal && (
        <div className="fixed inset-0 z-30 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-gray-900 p-8 rounded-lg shadow-lg max-w-lg w-full relative">
            <h2 className="text-2xl font-bold mb-4 border-b pb-2">Add New Lead</h2>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="companyname"
                  value={formData.companyname}
                  onChange={handleChange}
                  placeholder="Company Name"
                  className="p-3 bg-gray-800 border border-gray-700 rounded w-full"
                />
                <select
                  name="cat"
                  value={formData.cat}
                  onChange={handleChange}
                  className="p-3 bg-gray-800 border border-gray-700 rounded w-full"
                >
                  <option value="">Select Category</option>
                  {categoryOptions.map((option) => (
                    <option key={option} value={option.toLowerCase()}>{option}</option>
                  ))}
                </select>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Name"
                  className="p-3 bg-gray-800 border border-gray-700 rounded w-full"
                />
                <input
                  type="text"
                  name="contact"
                  value={formData.contact}
                  onChange={handleChange}
                  placeholder="Contact"
                  className="p-3 bg-gray-800 border border-gray-700 rounded w-full"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="Address"
                  className="p-3 bg-gray-800 border border-gray-700 rounded col-span-2 w-full"
                />
                <input
                  type="text"
                  name="area"
                  value={formData.area}
                  onChange={handleChange}
                  placeholder="Area"
                  className="p-3 bg-gray-800 border border-gray-700 rounded w-full"
                />
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  placeholder="City"
                  className="p-3 bg-gray-800 border border-gray-700 rounded w-full"
                />
                <input
                  type="text"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  placeholder="Country"
                  className="p-3 bg-gray-800 border border-gray-700 rounded w-full"
                />
              </div>
              <select
                name="quality"
                value={formData.quality}
                onChange={handleChange}
                className="p-3 bg-gray-800 border border-gray-700 rounded w-full"
              >
                {qualityOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              <textarea
                name="desc"
                value={formData.desc}
                onChange={handleChange}
                placeholder="Description"
                rows={3}
                className="p-3 bg-gray-800 border border-gray-700 rounded w-full"
              />
              <div className="flex justify-end gap-4 mt-4">
                <button
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  className="px-4 py-2 bg-gray-600 hover:bg-gray-500 rounded"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={handleAdd}
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded"
                >
                  Add Lead
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Update Lead Modal */}
      {showUpdateModal && selectedLeadId && (
        <div className="fixed inset-0 z-30 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-gray-900 p-8 rounded-lg shadow-lg max-w-lg w-full">
            <h2 className="text-2xl font-bold mb-4 border-b pb-2">Update Lead</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                name="companyname"
                value={updateData.companyname || ''}
                onChange={handleUpdateChange}
                placeholder="Company Name"
                className="p-3 bg-gray-800 border border-gray-700 rounded w-full"
              />
              <input
                type="text"
                name="name"
                value={updateData.name || ''}
                onChange={handleUpdateChange}
                placeholder="Name"
                className="p-3 bg-gray-800 border border-gray-700 rounded w-full"
              />
              <input
                type="text"
                name="contact"
                value={updateData.contact || ''}
                onChange={handleUpdateChange}
                placeholder="Contact"
                className="p-3 bg-gray-800 border border-gray-700 rounded w-full"
              />
              <input
                type="text"
                name="address"
                value={updateData.address || ''}
                onChange={handleUpdateChange}
                placeholder="Address"
                className="p-3 bg-gray-800 border border-gray-700 rounded w-full"
              />
              <input
                type="text"
                name="area"
                value={updateData.area || ''}
                onChange={handleUpdateChange}
                placeholder="Area"
                className="p-3 bg-gray-800 border border-gray-700 rounded w-full"
              />
              <input
                type="text"
                name="city"
                value={updateData.city || ''}
                onChange={handleUpdateChange}
                placeholder="City"
                className="p-3 bg-gray-800 border border-gray-700 rounded w-full"
              />
              <input
                type="text"
                name="country"
                value={updateData.country || ''}
                onChange={handleUpdateChange}
                placeholder="Country"
                className="p-3 bg-gray-800 border border-gray-700 rounded w-full"
              />
              <select
                name="cat"
                value={updateData.cat || ''}
                onChange={handleUpdateChange}
                className="p-3 bg-gray-800 border border-gray-700 rounded w-full"
              >
                <option value="">Select Category</option>
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
                className="p-3 bg-gray-800 border border-gray-700 rounded w-full"
              >
                {qualityOptions.map((q) => (
                  <option key={q} value={q}>
                    {q}
                  </option>
                ))}
              </select>
              <textarea
                name="desc"
                rows={3}
                value={updateData.desc || ''}
                onChange={handleUpdateChange}
                placeholder="Description"
                className="p-3 bg-gray-800 border border-gray-700 rounded w-full col-span-2"
              />
            </div>
            <div className="flex justify-end gap-4 mt-4">
              <button
                type="button"
                onClick={() => setShowUpdateModal(false)}
                className="px-4 py-2 bg-gray-600 hover:bg-gray-500 rounded"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleUpdateSave}
                className="px-4 py-2 bg-green-600 hover:bg-green-700 rounded"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {showDeleteModal && selectedLeadId && (
        <div className="fixed inset-0 z-30 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-gray-900 p-6 rounded-lg shadow-lg max-w-xs w-full text-center">
            <h3 className="text-xl font-bold text-white mb-2">Are you sure?</h3>
            <p className="text-sm text-gray-400 mb-4">This action cannot be undone.</p>
            <div className="flex justify-center gap-4">
              <button
                onClick={() => setShowDeleteModal(false)}
                className="bg-gray-600 hover:bg-gray-500 text-white px-4 py-2 rounded"
              >
                No
              </button>
              <button
                onClick={() => handleDelete(selectedLeadId)}
                className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded"
              >
                Yes
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
