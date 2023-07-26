import React from 'react'
import SliderHeader from './HomeComponents/SliderHeader/SliderHeader'
import About from './HomeComponents/About/About'
import HotelSlider from './HomeComponents/HotelSlider/HotelSlider'
import CitiesComponent from './HomeComponents/CitiesComponents/CitiesComponent'
import Reviews from './HomeComponents/Reviews/Reviews'
import News from './HomeComponents/News/News'
import Download from './HomeComponents/Download/Download'
import HowItWorks from './HomeComponents/HowItWorks/HowItWorks'
import Companies from './HomeComponents/Companies/Companies'

const Home = () => {
  return (
    <>
      <SliderHeader />
      <About />
      <HotelSlider />
      <CitiesComponent />
      <Reviews />
      <News />
      <Download />
      <HowItWorks />
      <Companies />
    </>
  )
}

export default Home
