import Explore from "./components/Explore";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <>
    <div className="mx-[100px]">
      <Navbar  />
      <Hero />
      <Explore />
      <Footer />
    </div>
    </>
  )
}