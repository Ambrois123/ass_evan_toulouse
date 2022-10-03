import ChurchParteners from '../ChurchParteners'
import ChurchPartenerTitle from '../ChurchPartenerTitle'
import React from 'react'
import Title from '../Title/index'
import Template from '../Template/Template'
import TitleResp from '../TitleResp/index'
import MotPasteur from '../MotPasteur/MotPasteur'


function About() {
  return (
    <div>
      <Title />
      <Template />
      <TitleResp />
      <MotPasteur />
      <ChurchPartenerTitle />
      <ChurchParteners/>
    </div>
  )
}

export default About