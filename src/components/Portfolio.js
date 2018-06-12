import React from 'react'
import Designs from './Designs'
import Projects from './Projects'
import Photography from './Photography'
import { Section, H1, Hr } from '../assets/Matrix'

const Portfolio = () => (
  <Section id="Portfolio" modifiers={['w90', 'm1A']}>
    <H1 modifiers={['ol', 'tCenter']}>Profesional Portfolio</H1>
    <Hr />
    <Designs />
    <Hr />
    <Projects />
    <Hr />
    <Photography />
  </Section>
)

export default Portfolio
