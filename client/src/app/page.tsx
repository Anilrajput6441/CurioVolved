// import AllBlogs from "./Components/AllBlogs";
import Hero from "./Components/MainPage/Hero";
import Navbar from "./Components/MainPage/Navbar";
import Footer from "./Components/MainPage/Footer";
import OurBlogs from "./Components/MainPage/OurBlogs";

export default function Home() {
  return (

    <>
    <div className="overflow-x-hidden">
    <Navbar />
    <Hero />
    <OurBlogs />
    <Footer />
    </div>
   </>
  );
}
