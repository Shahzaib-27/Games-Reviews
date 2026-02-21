import React from 'react'

import Navbar from "@/components/Navbar";
import GameFooter from "@/components/GameFooter";

import ContactSection from "@/components/ContactSection";

const ContactPage = () => {
  return (
    <>  
    <Navbar/>
    <div className="min-h-screen text-foreground bg-gradient-to-b from-background/70 via-background/50 to-background bg-blue-950 mt-5 p-2 ">
    <ContactSection/>
    </div>
    <GameFooter/>
    </>
  )
}

export default ContactPage
