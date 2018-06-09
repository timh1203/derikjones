import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import Models from './Models'
import Projects from './Projects'
import { Section, H1, Hr } from '../assets/Matrix'

const Portfolio = () => (
  <Section id='Portfolio'>
    <H1 modifiers={['ol', 'tCenter']}>Profesional Portfolio</H1>
    <Hr />
    <Models />
    <Hr />
    <Projects />
  </Section>
)

export default Portfolio
