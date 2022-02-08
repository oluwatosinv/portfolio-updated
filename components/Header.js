import React from 'react'
import LottieAnimation from './Lottie'
import code from '../public/Animations/TOSIN ART3.json'
import Typical from 'react-typical'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faTwitter,
  faGithub,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons'

library.add(faTwitter, faGithub, faLinkedin)
const Header = () => {
  return (
    <section className='header 2xl:py-16 2xl:px-36 py-1 md:px-16 px-8  grid grid-cols-1 md:grid-cols-2'>
      <div className='head '>
        <h1 className='heading-title  font-medium text-white text-5xl md:text-5xl lg:text-7xl 2xl:text-9xl font-shippori-mincho mt-10'>
          Hey, I'm Oluwatosin,
        </h1>
        <p className='heading-text  2xl:py-20 2xl:pt-36 text-1xl  py-4'>
          <strong className='flex text-3xl 2xl:text-7xl my-6 md:text-3xl lg:text-4xl font-white font-Chivo font-light text-white'>
            <p className='mr-4 '>A </p>
            <Typical
              steps={[
                'Front-End Developer,',
                1500,
                'Software Developer,',
                1500,
                'Software Engineer,',
                1500,
              ]}
              wrapper='p'
              loop={Infinity}
            />
          </strong>
        </p>
        <div>
          <a
            href='https://www.linkedin.com/in/oluwatosin-faboade/'
            target='_blank'
            className='mr-3'
          >
            <FontAwesomeIcon icon={['fab', 'linkedin']} size='lg' />
          </a>
          <a href='https://github.com/oluwatosinv' target='_blank'>
            <FontAwesomeIcon icon={['fab', 'github']} />
          </a>
          {/* <a
          href='https://drive.google.com/file/d/1uj8DjXepHv5oGq_qQeX9U618jIBMuqzb/view?usp=sharing'
          target='_blank'
        >
          <FontAwesomeIcon icon={['fab', 'twitter']} />
        </a> */}
        </div>

        <a
          href='https://drive.google.com/file/d/1uj8DjXepHv5oGq_qQeX9U618jIBMuqzb/view?usp=sharing'
          target='_blank'
        >
          <button className='border-transparent animate-bounce transition duration-1000 bg-pink-600 text-wheat font-Poppins px-8 py-4 my-8 rounded-full rounded-tl-3xl uppercase mt-8 hover:bg-gray-500 shadow-lg text-white'>
            Download CV
          </button>
        </a>
      </div>
      <div>
        <LottieAnimation lotti={code} />
      </div>
    </section>
  )
}

export default Header
