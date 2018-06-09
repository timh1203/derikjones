import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import { Div, H1, P, Img } from '../assets/Matrix'

const Projects = () => (
  <Div modifier={['py1']}>
    <P modifiers={['tCenter', 'ul', 'rotate5L', 'boxUp', 'm0A', 'w10', 'bGray', 'cWhite', 'bRadius5px']}>Projects</P>
    <Div modifiers={['dFlex', 'fjcBetween', 'tCenter']}>
      <Div modifiers={['pt3']}>
        <Link to='/project1'>
          <Img1 modifiers={['w75']} src='https://i.imgur.com/k0dZG6j.png' alt='Project 1' />
        </Link>
        <H1>Brambleton Virginia</H1>
        <P>Multi-Family</P>
      </Div>
      <Div modifiers={['pt3']}>
        <Link to='/project2'>
          <Img1 modifiers={['w75']} src='https://i.imgur.com/yAUDSX7.png' alt='Project 2' />
        </Link>
        <H1>Brambleton Virginia</H1>
        <P>Townhome</P>
      </Div>
      <Div modifiers={['pt3']}>
        <Link to='/project3'>
          <Img1 modifiers={['w75']} src='https://i.imgur.com/qXkvDah.png' alt='Project 3' />
        </Link>
        <H1>Leesburg South</H1>
        <P>Single Family</P>
      </Div>
    </Div>
  </Div>
)

const Img1 = styled(Img)`
  &:hover {
    filter: brightness(80%);
    box-shadow: 0 0 10px #82DBFA;
  }
`

export default Projects
