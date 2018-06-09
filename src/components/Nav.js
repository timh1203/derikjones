import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import { Div, H1, Img } from '../assets/Matrix'

const Nav = () => (
  <DivResponse1>
    <Link to='/'>
      <ImgResponse src="https://i.imgur.com/SIMExmd.png" alt="logo" />
    </Link>

    <DivResponse2>
      <Link to="/#Portfolio"
        activeStyle={{
          color: 'white',
          fontSize: '0.8rem',
          textDecoration: 'overline',
        }}>
        <H1>PORTFOLIO</H1>
      </Link>
      <Link to="/#Photos"
        activeStyle={{
          color: 'white',
          fontSize: '0.8rem',
          textDecoration: 'overline',
        }}
      >
        <H1>PHOTOS</H1>
      </Link>
      <Link to="/#Contact"
        activeStyle={{
          color: 'white',
          fontSize: '0.8rem',
          textDecoration: 'overline',
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
  width: 100%;
`

const DivResponse2 = styled.div`
  display: grid;
  padding: 0 1rem;
`

const ImgResponse = styled.img`
  width: 20%;
  margin: 1rem;
`

export default Nav