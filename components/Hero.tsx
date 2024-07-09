import GridPattern from './magicui/animated-grid-pattern'
import GradualSpacing from './magicui/gradual-spacing'
import ShinyButton from './magicui/shiny-button'
import { FaLocationArrow } from "react-icons/fa6"

export const Hero = () => {
  return (
    <div className='relative h-screen w-full flex flex-col justify-center items-center'>
      {/* the animation grid background */}
      <div className='absolute inset-0 z-0'>
        <GridPattern />
      </div>

      {/* text */}
      <div className='relative z-10 text-center max-w-2xl mx-auto'>
        <h2 className="uppercase tracking-widest text-xs text-blue-100">
          Software engineering portfolio
        </h2>
        
        {/* gradual-spacing effect */}
        <GradualSpacing className="text-[40px] md:text-5xl lg:text-6xl" text="Transforming Concepts into Seamless Experiences" />

        <p className="md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl py-5">
          Hi, I&apos;m Samuel, a Frontend Engineer Based in Kenya
        </p>

        {/* my work button */}
        <a href="#about" className="inline-flex items-center justify-center mt-5">
          <ShinyButton title="Show my Work" icon={<FaLocationArrow />} position='right' />
        </a>
      </div>
    </div>
  )
}

export default Hero
