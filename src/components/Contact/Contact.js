import ChurchParteners from '../ChurchParteners'
import ChurchPartenerTitle from '../ChurchPartenerTitle'
import React from 'react'
import InfoAdresse from '../InfoAdresse/index'


function Contact() {
  return (
    <div>
      <InfoAdresse />
      <ChurchPartenerTitle />
      <ChurchParteners/>
    </div>
  )
}

export default Contact