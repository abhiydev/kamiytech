"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

interface Job {
  id: number;
  title: string;
  location: string;
  type: string;
  description: string;
}

const jobsData: Job[] = [
  {
    id: 1,
    title: 'Frontend Developer',
    location: 'Indore, India',
    type: 'Full-time',
    description:
      'Build and maintain React.js applications with Tailwind CSS and Next.js. Collaborate with design and backend teams to deliver high-quality user interfaces.',
  },
  {
    id: 2,
    title: 'Backend Engineer',
    location: 'Remote',
    type: 'Contract',
    description:
      'Design and implement RESTful APIs using Node.js, Express, and MongoDB. Ensure scalability, security, and performance of server-side components.',
  },
  {
    id: 3,
    title: 'UI/UX Designer',
    location: 'Indore, India',
    type: 'Part-time',
    description:
      'Create wireframes, prototypes, and visual designs. Work closely with developers to ensure design feasibility and a seamless user experience.',
  },
];

export default function CareersClient() {
  const [search, setSearch] = useState('');
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', cover: '' });

  const filteredJobs = jobsData.filter((job) =>
    job.title.toLowerCase().includes(search.toLowerCase())
  );

  const openForm = (job: Job) => {
    setSelectedJob(job);
    setShowForm(true);
  };

  const closeForm = () => {
    setShowForm(false);
    setFormData({ name: '', email: '', cover: '' });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Thank you, ${formData.name}! Your application for ${selectedJob?.title} has been submitted.`);
    closeForm();
  };

  return (
    <>
      <Navbar />
      <main className="bg-gray-50 py-16 min-h-screen">
        <div className="max-w-4xl mx-auto px-4 space-y-8">
          <h1 className="text-4xl font-extrabold text-gray-900 text-center">
            Join Our Team
          </h1>
          <p className="text-center text-gray-600">
            Explore open positions and apply to be part of KamiyTech’s growing engineering team.
          </p>

          <div className="flex justify-center">
            <input
              type="text"
              placeholder="Search roles..."
              className="w-full md:w-1/2 p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <div className="space-y-6">
            {filteredJobs.map((job) => (
              <motion.div
                key={job.id}
                className="bg-white p-6 rounded-xl shadow-md border border-gray-100"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <h2 className="text-2xl font-semibold text-gray-800">
                  {job.title}
                </h2>
                <p className="text-gray-500 mb-2">
                  {job.location} &ndash; {job.type}
                </p>
                <p className="text-gray-600 text-sm mb-4">{job.description}</p>
                <motion.button
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition"
                  onClick={() => openForm(job)}
                >
                  View &amp; Apply
                </motion.button>
              </motion.div>
            ))}
            {filteredJobs.length === 0 && (
              <p className="text-center text-gray-500">No roles found.</p>
            )}
          </div>
        </div>

        <AnimatePresence>
          {showForm && selectedJob && (
            <motion.div
              className="fixed inset-0 bg-black/60 flex items-center justify-center p-4 z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                className="bg-white rounded-xl shadow-2xl p-8 w-full max-w-md"
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.9 }}
              >
                <h3 className="text-xl font-bold mb-4">
                  Apply for {selectedJob.title}
                </h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-gray-700 font-medium mb-1">Name</label>
                    <input
                      type="text"
                      required
                      className="w-full p-2 border border-gray-300 rounded-lg"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-1">Email</label>
                    <input
                      type="email"
                      required
                      className="w-full p-2 border border-gray-300 rounded-lg"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-1">Cover Letter</label>
                    <textarea
                      className="w-full p-2 border border-gray-300 rounded-lg"
                      rows={4}
                      value={formData.cover}
                      onChange={(e) => setFormData({ ...formData, cover: e.target.value })}
                    />
                  </div>
                  <div className="flex justify-end space-x-4">
                    <button
                      type="button"
                      className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg"
                      onClick={closeForm}
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition"
                    >
                      Submit Application
                    </button>
                  </div>
                </form>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <Footer />
    </>
  );
}
