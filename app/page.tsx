import Grid from "@/components/Grid"
import Hero from "@/components/Hero";
import RecentProjects from "@/components/RecentProjects"
import { FloatingNav } from './../components/ui/floating-navbar';
import {navItems} from "@/data"
import Experience from "@/components/Experience"
import Approach from "../components/Approach"
import Footer from "../components/Footer"
import { FaHome, FaInfoCircle, FaEnvelope } from "react-icons/fa";

// Define your navigation items
// const navItems = [
//   { name: "Home", link: "/", icon: <FaHome /> },
//   { name: "About", link: "/about", icon: <FaInfoCircle /> },
//   { name: "Contact", link: "/contact", icon: <FaEnvelope /> },
// ];

// this is where we display everything on the screen
export default function Home() {
  return (
    <div className="bg-black-100" >
      <FloatingNav navItems={navItems} />
      <Hero />
      <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
        <div className="max-w-7xl w-full">
          <Grid />
          {/* Other components go here */}
          <RecentProjects/>
          <Experience/>
          <Approach/>
          <Footer/>
        </div>
      </main>
    </div>
  );
}
