import './App.css'
import HeroSection from './Components/Hero Section/HeroSection.tsx'

import Footer from './Components/Footer'

import AboutVaibhav from './Components/about Vaibhav/AboutVaibhav.tsx'
import ValuesSection from './Components/Value section/ValuesSection.tsx'
import BiographySection from './Components/Education/BiographySection.tsx'
import HeroImage from './Components/Aesthetic/HeroImage.tsx'
import LegacySection from './Components/Legacy/LegacySection.tsx'

function App() {


  return (
   <>
     <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap"
        rel="stylesheet"
      />
    <div className="min-h-screen bg-[#FAFAFC]">
   
    
      <div className="relative">
      <HeroSection />

      {/* Spacer so AboutVaibhav doesn't overlap fixed Hero */}
      <div className="relative z-10 pt-[100vh]">
        <AboutVaibhav />
      </div>
    </div>

    <ValuesSection/>
  <BiographySection/>

  <div className="relative">
      <HeroImage />

      {/* Spacer so AboutVaibhav doesn't overlap fixed Hero */}
      <div className="relative z-10 pt-[100vh]">
        <LegacySection />
      </div>
    </div>
      
        <Footer/>
      </div>
    
   </>
  )
}

export default App
