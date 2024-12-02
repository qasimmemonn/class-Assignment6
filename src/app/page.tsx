"use client";

import Image from "next/image";
import Header from "@/components/header";
import Hero from "@/components/hero";
import TrustedSection from "@/components/trusted";
import Course from "@/components/course";
import Achievement from "@/components/achievement";
import Services from "@/components/services";
import Testimonials from "@/components/testimonial";
import OurTeam from "@/components/team";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <TrustedSection />
      <Services />
      <Achievement />
      <Course />
      <OurTeam />
      <Testimonials />
      <Footer />
    </div>
  );
}
