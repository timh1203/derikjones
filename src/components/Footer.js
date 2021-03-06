import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'
import FaLinkedinSquare from 'react-icons/lib/fa/linkedin-square'
import FaInstagram from 'react-icons/lib/fa/instagram'

const Footer = () => (
  <Section1>
    <Div1>
      <Img1 src="https://i.imgur.com/SIMExmd.png" alt="logo" />
    </Div1>
    <Div2>
      <Link1 to="/#Portfolio">
        <P1>About</P1>
      </Link1>
      <Link1 to="/#Photos">
        <P1>Portfolio</P1>
      </Link1>
      <Link1 to="/#Contact">
        <P1>Contact</P1>
      </Link1>
    </Div2>
    <Div3>
      <a href="https://www.linkedin.com/in/derik-jones-b3722b102/" target="_blank">
        <FaLinkedinSquare1 size={45} />
      </a>
      <a href="https://www.instagram.com/rad_jones_photography/" target="_blank">
        <FaInstagram1 size={45} />
      </a>
    </Div3>

    <Div4>
      <P2>Copyright © 2019 Derik S. Jones</P2>
    </Div4>
  </Section1>
)

const Section1 = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr auto;
  justify-items: center;
  justify-content: center;
  align-items: center;
  color: white;
  background: #333333;
  text-align: center;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-areas:
      "logo"
      "nav"
      "social"
      "copyright"
  }
`
const Div1 = styled.div`
  grid-area: "logo";
`
const Div2 = styled.div`
  grid-area: "nav";
  display: grid;
  width: 100%;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  color: white;
  @media (max-width: 768px) {
    width: 70%;
    padding: 1rem;
    margin: 2rem 0;
  }
`
const Div3 = styled.div`
  grid-area: "social";
  @media (max-width: 768px) {
    margin: 1rem 0;
  }
`
const Div4 = styled.div`
  grid-area: "copyright";
  grid-column: 2 / span 1;
  @media (max-width: 768px) {
    grid-column: 1 / span 1;
  }
`
const Img1 = styled.img`
  width: 50%;
  display: grid;
  justify-self: center;
  margin: 0 auto;
  text-align: center;
  @media (max-width: 768px) {
    width: 70%;
  }
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
const P1 = styled.p`
  font-family: 'Crimson Text', serif;
  margin: 0;
  font-size: 2.4rem;
  padding-top: 1rem;
`
const P2 = styled.p`
  font-size: 1.6rem;
  padding-bottom: 0.4rem;
  text-align: center;
  grid-column: 1 / span 3;
  margin: 0;
  align-self: end;
  @media (max-width: 768px) {
    margin: 1rem 0;
  }
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
  @media (max-width: 768px) {
    margin: 0 1rem;
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
  @media (max-width: 768px) {
    margin: 0 1rem;
  }
`

export default Footer
