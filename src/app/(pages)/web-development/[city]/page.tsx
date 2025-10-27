import { Metadata } from "next";

const cities = [
  "Delhi",
  "Mumbai",
  "Bangalore",
  "Hyderabad",
  "Chennai",
  "Pune",
  "Kolkata",
  "Indore",
  "Ahmedabad",
  "Jaipur",
  "Surat",
  "Bhopal",
  "Lucknow",
  "Nagpur",
  "Chandigarh",
  "Noida",
  "Gurugram",
  "Coimbatore",
  "Kochi",
  "Patna",
  "Raipur",
  "Vadodara",
  "Rajkot",
  "Bhubaneswar",
  "Dehradun",
  "Nashik",
  "Guwahati",
  "Mysore",
  "Tirupati"
];

export async function generateStaticParams() {
  return cities.map((city) => ({ city: city.toLowerCase() }));
}

export async function generateMetadata({
  params,
}: {
  params: { city: string };
}): Promise<Metadata> {
  const cityName = params.city.charAt(0).toUpperCase() + params.city.slice(1);
  const title = `Web Development Company in ${cityName} | KamiyTech`;
  const description = `KamiyTech offers custom web and mobile app development in ${cityName}. From responsive websites to CRM, ERP, and SEO — we help local businesses grow through technology.`;
  const url = `https://kamiytech.com/web-development/${params.city}`;

  return {
    title,
    description,
    keywords: [
      `web development company in ${cityName}`,
      `${cityName} website development`,
      `custom software development ${cityName}`,
      `${cityName} app development`,
      `KamiyTech ${cityName}`,
      `web design ${cityName}`,
      `software company ${cityName}`
    ],
    openGraph: {
      title,
      description,
      url,
      siteName: "KamiyTech",
      images: [
        {
          url: "https://kamiytech.com/logo.png",
          width: 1200,
          height: 630,
          alt: `KamiyTech ${cityName} Web Development`,
        },
      ],
      locale: "en_IN",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["https://kamiytech.com/logo.png"],
    },
  };
}

export default function CityWebDevelopmentPage({
  params,
}: {
  params: { city: string };
}) {
  const cityName = params.city.charAt(0).toUpperCase() + params.city.slice(1);

  return (
    <main className="px-6 py-12 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">
        Web Development Company in {cityName}
      </h1>
      <p className="text-lg text-gray-700 mb-6">
        KamiyTech provides full-stack web development, mobile app development,
        and CRM solutions in {cityName}. Our team helps businesses build
        scalable digital platforms that drive growth and efficiency.
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-600">
        <li>Responsive website design and development</li>
        <li>Custom software and ERP systems</li>
        <li>SEO and performance optimization</li>
        <li>E-commerce and mobile app solutions</li>
        <li>Automation tools and digital strategy consulting</li>
      </ul>
      <p className="mt-6 text-gray-700">
        Ready to take your business in {cityName} online? 
        <a href="/contact" className="text-teal-600 font-medium underline ml-1">
          Contact KamiyTech today.
        </a>
      </p>
    </main>
  );
}
