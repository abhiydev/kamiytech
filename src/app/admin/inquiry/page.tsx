"use client";
import React, { useEffect, useState, useCallback, useMemo } from 'react';
import { useUser } from '@clerk/nextjs';
import api from '@/lib/axios';
import Loader from '@/components/Loader';
import { IoMdRefresh } from 'react-icons/io';
import { FaEllipsisV } from 'react-icons/fa';

interface Inquiry {
  _id: string;
  name: string;
  contact: string;
  email: string;
  requirements?: string;
  message?: string;
  createdAt: string;
  updatedAt: string;
}

interface GetInquiriesResponse {
  success: boolean;
  inquiries: Inquiry[];
}

export default function InquiryPage() {
  const { isLoaded } = useUser();
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const fetchInquiries = useCallback(async () => {
    setIsLoading(true);
    try {
      const res = await api.get<GetInquiriesResponse>('/api/inquiry');
      if (res.data.success) {
        setInquiries(res.data.inquiries);
      } else {
        console.error('API returned failure:', res.data);
      }
    } catch (err) {
      console.error('Failed to fetch inquiries', err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    if (isLoaded) fetchInquiries();
  }, [isLoaded, fetchInquiries]);

  const sorted = useMemo(
    () =>
      [...inquiries].sort(
        (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      ),
    [inquiries]
  );

  const formatDate = (d: string) =>
    new Date(d).toLocaleString('en-IN', {
      dateStyle: 'medium',
      timeStyle: 'short',
    });

  if (!isLoaded || isLoading) {
    return (
      <div className="flex items-center justify-center h-64">
        <Loader />
      </div>
    );
  }

  return (
    <div className="p-4 bg-gray-50 min-h-screen">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-bold">Inquiries</h1>
        <button
          onClick={fetchInquiries}
          className="p-2 bg-blue-500 text-white rounded"
        >
          <IoMdRefresh />
        </button>
      </div>

      {sorted.length === 0 ? (
        <p>No inquiries found.</p>
      ) : (
        <div className="space-y-4">
          {sorted.map((inq) => (
            <div
              key={inq._id}
              className="bg-white shadow p-4 rounded relative"
            >
              <div className="flex justify-between">
                <div>
                  <h2 className="font-semibold text-lg">{inq.name}</h2>
                  <p className="text-sm text-gray-600">{inq.contact}</p>
                  <p className="text-sm text-gray-600">{inq?.email}</p>
                </div>
                <button
                  onClick={() =>
                    setSelectedId(selectedId === inq._id ? null : inq._id)
                  }
                  className="p-1"
                >
                  <FaEllipsisV />
                </button>
              </div>

              {inq.requirements && (
                <p className="mt-2">
                  <span className="font-medium">Requirements:</span>{' '}
                  {inq.requirements}
                </p>
              )}
              {inq.message && (
                <p className="mt-1 text-sm text-gray-700">
                  <span className="font-medium">Message:</span> {inq.message}
                </p>
              )}

              <p className="mt-2 text-xs text-gray-500">
                Submitted: {formatDate(inq.createdAt)}
              </p>

              {selectedId === inq._id && (
                <div className="absolute top-8 right-4 bg-white border rounded shadow">
                  {/* future actions: reply, delete */}
                  <button className="block px-4 py-2 hover:bg-gray-100 w-full text-left">
                    Mark as Read
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
