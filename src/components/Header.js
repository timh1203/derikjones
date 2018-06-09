import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import Nav from '../components/Nav'
import { Div } from '../assets/Matrix'

const Header = () => (
  <Section1>
    <Nav />
    <Div1>
      <H11>Design</H11>
      <P1>Shaping Architecture</P1>
    </Div1>
    <Div>
      <Link1 to="/#Bio">
        <H12>↓</H12>
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

const H11 = styled.h1`
  font-size: 10rem;
  margin: 0;
  color: white;
  text-decoration: underline;
  font-family: 'Crimson Text', serif;
  text-shadow: 0 0 20px black;
`

const H12 = styled.h1`
  &:hover {
    text-shadow: 0 0 5px white;
    color: black;
  }
`

const P1 = styled.p`
  font-size: 1.5rem;
  margin: 0;
  color: white;
  font-style: italic;
`

const Link1 = styled(Link)`
  text-decoration: none;
  color: white;
`

export default Header