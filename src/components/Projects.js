import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import { Div } from '../assets/Matrix'

const Projects = () => (
  <Div0>
    <P1>Projects</P1>
    <Div1>
      <Div2>
        <Link to="/project1">
          <Img1 src="https://i.imgur.com/k0dZG6j.png" alt="Project 4" />
        </Link>
        <H1a>Brambleton Virginia</H1a>
        <P2>Multi-Family</P2>
      </Div2>
      <Div2>
        <Link to="/project2">
          <Img1 src="https://i.imgur.com/yAUDSX7.png" alt="Project 5" />
        </Link>
        <H1a>Brambleton Virginia</H1a>
        <P2>Townhome</P2>
      </Div2>
      <Div2>
        <Link to="/project3">
          <Img1 src="https://i.imgur.com/qXkvDah.png" alt="Project 6" />
        </Link>
        <H1a>Leesburg South</H1a>
        <P2>Single Family</P2>
      </Div2>
    </Div1>
  </Div0>
)

const Div0 = styled.div`
  padding: 1.5rem 0;
  width: 90%;
  margin: 0 auto;
`
const Div1 = styled(Div)`
  display: grid;
  text-align: center;
  justify-content: center;
  grid-template-columns: repeat(3, 1fr);

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`
const Div2 = styled.div`
  padding-top: 3rem 0;
`
const P1 = styled.p`
  font-family: 'Crimson Text', serif;
  font-size: 1.6rem;
  padding: 0.4rem 0;
  text-align: center;
  text-decoration: underline;
  transform: rotate(-5deg);
  border: 1px solid black;
  margin: 0 auto;
  margin-bottom: 4rem;
  background: #333333;
  color: white;
  border-radius: 5px;
  width: 10%;
  @media (max-width: 768px) {
    width: 18%;
    font-size: 1.4rem;
  }
  @media (max-width: 376px) {
    width: 40%;
  }
`
const H1a = styled.h1`
  font-family: 'Crimson Text', serif;
  margin-bottom: 2rem;
`
const P2 = styled.p`
  font-family: 'Crimson Text', serif;
  font-size: 1.6rem;
  margin-bottom: 2rem;
`
const Img1 = styled.img`
  width: 75%;
  margin-bottom: 2rem;
  &:hover {
    filter: brightness(80%);
    box-shadow: 0 0 10px #82DBFA;
  }
  @media (max-width: 376px) {
    width: 90%;
  }
`
// const Img1 = styled(Img)`
//   &:hover {
//     filter: brightness(80%);
//     box-shadow: 0 0 10px #82DBFA;
//   }
// `

export default Projects
