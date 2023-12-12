import Banner from "./Components/Header/Banner"
import Navber from "./Components/Header/Navber"
import Sidebar from "./Components/Header/Sidebar"
import Particals from "./Components/particals/Particals"


function App() {

  return (
    <div>
      <section id="Home" className="min-h-screen snap-center relative z-0">
        
        <div className="lg:max-w-3xl xl:max-w-6xl mx-auto">
          <Navber></Navber>
        </div>
        
        <div className="lg:max-w-3xl xl:max-w-6xl mx-auto">
          <Banner></Banner>
        </div>
        <div>
          <Sidebar></Sidebar>
        </div>
        <Particals></Particals>
      </section>
      <section id="About" className="min-h-screen snap-center text-7xl flex items-center justify-center">
        <img src="./assets/Official-4.jpg" alt="" />
        <div>Hello 2</div>
      </section>
      {/* <section className="min-h-screen text-7xl flex items-center justify-center snap-center">
        <div>Hello 3</div>
      </section>
      <section className="min-h-screen text-7xl flex items-center justify-center snap-center">
        <div>Hello 4</div>
      </section>
      <section id="last" className="min-h-screen text-7xl flex items-center justify-center snap-center">
        <div>Hello 5</div>
      </section> */}
    </div>
  )
}

export default App
