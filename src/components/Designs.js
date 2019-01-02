import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import { Div, P } from '../assets/Matrix'

const Designs = () => (
  <Div0>
    <P1>3d Designs</P1>
    <Div1>
      <Div2>
        <Link to="/design1">
          <Img1 src="https://i.imgur.com/XX6RFQc.jpg" alt="Design 1" />
        </Link>
        <H1a>Conceptual Design</H1a>
        <P2>Sketchup & V-ray</P2>
      </Div2>
      <Div2>
        <Link to="/design2">
          <Img1 src="https://i.imgur.com/Itg5Z1m.jpg" alt="Design 2" />
        </Link>
        <H1a>Conceptual Design</H1a>
        <P2>Sketchup & V-ray</P2>
      </Div2>
      <Div2>
        <Link to="/design3">
          <Img1 src="https://i.imgur.com/0hY28uu.jpg" alt="Design 3" />
        </Link>
        <H1a>Conceptual Design</H1a>
        <P2>Sketchup & V-ray</P2>
      </Div2>
      <Div2>
        <Link to="/design4">
          <Img1 src="https://i.imgur.com/7USkFg2.png" alt="Design 4" />
        </Link>
        <H1a>Teagarden</H1a>
        <P2>Illustrator Design & Photoshop</P2>
      </Div2>
      <Div2>
        <Link to="/design5">
          <Img1 src="https://i.imgur.com/yGY60ZS.png" alt="Design 5" />
        </Link>
        <H1a>Grand Villas-Hudson</H1a>
        <P2>Shetckup Design</P2>
      </Div2>
      <Div2>
        <Link to="/design6">
          <Img1 src="https://i.imgur.com/idFt6go.png" alt="Design 6" />
        </Link>
        <H1a>Middleway</H1a>
        <P2>Illustrator Design & Photoshop</P2>
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
  align-self: center;
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
  @media (max-width: 400px) {
    width: 30%;
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

export default Designs
