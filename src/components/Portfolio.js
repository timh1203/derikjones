import React from 'react'
import Designs from './Designs'
import Projects from './Projects'
import Photos from './Photos'
import { Section, H1, Hr } from '../assets/Matrix'

const Portfolio = () => (
  <Section id='Portfolio'>
    <H1 modifiers={['ol', 'tCenter']}>Profesional Portfolio</H1>
    <Hr />
    <Designs />
    <Hr />
    <Projects />
    <Hr />
    <Photos />
  </Section>
)

export default Portfolio
