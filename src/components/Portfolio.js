import React from 'react'
import styled from 'styled-components'
import { Designs, Photography, Projects } from '../components'

const Portfolio = () => (
  <Section1 id="Portfolio">
    <H1a>Profesional Portfolio</H1a>
    <Hr1 />
    <Designs />
    <Hr1 />
    <Projects />
    <Hr1 />
    <Photography />
  </Section1>
)

const Section1 = styled.section`
  margin: 3rem 0;
`
const H1a = styled.h1`
`
const Hr1 = styled.hr`
  width: 80%;
  opacity: 0.3;
  margin: 2rem auto;
`
export default Portfolio
