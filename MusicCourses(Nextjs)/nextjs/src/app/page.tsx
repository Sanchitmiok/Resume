import Image from "next/image";
import HeroSection  from "@/components/HeroSection";
import FeaturedCourses from "@/components/FeaturedCourses";
import Whychooseus from "@/components/Whychooseus";
import TestimonialCards from "@/components/TestimonialCards";
import Upcoming_webinars from "@/components/Upcoming_webinars";
import Instructors from "@/components/Instructors";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.95] antialiased bg-grid-white/[0.02]">
      <HeroSection/>
      <FeaturedCourses/>
      <Whychooseus/>
      <TestimonialCards/>
      <Upcoming_webinars/>
      <Instructors/>
      <Footer/>
    </main>
  );
}
