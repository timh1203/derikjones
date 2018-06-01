import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import { Section, Div, H1, P, Img } from '../assets/Matrix'

const Portfolio = () => (
  <Section id='Portfolio'>
    <H1>Portfolio Section</H1>
    <Div modifiers={['dFlex', 'fjcBetween', 'tCenter']}>
      <Div>
        <Link to='/project1'>
          <Img modifiers={['w75']} src='https://i.imgur.com/k0dZG6j.png' alt='Project 1' />
        </Link>
        <H1>Project 1 Title</H1>
        <P>Project 1 Description</P>
      </Div>
      <Div>
        <Link to='/project2'>
          <Img modifiers={['w75']} src='https://i.imgur.com/yAUDSX7.png' alt='Project 2' />
        </Link>
        <H1>Project 2 Title</H1>
        <P>Project 3 Description</P>
      </Div>
      <Div>
        <Link to='/project3'>
          <Img modifiers={['w75']} src='https://i.imgur.com/qXkvDah.png' alt='Project 3' />
        </Link>
        <H1>Project 3 Title</H1>
        <P>Project 3 Description</P>
      </Div>
    </Div>
  </Section>
)

export default Portfolio
