import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import { Section, H1, P } from '../assets/Matrix'

const Footer = () => (
  <Section modifiers={['bBlack', 'cWhite', 'tCenter']}>
    <P modifiers={['m0', 'p0']}>Copyright © 2018 Derik S. Jones</P>
  </Section>
)

export default Footer
