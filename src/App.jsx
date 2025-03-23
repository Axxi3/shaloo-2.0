import './App.css'
import AboutSection from './Components/AboutSection'
import EducationSection from './Components/EducationSection'
import LegacySection from './Components/FinalSection'
import Footer from './Components/Footer'
import Navbar from './Components/Navbar'
import ThirdSection from './Components/ThirsSection'

function App() {


  return (
   <>
    <div className="min-h-screen bg-[#FAFAFC]">
      <Navbar />
      <div className="pt-8">
        <AboutSection/>
        <EducationSection/>
        <ThirdSection/>
        <LegacySection/>
        <Footer/>
      </div>
    </div>
   </>
  )
}

export default App
