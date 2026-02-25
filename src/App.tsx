import React from 'react'

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import MoreReviewdata from "./pages/MoreReviewsPage.tsx"
import TopGamesPage from "./pages/TopGamesPage.tsx"
import AboutPage from "./pages/AboutPage.tsx"
import ContactPage from "./pages/ContactPage.tsx"



export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/morereviews" element={<MoreReviewdata />} /> 
          <Route path="/topgamespage" element={<TopGamesPage />} />  
          <Route path="/aboutpage" element={<AboutPage />} />  
          <Route path="/contactPage" element={<ContactPage />} />  
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
