import Link from 'next/link'
import React from 'react'

const AdminPanel = () => {

    const features = [
        {
            name: "leads",
            desc: "view, add, and delete leads"
        },
        {
            name: "Garbage collector", // Corrected spelling from "Garbadge" to "Garbage"
            desc: "view, add, and delete garbage collection tasks" // Updated description for clarity
        }
    ]

    return (
        <div
            className='bg-secondery' // Corrected class name from 'bg-secon' to 'bg-sec' assuming 'bg-sec' is the intended class
        >
            <h1 className='text-2xl font-bold px-4 mx-10 '>
                Admin Panel
            </h1>
            <div
                className='grid md:grid-cols-3 grid-rows-1 gap-4 mx-10 my-2'
            >
            {
                features.map((feature) => { // Added parameter 'feature' to access individual feature properties
                    return (
                        <div
                        key={feature.name} // Changed to use 'feature.name' instead of 'features.name'
                        className='p-4 border rounded-xl hover:bg-slate-700 '
                        >
                            <Link
                                href={'/admin/'+feature.name} // This link should be dynamic based on feature if needed
                                className=''
                            >
                                <h1 className='text-xl font-semibold'>
                                    {feature.name} 
                                </h1>
                                <div className='mt-2'>
                                    {feature.desc} 
                                </div>
                            </Link>
                        </div>
                    )
                })
            }

            </div>

        </div>
    )
}

export default AdminPanel