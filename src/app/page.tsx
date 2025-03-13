import Header from "@/sections/Header";
import Hero from "@/sections/Hero";
import Intro from "@/sections/Intro";
import Objectives from "@/components/Objectives";
import Testimonials from "@/sections/Testimonials";
import BoxGrid from "@/components/BoxGrid";
import CompanyHistory from "@/components/History";

import FAQs from "@/sections/FAQs";
import Footer from "@/sections/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Intro />
      <Objectives />
      <CompanyHistory/>
      <BoxGrid />
      <Testimonials />
      <FAQs />
      <Footer />
    </>
  );
}
