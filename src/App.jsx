import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
//import Section from "./components/Section"
import Services from "./components/Services"
import About from "./components/About"
import Contact from "./components/Contact"
import StatsSection from "./components/StatsSection"
import Footer from "./components/Footer"
import Turn from "./components/Turn"
import Reviews from "./components/Reviews"
import Faq from "./components/Faq"

function App() {

  return (
    <div className="px-2 md:px-20 overflow-hidden bg-olive-100">
      <Navbar />
      <Hero />
      <StatsSection />
      <Services />
      <About />
      <Turn />
      <Reviews />
      <Faq />
      <Contact />
      <Footer />

      

    </div>
  )
}

export default App
