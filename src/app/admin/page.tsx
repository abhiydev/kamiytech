import Link from 'next/link';
import React from 'react';

const AdminPanel = () => {
  const features = [
    {
      name: "leads",
      title: "Leads Management",
      desc: "View, manage, and delete incoming sales leads",
      active: true,
    },
    {
      name: "inquiry",
      title: "Inquiries",
      desc: "View and manage organic website inquiries",
      active: true,
    },
    {
      name: "blog",
      title: "Blog CMS",
      desc: "Create, view, and delete blog posts",
      active: true,
    },
    {
      name: "projects",
      title: "Projects",
      desc: "View and update portfolio projects",
      active: false,
    },
    {
      name: "services",
      title: "Services",
      desc: "Manage offered service packages",
      active: false,
    },
    {
      name: "users",
      title: "Users",
      desc: "Manage admin users and permissions",
      active: false,
    },
    {
      name: "settings",
      title: "Settings",
      desc: "Configure global site settings",
      active: false,
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8 border-b border-slate-800 pb-4">
          <h1 className="text-3xl font-extrabold text-white">KamiyTech Admin Portal</h1>
          <Link
            href="/"
            className="text-sm px-4 py-2 bg-slate-800 hover:bg-slate-700 rounded-lg text-slate-300 transition"
          >
            ← Back to Site
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div
              key={feature.name}
              className={`p-6 border rounded-2xl transition duration-200 ${
                feature.active
                  ? "border-slate-800 bg-slate-900/80 hover:border-blue-500 hover:bg-slate-900 shadow-lg"
                  : "border-slate-800/40 bg-slate-950/40 opacity-60 cursor-not-allowed"
              }`}
            >
              {feature.active ? (
                <Link href={`/admin/${feature.name}`} className="block group">
                  <div className="flex justify-between items-center">
                    <h2 className="text-xl font-bold text-white group-hover:text-blue-400 transition">
                      {feature.title}
                    </h2>
                    <span className="text-xs px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                      Active
                    </span>
                  </div>
                  <p className="mt-3 text-slate-400 text-sm">{feature.desc}</p>
                </Link>
              ) : (
                <div>
                  <div className="flex justify-between items-center">
                    <h2 className="text-xl font-bold text-slate-400">{feature.title}</h2>
                    <span className="text-xs px-2.5 py-1 rounded-full bg-slate-800 text-slate-400 border border-slate-700">
                      Coming Soon
                    </span>
                  </div>
                  <p className="mt-3 text-slate-500 text-sm">{feature.desc}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;