import Navbar from "@/components/navbar/Navbar";

import Hero from "@/components/hero/Hero";
import About from "@/components/about/About";
import Tech from "@/components/tech/Tech";
import Projects from "@/components/project/Projects";
import Experience from "@/components/experience/Experience";
import Contact from "@/components/contact/Contact";
import Footer from "@/components/footer/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />

        <About />

        <Tech />

        <Projects />

        <Experience />

        <Contact />
      </main>

      <Footer />
    </>
  );
}
