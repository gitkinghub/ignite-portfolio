import GridPattern from './magicui/animated-grid-pattern'
import GradualSpacing from './magicui/gradual-spacing'
import ShinyButton from './magicui/shiny-button'
import {FaLocationArrow} from "react-icons/fa6"

export const Hero = () => {
  return  ( 
    <div className='pb-20 pt-36'>
        {/* the animation grid background */}
        <div>
            <GridPattern/>
        </div>
        
        {/* text */}
        <div className='flex justify-center relative my-20 z-10'>
            <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
                <h2 className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
                    Software engineering portfolio
                </h2>
                
                {/* gradual-spacing effect */}
                <GradualSpacing className="text-center text-[40px] md:text-5xl lg:text-6xl" text="Transforming Concepts into Seamless Experiences" />

                <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl py-5" >Hi, I&apos;m Samuel, a Frontend Engineer Based in Kenya</p>
            </div>
        </div>
     
        {/* my work button */}
        <a href="#about" className="flex items-center justify-center" >
            <ShinyButton title="Show my Work" icon={<FaLocationArrow/>} position='right'/>
        </a>

    </div>
  )
}

export default Hero