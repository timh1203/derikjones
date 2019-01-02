import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import Nav from '../components/Nav'
import { Div } from '../assets/Matrix'

const Header = () => (
  <Section1>
    <Nav />
    <Div1>
      <H1a>Design</H1a>
      <P1>Shaping Architecture</P1>
    </Div1>
    <Div>
      <Link1 to="/#About">
        <H1b>↓</H1b>
      </Link1>
    </Div>
  </Section1>
)

const Section1 = styled.div`
  display: grid;
  align-content: space-between;
  justify-items: center;
  background-image: url('https://i.imgur.com/Pcwo5Rv.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 100vh;
`
const Div1 = styled.div`
  text-align: center;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 50%;
`
const H1a = styled.h1`
  font-size: 12rem;
  margin: 0;
  color: white;
  text-decoration: underline;
  font-family: 'Crimson Text', serif;
  text-shadow: 0 0 20px black;
  padding: 2rem 0;
  @media (max-width: 768px) {
    font-size: 8rem;
  }
`
const H1b = styled.h1`
  font-size: 3rem;
  margin-bottom: 2rem;
  &:hover {
    text-shadow: 0 0 5px white;
    color: black;
  }
`
const P1 = styled.p`
  font-size: 2.5rem;
  margin: 0;
  color: white;
  font-style: italic;
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`
const Link1 = styled(Link)`
  text-decoration: none;
  color: white;
`

export default Header
