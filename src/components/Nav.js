import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import { Section, Div, H1, Img } from '../assets/Matrix'

const Nav = () => (
  <Section modifiers={['dFlex', 'fjcBetween']}>
      <Div modifiers={['tCenter']}>
        <Img modifiers={['w50']} src="https://i.imgur.com/5x6n6r3.png" alt="logo" />
      </Div>
      <Div modifiers={['dFlex', 'w25', 'fjcBetween', 'p2']}>
        <Link to="/">
          <H1>Portfolio</H1>
        </Link>
        <Link to="/">
          <H1>Photos</H1>
        </Link>
        <Link to="/">
          <H1>Contact</H1>
        </Link>
      </Div>
  </Section>
)

export default Nav