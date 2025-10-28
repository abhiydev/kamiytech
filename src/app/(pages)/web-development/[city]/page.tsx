import { Metadata } from "next";

// ✅ Type definition — compatible with Next.js 15
type CityPageProps = {
  params: Promise<{ city: string }>;
};

// ✅ Dynamic Metadata
export async function generateMetadata({ params }: CityPageProps): Promise<Metadata> {
  const { city } = await params;
  const cityName = decodeURIComponent(city);
  const capitalizedCity = cityName.charAt(0).toUpperCase() + cityName.slice(1);

  return {
    title: `${capitalizedCity} Web Development | KamiyTech`,
    description: `KamiyTech provides professional web development, UI/UX, and SEO services in ${capitalizedCity}. Build modern, scalable websites with us.`,
    keywords: [
      `${capitalizedCity} web development`,
      `${capitalizedCity} website design`,
      `${capitalizedCity} software company`,
      `${capitalizedCity} app development`,
      `${capitalizedCity} SEO services`,
      "KamiyTech India web development",
    ],
    openGraph: {
      title: `${capitalizedCity} Web Development | KamiyTech`,
      description: `Build modern, responsive websites with KamiyTech — your trusted web development company in ${capitalizedCity}.`,
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
  const { city } = await params;
  const cityName = decodeURIComponent(city);
  const capitalizedCity = cityName.charAt(0).toUpperCase() + cityName.slice(1);

  return (
    <section className="max-w-5xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-4">
        Web Development Services in {capitalizedCity}
      </h1>
      <p className="text-lg text-gray-600 mb-8">
        KamiyTech specializes in web development, modern UI design, and SEO-optimized
        digital solutions for startups and businesses in {capitalizedCity}.
      </p>

      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-2">Our Services</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>Custom Web App Development</li>
            <li>Responsive Website Design</li>
            <li>eCommerce Development</li>
            <li>SEO Optimization</li>
            <li>UI/UX & Branding</li>
            <li>API Integration</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">Why Choose KamiyTech?</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>Experienced Development Team</li>
            <li>Affordable Pricing</li>
            <li>Modern Tech Stack</li>
            <li>Transparent Communication</li>
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
