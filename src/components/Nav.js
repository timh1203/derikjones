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
          fontSize: '0.6rem'
        }}>
        <H1>PORTFOLIO</H1>
      </Link>
      <Link to="/#Photos"
        activeStyle={{
          color: 'white',
          fontSize: '0.6rem'
        }}
      >
        <H1>PHOTOS</H1>
      </Link>
      <Link to="/#Contact"
        activeStyle={{
          color: 'white',
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
  grid-template-columns: 1fr auto;
`

const DivResponse2 = styled.div`
  display: grid;
  /* grid-template-columns: 1fr 1fr; */
  /* grid-gap: 50px;
  grid-template-columns: repeat(3, minmax(200px, 1fr));
  justify-items: center;
  font-size: 0.5rem; */
`

const ImgResponse = styled.img`
  width: 70%;
`

export default Nav