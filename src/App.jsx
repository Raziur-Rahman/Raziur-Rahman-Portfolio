import About from "./Components/About/About"
import ContactUs from "./Components/Contact/ContactUs"
import Footer from "./Components/Footer/Footer"
import Banner from "./Components/Header/Banner"
import Navber from "./Components/Header/Navber"
import Sidebar from "./Components/Header/Sidebar"
import SectionHeading from "./Components/Shared/SectionHeading"
import Skills from "./Components/Skils/Skills"
import Particals from "./Components/particals/Particals"


function App() {

  return (
    <div>
      <section id="Home" className="min-h-screen snap-center relative">

        <div className="lg:max-w-3xl xl:max-w-6xl mx-auto">
          <Navber></Navber>
        </div>

        <div className="lg:max-w-3xl xl:max-w-6xl mx-auto z-10">
          <Banner></Banner>
        </div>
        <div>
          <Sidebar></Sidebar>
        </div>
        <div>
          <Particals></Particals>
        </div>
      </section>

      <section id="About Me">
        <SectionHeading tittle={"about"}></SectionHeading>
        <About></About>
      </section>

      {/* bg-gradient-to-b from-[#111132] to-[#171731] */}
      <section id="My Skills" className="z-0">
        <SectionHeading tittle={"skills"}></SectionHeading>
        <Skills></Skills>
      </section>

      {/* <section className="min-h-screen text-7xl flex items-center justify-center snap-center">
        <div>Hello 4</div>
      </section> */}
      
      <section id="Contact">
        <ContactUs></ContactUs>
      </section>
      <Footer></Footer>
    </div>
  )
}

export default App
