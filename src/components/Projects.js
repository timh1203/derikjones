import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import { Div, H1, P, P1, Img1 } from '../assets/Matrix'

const Projects = () => (
  <Div modifier={['py1']}>
    <P1>Projects</P1>
    <Div1>
      <Div modifiers={['pt3']}>
        <Link to="/project1">
          <Img1 src="https://i.imgur.com/k0dZG6j.png" alt="Project 1" />
        </Link>
        <H1>Conceptual Design</H1>
        <P>Sketchup & V-ray</P>
      </Div>
      <Div modifiers={['pt3']}>
        <Link to="/project1">
          <Img1 src="https://i.imgur.com/k0dZG6j.png" alt="Project 2" />
        </Link>
        <H1>Conceptual Design</H1>
        <P>Sketchup & V-ray</P>
      </Div>
      <Div modifiers={['pt3']}>
        <Link to="/project1">
          <Img1 src="https://i.imgur.com/k0dZG6j.png" alt="Project 3" />
        </Link>
        <H1>Conceptual Design</H1>
        <P>Sketchup & V-ray</P>
      </Div>
      <Div modifiers={['pt3']}>
        <Link to="/project1">
          <Img1 src="https://i.imgur.com/k0dZG6j.png" alt="Project 4" />
        </Link>
        <H1>Brambleton Virginia</H1>
        <P>Multi-Family</P>
      </Div>
      <Div modifiers={['pt3']}>
        <Link to="/project2">
          <Img1 src="https://i.imgur.com/yAUDSX7.png" alt="Project 5" />
        </Link>
        <H1>Brambleton Virginia</H1>
        <P>Townhome</P>
      </Div>
      <Div modifiers={['pt3']}>
        <Link to="/project3">
          <Img1 src="https://i.imgur.com/qXkvDah.png" alt="Project 6" />
        </Link>
        <H1>Leesburg South</H1>
        <P>Single Family</P>
      </Div>
    </Div1>
  </Div>
)

const Div1 = styled(Div)`
  display: grid;
  text-align: center;
  justify-content: center;
  grid-template-columns: repeat(3, 1fr);

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

// const Img1 = styled(Img)`
//   &:hover {
//     filter: brightness(80%);
//     box-shadow: 0 0 10px #82DBFA;
//   }
// `

export default Projects
