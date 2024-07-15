import Head from 'next/head'
import Image from 'next/image'
import { Analytics } from "@vercel/analytics/react"
import Intro from "../components/Intro";
import About from "../components/About";
import Header from "../components/Header";
import Skills from "../components/Skill";
import React, {useEffect} from "react";
import Portfolio from "../components/Portfolio";
import Experience from "../components/Experience";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  

  useEffect(() => {
    const observer = new IntersectionObserver((entries, opts) => {
      entries.forEach(entry => {
        entry.target.classList.toggle('visible', entry.isIntersecting);
      });
    });
    observer.observe(document.querySelector('div.skills-container'));
    observer.observe(document.querySelector('div.about-container'));

    document.querySelectorAll('section').forEach(elem => {
      observer.observe( elem );
    });
  }, []);
  return (
    <main>
      <Header />
      <Intro />
      <About />
      <Skills />
      <Portfolio />
      <Experience />
      <Contact />
      <Footer />
      <Analytics />
    </main>
  )
}
