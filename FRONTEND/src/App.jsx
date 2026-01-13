import React from 'react'
import Home from './Home'
import { Route, Routes } from 'react-router-dom'
import About from './About'
import PrivacyPolicy from './PrivacyPolicy'
import TermsOfService from './Terms'

const App = () => {
  return (
    <Routes>
      <Route path= "/" element={<Home />}/>
      <Route path= "/about" element={<About />}/>
      <Route path= "/privacy-policy" element={<PrivacyPolicy />}/>
      <Route path="/terms" element={<TermsOfService />} />
    </Routes>
  )
}

export default App
