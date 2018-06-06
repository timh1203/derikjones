import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import Nav from '../components/Nav'
import { Div, H1, P } from '../assets/Matrix'

const Header = () => (
  <SectionResponse>
    <Nav />
    <Div modifiers={['tCenter']}>
      <H1Response>Design</H1Response>
      <PResponse>Shaping Architecture</PResponse>
    </Div>
    <Div>
      <Link to="/#Bio"  
        activeStyle={{
          textDecoration: 'none',
          color: 'white'
        }}
      >
        <H1>⬇</H1>
      </Link>
    </Div>
  </SectionResponse>
)

const SectionResponse = styled.div`
  display: grid;
  align-content: space-between;
  justify-items: center;
  background-image: url('https://i.imgur.com/Pcwo5Rv.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 100vh;
`

const H1Response = styled.h1`
  font-size: 10rem;
  margin: 0;
  color: white;
  text-decoration: underline;
`
const PResponse = styled.p`
  font-size: 3rem;
  margin: 0;
  color: white;
  font-style: italic;
`

export default Header