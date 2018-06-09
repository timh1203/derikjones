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
      <Link1 to="/#Portfolio">
        <H1>About</H1>
      </Link1>
      <Link1 to="/#Photos">
        <H1>Portfolio</H1>
      </Link1>
      <Link1 to="/#Contact">
        <H1>Contact</H1>
      </Link1>
    </DivResponse2>
    <Div>
        <A href='https://www.linkedin.com/in/derik-jones-b3722b102/'>
          <FaLinkedinSquare1 size={50} />
        </A>
        <A href='https://www.instagram.com/rad_jones_photography/'>
          <FaInstagram1 size={50} />
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
  /* grid-gap: 20px; */
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

const Link1 = styled(Link)`
  color: white;
  font-size: 0.6rem;
  text-decoration: none;
  border-top: 5px solid white;

  &:hover {
    text-decoration: none;
    border-top: 5px solid black;
    color: black;
    text-shadow: 0 0 3px white;
  }
`

const PResponse = styled.p`
  grid-column: 1 / span 3;
  text-align: center;
  margin: 0;
  padding: 0;
  align-self: end;
`

const FaLinkedinSquare1 = styled(FaLinkedinSquare)`
  color: #0077B5;
  border: 1px solid #0077B5;
  border-radius: 10%;
  box-shadow: 0px 3px 10px rgba(0,0,0,.25);
  margin: 2rem;

  &:hover {
    box-shadow: 0 0 20px #82DBFA;
  }
`

const FaInstagram1 = styled(FaInstagram)`
  color: white;
  border-radius: 10%;
  background: #d6249f;
  background: radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%);
  box-shadow: 0px 3px 10px rgba(0,0,0,.25);
  margin: 2rem;

  &:hover {
    box-shadow: 0 0 20px #82DBFA;
  }
`

export default Footer
