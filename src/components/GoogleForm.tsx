"use client";
import React, { Fragment } from 'react';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { Listbox, Transition } from '@headlessui/react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import {
  UserIcon,
  PhoneIcon,
  EnvelopeIcon,
  ChevronUpDownIcon,
  CheckIcon,
  MapPinIcon,
} from '@heroicons/react/24/outline';

interface FormData {
  name: string;
  mobile: string;
  email?: string;
  requirement: RequirementOption;
  message?: string;
}

type RequirementOption =
  | 'Website'
  | 'Mobile App'
  | 'Business Management Tools'
  | 'Digital Marketing'
  | 'Other';

const requirementOptions: RequirementOption[] = [
  'Website',
  'Mobile App',
  'Business Management Tools',
  'Digital Marketing',
  'Other',
];

export default function BookDemoForm() {
  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({ defaultValues: { requirement: requirementOptions[0] } });

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      const payload = {
        name: data.name,
        contact: data.mobile,                   // ← backend expects `contact`
        email: data.email ?? '',
        requirements: data.requirement,         // ← backend expects `requirements`
        message: data.message ?? '',
      };
      await axios.post('/api/inquiry', payload);
      toast.success('Your request has been submitted!');
      reset();
    } catch (error) {
      console.error('Error submitting inquiry:', error);
      toast.error('Submission failed. Please try again later.');
    }
  };

  // read the key injected by Next.js
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
  const mapUrl = apiKey
    ? `https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=${encodeURIComponent(
        'Kamiytech 1/32, behind SICA School Road, Vijay Nagar, Scheme No 54, Indore, Madhya Pradesh 452010'
      )}`
    : 'about:blank';

  return (
    <section
      id="contactus"
      className="relative bg-gradient-to-r from-blue-50 via-indigo-100 to-blue-200 pt-16 pb-24 overflow-hidden"
    >
      <Toaster position="top-right" />

      {/* background blobs */}
      <motion.div
        className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-indigo-200 to-blue-300 opacity-40 rounded-full filter blur-3xl z-0"
        animate={{ x: [0, 40, 0], y: [0, -40, 0] }}
        transition={{ duration: 18, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-10 right-1/4 w-80 h-80 bg-gradient-to-br from-pink-100 to-purple-200 opacity-40 rounded-full filter blur-2xl z-0"
        animate={{ x: [0, -30, 0], y: [0, 30, 0] }}
        transition={{ duration: 14, repeat: Infinity }}
      />

      <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 text-center">
        Contact Us for a Free <span className="text-blue-600">Demo</span>
      </h2>
      <p className="text-xs text-gray-700 text-center mb-12">
        Give us a call on +91 9977858817 or fill out the form below to schedule a demo.
      </p>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white shadow-lg rounded-2xl p-8 z-10"
        >
          <h2 className="text-4xl font-extrabold text-gray-900 mb-6 text-center">
            📅 Book a Demo
          </h2>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* name */}
            <div className="relative">
              <UserIcon className="absolute left-3 top-1/2 w-5 h-5 text-gray-400 -translate-y-1/2" />
              <input
                {...register('name', { required: 'Name is required' })}
                type="text"
                placeholder="Your full name*"
                className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  errors.name ? 'border-red-500' : 'border-gray-300'
                }`}
              />
              {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>}
            </div>

            {/* mobile → contact */}
            <div className="relative">
              <PhoneIcon className="absolute left-3 top-1/2 w-5 h-5 text-gray-400 -translate-y-1/2" />
              <input
                {...register('mobile', {
                  required: 'Mobile number is required',
                  pattern: { value: /^[0-9+()\\s-]{7,20}$/, message: 'Invalid phone number' },
                })}
                type="tel"
                placeholder="Mobile number*"
                className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  errors.mobile ? 'border-red-500' : 'border-gray-300'
                }`}
              />
              {errors.mobile && <p className="mt-1 text-sm text-red-600">{errors.mobile.message}</p>}
            </div>

            {/* email */}
            <div className="relative">
              <EnvelopeIcon className="absolute left-3 top-1/2 w-5 h-5 text-gray-400 -translate-y-1/2" />
              <input
                {...register('email', {
                  pattern: {
                    value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                    message: 'Invalid email address',
                  },
                })}
                type="email"
                placeholder="Email (optional)"
                className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  errors.email ? 'border-red-500' : 'border-gray-300'
                }`}
              />
              {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>}
            </div>

            {/* requirements listbox */}
            <Controller
              control={control}
              name="requirement"
              render={({ field }) => (
                <Listbox as="div" {...field}>
                  <Listbox.Label className="block text-sm font-medium text-gray-700">
                    Requirement
                  </Listbox.Label>
                  <div className="relative mt-1">
                    <Listbox.Button className="w-full pl-3 pr-10 py-3 text-left border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                      <span className="block truncate">{field.value}</span>
                      <ChevronUpDownIcon className="absolute right-3 top-1/2 w-5 h-5 text-gray-400 -translate-y-1/2" />
                    </Listbox.Button>
                    <Transition
                      as={Fragment}
                      leave="transition ease-in duration-100"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0"
                    >
                      <Listbox.Options className="absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-auto focus:outline-none">
                        {requirementOptions.map((option) => (
                          <Listbox.Option
                            key={option}
                            value={option}
                            className={({ active }) =>
                              `cursor-pointer select-none px-4 py-2 ${
                                active ? 'bg-blue-100' : ''
                              }`
                            }
                          >
                            {({ selected }) => (
                              <div className="flex items-center justify-between">
                                <span>{option}</span>
                                {selected && <CheckIcon className="w-5 h-5 text-blue-600" />}
                              </div>
                            )}
                          </Listbox.Option>
                        ))}
                      </Listbox.Options>
                    </Transition>
                  </div>
                </Listbox>
              )}
            />

            {/* message */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Message (optional)
              </label>
              <textarea
                {...register('message')}
                rows={4}
                className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                placeholder="Tell us more about your project..."
              />
            </div>

            {/* submit */}
            <div className="text-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 transition disabled:opacity-50"
              >
                {isSubmitting ? 'Sending…' : 'Submit Request'}
              </button>
            </div>
          </form>
        </motion.div>

        {/* Map */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-12 lg:mt-0"
        >
          <div className="bg-white shadow-lg rounded-2xl overflow-hidden">
            <div className="w-full h-full aspect-video rounded-lg overflow-hidden shadow-lg">
              <iframe
                src={mapUrl}
                title="Our Location"
                className="w-full h-full rounded-lg"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="p-6 text-center">
              <Link
                href={"https://g.co/kgs/v7D5HuZ"}
                target="_blank"
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 transition"
              >
                <MapPinIcon className="w-5 h-5 mr-2" />
                Locate Us on Map
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
