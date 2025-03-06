import Header from '@/sections/Header'
import Hero from '@/sections/Hero'
import Intro from '@/sections/Intro';
// import Projects from "@/sections/Projects"
import Testimonials from "@/sections/Testimonials"
import BoxGrid from "@/components/BoxGrid";
import FAQs from "@/sections/FAQs"
import Footer from "@/sections/Footer"


export default function Home() {
  return (
   <>
   <Header/>
   <Hero/>
   <Intro/>
   {/* <Projects/> */}
   <Testimonials/>
   <BoxGrid />
   <FAQs/>
   <Footer/>
   </>
  );
}
