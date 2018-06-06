import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import { Div, H1, Img } from '../assets/Matrix'

const Nav = () => (
  <DivResponse1 modifiers={['dGrid']}>
    <Div>
      <Link to='/'>
        <Img modifiers={['w50']} src="https://i.imgur.com/5x6n6r3.png" alt="logo" />
      </Link>
    </Div>
    <DivResponse2>
      <Link to="/#Portfolio"
        activeStyle={{
          color: '#212121',
          textDecoration: 'none',
          textShadow: '2px 2px 3px #d8d8d8'
        }}>
        <H1>PORTFOLIO</H1>
      </Link>
      <Link to="/#Gallery"
        activeStyle={{
          color: '#212121',
          textDecoration: 'none',
          textShadow: '2px 2px 3px #d8d8d8'
        }}
      >
        <H1>GALLERY</H1>
      </Link>
      <Link to="/#Contact"
        activeStyle={{
          color: '#212121',
          textDecoration: 'none',
          textShadow: '2px 2px 3px #d8d8d8'
        }}
      >
        <H1>CONTACT</H1>
      </Link>
    </DivResponse2>
  </DivResponse1>
)

const DivResponse1 = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-flow: column;
`

const DivResponse2 = styled.div`
  display: grid;
  grid-auto-flow: row;
  grid-gap: 100px;
  grid-template-columns: repeat(3, minmax(200px, 1fr));
  justify-items: end;
`

export default Nav