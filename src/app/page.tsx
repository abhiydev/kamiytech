// import Image from "next/image";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import OurServices from "@/components/OurServicesd";
import GoogleForm from "@/components/GoogleForm";
import Image from "next/image";
import Footer from "@/components/Footer";


export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <Navbar/>
      <Hero/>
      <div>
      <Image src={'/wave.svg'} width={5000} height={120} alt="wave"/>
      </div>
      <main >
        <OurServices />
        <GoogleForm />
      </main>
      <footer className="w-full bg-gradient-to-tr max-w-7xl from-blue-600 via-blue-700 to-indigo-800 text-gray-100">
      <Footer />
      </footer>
    </div>
  );
}
