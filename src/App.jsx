import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
//import Section from "./components/Section"
import Services from "./components/Services"
import About from "./components/About"
import Contact from "./components/Contact"

function App() {

  return (
    <div className="px-2 md:px-20 overflow-hidden bg-olive-100">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Contact />

      

    </div>
  )
}

export default App
