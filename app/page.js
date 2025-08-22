'use client'
import { useEffect, useState } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Work from "./components/Work"; 

export default function Home() {

  const[isDarkMode, setIsDarkMode] = useState(true); 
  
  // Read initial preference
  useEffect(() => {
    const ls = localStorage.getItem('theme'); // 'dark' | 'light' | null
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setIsDarkMode(ls ? ls === 'dark' : prefersDark);
  }, []);

  // Apply + persist
  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDarkMode);
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);
  
  return (
    <>
    <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}/> 
    <Header isDarkMode={isDarkMode} />
    <About isDarkMode={isDarkMode}/>
    <Services isDarkMode={isDarkMode}/>
    <Work isDarkMode={isDarkMode}/> 
    <Contact isDarkMode={isDarkMode}/>
    <Footer isDarkMode={isDarkMode}/> 
    </>
  );
}
