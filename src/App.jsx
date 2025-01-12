import { useState } from 'react'
import './App.css'
import Routes from './Routes/Routes'
import Lenis from 'lenis'
import 'lenis/dist/lenis.css'
import { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import GoogleTranslate from './Pages/User/GoogleTranslate'

function App() {

  useEffect(() => {
    AOS.init({
      disable: "phone",
      duration: 1000,
    });
  }, []);

  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis({
      smooth: true, // Enable smooth scrolling
      smoothWheel: true, // Enable smooth scrolling for wheel events
      smoothTouch: true, // Enable smooth scrolling for touch events
      lerp: 0.09, // Lower lerp value for smoother scroll (closer to 0 = smoother)
      orientation: 'vertical', // Scroll orientation (default is vertical)
      gestureOrientation: 'vertical', // Gestures will also follow vertical orientatio
    });

    // Use requestAnimationFrame to continuously update the scroll
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  })

  return (
    <>
    
      <GoogleTranslate />
      <Routes />
    </>
  )
}

export default App
