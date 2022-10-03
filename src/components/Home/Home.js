import Slideshow from '../Slide/Slideshow'
import React from 'react'
import Welcome from '../Welcome/Welcome'
import Programme from '../Programme/Programme'
import ChurchPartenerTitle from '../ChurchPartenerTitle'
import ChurchParteners from '../ChurchParteners'

function Home() {
  return (
    <div>
      <Slideshow />
      <Welcome />
      <Programme />
      <ChurchPartenerTitle />
      <ChurchParteners />
    </div>
  )
}

export default Home