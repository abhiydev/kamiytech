import { Metadata } from "next";

interface CityPageProps {
  params: {
    city: string;
  };
}

// ✅ Generate dynamic metadata for SEO
export async function generateMetadata({ params }: CityPageProps): Promise<Metadata> {
  const cityName = decodeURIComponent(params.city);
  const capitalizedCity = cityName.charAt(0).toUpperCase() + cityName.slice(1);

  return {
    title: `${capitalizedCity} Web Development | KamiyTech`,
    description: `KamiyTech provides top-rated web development, app design, and digital solutions in ${capitalizedCity}. Partner with us for modern websites, SEO, and custom software solutions.`,
    keywords: [
      `${capitalizedCity} web development`,
      `${capitalizedCity} website design`,
      `${capitalizedCity} software company`,
      `${capitalizedCity} app development`,
      `${capitalizedCity} SEO services`,
      "KamiyTech web development India",
    ],
    openGraph: {
      title: `${capitalizedCity} Web Development | KamiyTech`,
      description: `Build modern, responsive websites and digital platforms with KamiyTech — your trusted web development partner in ${capitalizedCity}.`,
      url: `https://kamiytech.com/web-development/${cityName}`,
      siteName: "KamiyTech",
      type: "website",
    },
    alternates: {
      canonical: `https://kamiytech.com/web-development/${cityName}`,
    },
  };
}

// ✅ Page Component
export default async function CityPage({ params }: CityPageProps) {
  const cityName = decodeURIComponent(params.city);
  const capitalizedCity = cityName.charAt(0).toUpperCase() + cityName.slice(1);

  return (
    <section className="max-w-5xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-4">
        Web Development Services in {capitalizedCity}
      </h1>
      <p className="text-lg text-gray-600 mb-8">
        KamiyTech specializes in full-stack web development, modern UI design, and
        SEO-optimized digital solutions for businesses in {capitalizedCity}. Our
        mission is to help startups, brands, and enterprises build high-performing
        websites that convert visitors into customers.
      </p>

      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-2">Our Services Include:</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>Custom Web App Development</li>
            <li>Responsive Website Design</li>
            <li>eCommerce Solutions</li>
            <li>SEO & Performance Optimization</li>
            <li>Branding & UI/UX Design</li>
            <li>API Integration & Automation</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">Why Choose KamiyTech?</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>Expert team of developers and designers</li>
            <li>Affordable pricing for startups and SMBs</li>
            <li>100% transparent communication</li>
            <li>Proven track record across India</li>
          </ul>
        </div>
      </div>

      <div className="mt-10">
        <a
          href="https://kamiytech.com/contact"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-xl transition"
        >
          Get a Free Quote
        </a>
      </div>
    </section>
  );
}
