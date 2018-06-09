import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import FaLinkedinSquare from 'react-icons/lib/fa/linkedin-square';
import FaInstagram from 'react-icons/lib/fa/instagram'
import { Section, Div, H1, A, P } from '../assets/Matrix'

const Footer = () => (
  <SectionResponse>
    <DivResponse1>
      <ImgResponse src="https://i.imgur.com/SIMExmd.png" alt="logo" />
    </DivResponse1>
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
    <Div>
        <A href='https://www.linkedin.com/in/derik-jones-b3722b102/'>
          <FaLinkedinSquare 
            style={{
              color: '#0077B5',
              border: '1px solid #0077B5',
              borderRadius: '10%',
              boxShadow: '0px 3px 10px rgba(0,0,0,.25)',
              margin: '2rem',
            }} 
            size={50} 
          />
        </A>
        <A href='https://www.instagram.com/rad_jones_photography/'>
          <FaInstagram 
            style={{
              color: 'white',
              borderRadius: '10%',
              background: '#d6249f',
              background: 'radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%)',
              boxShadow: '0px 3px 10px rgba(0,0,0,.25)',
              margin: '2rem',
            }}
            size={50}
          />
        </A>
      </Div>
    <PResponse>Copyright © 2018 Derik S. Jones</PResponse>
  </SectionResponse>
)

const SectionResponse = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr auto;
  justify-items: center;
  justify-content: center;
  align-items: center;
  color: white;
  background: #333333;
  text-align: center;
`

const DivResponse1 = styled.div`
`

const DivResponse2 = styled.div`
  display: grid;
  grid-gap: 20px;
  width: 100%;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  color: white;
`

const ImgResponse = styled.img`
  width: 50%;

  display: grid;
  justify-self: center;
  margin: 0 auto;
  text-align: center;
`

const PResponse = styled.p`
  grid-column: 1 / span 3;
  text-align: center;
  margin: 0;
  padding: 0;
  align-self: end;
`

export default Footer
