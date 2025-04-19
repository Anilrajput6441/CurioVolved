import AllBlogs from "./Components/AllBlogs";
import Hero from "./Components/Hero";
import OurBlogs from "./Components/OurBlogs";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <Hero />
      <OurBlogs />
      <AllBlogs />
    </div>
  );
}
