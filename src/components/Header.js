import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import Nav from '../components/Nav'
import { Div, H1 } from '../assets/Matrix'

const Header = () => (
  <SectionResponse>
    <Nav />
    <Div modifiers={['fasCenter']}>
      <H1>Design</H1>
    </Div>
    <Div modifiers={['fasCenter']}>
      <Link to="/"><H1>⬇️</H1></Link>
    </Div>
  </SectionResponse>
)

const SectionResponse = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-image: url('https://i.imgur.com/Pcwo5Rv.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 100vh;
`

export default Header