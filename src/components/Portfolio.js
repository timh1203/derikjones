import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import Models from './Models'
import Projects from './Projects'
import { Section, Div, H1, P, Img } from '../assets/Matrix'

const Portfolio = () => (
  <Section id='Portfolio'>
    <H1>Portfolio Section</H1>
    <Models />
    <Projects />
  </Section>
)

export default Portfolio
