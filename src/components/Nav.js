import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import { Div, H1, Img } from '../assets/Matrix'

const Nav = () => (
  <DivResponse1 modifiers={['dGrid']}>
    <Div>
      <Link to='/'>
        <ImgResponse src="https://i.imgur.com/5x6n6r3.png" alt="logo" />
      </Link>
    </Div>
    <DivResponse2>
      <Link to="/#Portfolio"
        activeStyle={{
          color: '#212121',
          fontSize: '0.6rem'
        }}>
        <H1>PORTFOLIO</H1>
      </Link>
      <Link to="/#Photos"
        activeStyle={{
          color: '#212121',
          fontSize: '0.6rem'
        }}
      >
        <H1>PHOTOS</H1>
      </Link>
      <Link to="/#Contact"
        activeStyle={{
          color: '#212121',
          fontSize: '0.6rem'
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
  grid-gap: 50px;
  grid-template-columns: repeat(3, minmax(200px, 1fr));
  justify-items: end;
  font-size: 0.5rem;
`

const ImgResponse = styled.img`
  width: 70%;
`

export default Nav