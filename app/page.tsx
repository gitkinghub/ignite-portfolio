import Hero from "@/components/Hero";
import { FloatingNav } from './../components/ui/floating-navbar';
import { FaHome, FaInfoCircle, FaEnvelope } from "react-icons/fa";

// Define your navigation items
const navItems = [
  { name: "Home", link: "/", icon: <FaHome /> },
  { name: "About", link: "/about", icon: <FaInfoCircle /> },
  { name: "Contact", link: "/contact", icon: <FaEnvelope /> },
];

// this is where we display everything on the screen
export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={[{name: 'Home', link: '/', icon:<FaHome/>}]}/>
        <Hero />
      </div>
    </main>
  );
}
