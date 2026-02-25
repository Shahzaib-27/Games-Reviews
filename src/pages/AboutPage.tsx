import React from 'react'

import Navbar from "@/components/Navbar";
import GameFooter from "@/components/GameFooter";

import AboutSection from "@/components/AboutSection";



const AboutPage = () => {
return (
    <>  
    <Navbar/>
    <div className="min-h-screen text-foreground bg-gradient-to-b from-background/70 via-background/50 to-background bg-blue-950 mt-5 p-2 ">
    
    <div 
    onClick={() => {window.scrollTo({ top: 0, behavior: "smooth" })}} >
    <AboutSection/>
    </div>
    
    </div>
    <GameFooter/>
    </>
  )
}

export default AboutPage
