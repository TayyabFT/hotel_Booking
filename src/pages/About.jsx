import React from 'react'
import ExclusiveOffers from '../component/ExclusiveOffers'
import FeaturedHotels from '../component/FeaturedHotels'
import Hero from '../component/Hero'
import NewsletterSubscribe from '../component/NewsLetterSubcribe'
import Testimonials from '../component/Testimonials'

export const About = () => {
  return (
    <div>
        <Hero/>
        <FeaturedHotels/>
        <ExclusiveOffers/>
        <Testimonials/>
        <NewsletterSubscribe/>
    </div>
  )
}
