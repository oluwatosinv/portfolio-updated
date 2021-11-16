import React from 'react'
import Project from './Project'

const Projects = () => {
  return (
    <div className='px-6 py-4 ' id='projects'>
      <h1 className='text-center text-4xl text-gray-900 py-8 mt-6 font-shippori-mincho font-medium'>
        Recent Projects
      </h1>
      <div className='mt-3 grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6 justify-items-center'>
        <Project
          animate='zoom-in-right'
          link='https://cryptouniversal.netlify.app/'
          src='https://res.cloudinary.com/tosin/image/upload/v1636924913/screencapture-cryptouniversal-netlify-app-2021-11-14-22_14_17_uw0cuv.png'
          title='Cryptocurrency App'
          subTitle='Frontend / HTML / CSS / React js'
          body='Designed and built a high performance website to check details of cryptocurrency and news about cryptocurrency'
        />
        <Project
          animate='zoom-in'
          link='https://www.detrixstudios.com/'
          src='https://res.cloudinary.com/tosin/image/upload/v1632497509/HNG/screencapture-detrixstudios-2021-09-23-22_01_11.png'
          title='Detrix Studios'
          subTitle='Frontend / HTML / CSS / React js'
          body='Designed and built a high performance website for a photography and videography Business'
        />
        <Project
          animate='zoom-in-left'
          link='https://weatherapp80.netlify.app/'
          src='https://res.cloudinary.com/tosin/image/upload/v1636924524/screencapture-firegrampic-netlify-app-2021-11-14-22_13_13_sk2sru.png'
          title='Firegram '
          subTitle='Frontend / HTML / CSS / React js / Firebase'
          body='Designed and built a high performance webs app  to upload images in real time'
        />
        <Project
          animate='zoom-in-right'
          link='https://weatherapp80.netlify.app/'
          src='https://res.cloudinary.com/tosin/image/upload/v1629489882/HNG/screencapture-weatherapp80-netlify-app-2021-07-05-11_06_13.png'
          title='Weather App'
          subTitle='Frontend / HTML / CSS / React js'
          body='Designed and built a high performance website to check the weather for any city in the world. You would love it!!!'
        />

        <Project
          animate='fade-left'
          link='https://farmproduceng.netlify.app/'
          src='https://res.cloudinary.com/tosin/image/upload/v1632261002/screencapture-farmproduceng-netlify-app-2021-09-21-22_42_13_bebh2t.png'
          title='Farm Produce'
          subTitle='Frontend / HTML / CSS'
          body='Designed and built a high performance website for Farm produce ng'
        />
        <Project
          animate='zoom-in-right'
          link='https://flyodocument.netlify.app/'
          src='https://res.cloudinary.com/tosin/image/upload/v1633632910/HNG/screencapture-flyodocument-netlify-app-2021-08-17-21_02_29.png'
          title='Flyo Document'
          subTitle='Frontend / HTML / CSS'
          body='Designed and built a high performance website for flyo document'
        />
        {/* <Project
          animate='zoom-in'
          link='https://nifty-jang-88e83d.netlify.app/'
          src='https://res.cloudinary.com/tosin/image/upload/v1633633926/screencapture-nifty-jang-88e83d-netlify-app-2021-10-07-19_42_10_msejzx.png'
          title='To Do List'
          subTitle='Frontend / HTML / CSS /Javascript'
          body='Designed and built a high performance website for a photography and videography Business'
        />
        <Project
          animate='fade-left'
          link='https://calculatorreactjs.netlify.app/'
          src='https://res.cloudinary.com/tosin/image/upload/v1633632464/screencapture-calculatorreactjs-netlify-app-2021-10-07-19_47_29_awxri0.png'
          title='Flyo Document'
          subTitle='Frontend / HTML / CSS/ React Js'
          body='Designed and built a high performance website for Farm produce ng'
        /> */}
      </div>
    </div>
  )
}

export default Projects
