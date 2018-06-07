import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import { Section, Div, H1, P } from '../assets/Matrix'

const Footer = () => (
  <Section modifiers={['tCenter', 'p0', 'm0']}>
    <DivResponse1>
      <ImgResponse src="https://i.imgur.com/5x6n6r3.png" alt="logo" />
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
    <P modifiers={['m0', 'p0']}>Copyright © 2018 Derik S. Jones</P>
  </Section>
)

const DivResponse1 = styled.div`
  display: grid;
  grid-auto-flow: column;
  justify-content: space-around;
`

const DivResponse2 = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
`

const ImgResponse = styled.img`
  width: 30%;
  color: white;
`

export default Footer
