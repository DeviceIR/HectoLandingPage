import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./assets/vendor/glightbox/css/glightbox.min.css";
import { useLandingColors } from "./hooks/useLandingColors";
import { loadVendorScripts } from "./utils/loadVendorScripts";
import "./styles/services-icons.css";
import "./styles/white-background.css";
import "./styles/main.css";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";
import Banner from "./components/Banner/Banner";
import Tutorial from "./components/Tutorial/Tutorial";
import Library from "./components/Library/Library";
import Financial from "./components/Financial/Financial";
import Demo from "./components/Demo/Demo";
import About from "./components/About/About";
import WhyUs from "./components/WhyUs/WhyUs";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

export default function LandingPage() {
  // Apply landing page color variables
  useLandingColors();

  useEffect(() => {
    // Initialize Bootstrap JS features if needed
    // Bootstrap JS is imported via npm but may need initialization for dropdowns/modals
    // This is handled automatically by Bootstrap 5

    // Load vendor scripts (non-blocking, load in background)
    loadVendorScripts();

    // Initialize AOS with earlier trigger and faster animations
    AOS.init({
      duration: 400, // Faster animation (reduced from 600)
      easing: "ease-in-out",
      once: true,
      mirror: false,
      offset: 100, // Trigger animation 100px before element comes into view (earlier)
      delay: 0, // No default delay
    });


    // Scroll to top on body scroll
    const toggleScrolled = () => {
      const selectBody = document.querySelector("body");
      const selectHeader = document.querySelector("#header");
      if (!selectHeader) return;
      if (
        selectHeader.classList.contains("scroll-up-sticky") ||
        selectHeader.classList.contains("sticky-top") ||
        selectHeader.classList.contains("fixed-top")
      ) {
        window.scrollY > 100
          ? selectBody.classList.add("scrolled")
          : selectBody.classList.remove("scrolled");
      }
    };

    document.addEventListener("scroll", toggleScrolled);
    window.addEventListener("load", toggleScrolled);

    // Correct scrolling position upon page load for URLs containing hash links
    if (window.location.hash) {
      setTimeout(() => {
        const section = document.querySelector(window.location.hash);
        if (section) {
          const scrollMarginTop = getComputedStyle(section).scrollMarginTop;
          window.scrollTo({
            top: section.offsetTop - parseInt(scrollMarginTop),
            behavior: "smooth",
          });
        }
      }, 100);
    }

    // Cleanup
    return () => {
      document.removeEventListener("scroll", toggleScrolled);
    };
  }, []);

  return (
    <div className="index-page">
      <Header />
      <main className="main">
        <Hero />
        <Services />
        <Banner />
        <Tutorial />
        {/* <Library /> */}
        <Financial />
        <Demo />
        {/* <About /> */}
        {/* <WhyUs /> */}
        {/* <Testimonials /> */}
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
