import React from 'react'
import styled from 'styled-components'
import FaLinkedinSquare from 'react-icons/lib/fa/linkedin-square'
import FaInstagram from 'react-icons/lib/fa/instagram'

const About = () => (
  <Section1 id="About">
    <Div1>
      <Div2>
        <H1a>Whatever good things we build end up building us.</H1a>
        <P1>- Jim Rohn</P1>
      </Div2>
      <Div3>
        <Div4>
          <Img1 src="https://i.imgur.com/vxJq5Wl.jpg" />
          <div>
            <a href="https://www.linkedin.com/in/derik-jones-b3722b102/" target="_blank">
              <FaLinkedinSquare1 size={45} />
            </a>
            <a href="https://www.instagram.com/rad_jones_photography/" target="_blank">
              <FaInstagram1 size={45} />
            </a>
          </div>
        </Div4>
        <P2>
          I am an architectural designer with a strong passion for sustainability and innovation. My goal in Architecture and photography is to reveal the beauty in ordinary things. To show the detail and the unique aspects of life that may be missed when one isn't paying attention. To draw people in to not just see the world, but to experience it through my designs. To inspire others to go outside the box, to live, to explore, and to adventure.
        </P2>
      </Div3>
    </Div1>
  </Section1>
)

const Section1 = styled.section`
  margin: 4rem 0;
`
const Div1 = styled.div`
  @media (max-width: 768px) {
    grid-auto-flow: rows;
    justify-content: center;
    grid-template-areas:
      'quote'
      'bio'
  }
`
const Div2 = styled.div`
  grid-area: 'quote';
  color: white;
  background: #333333;
  box-shadow: 0 3px 3px black;
  margin: 4rem 0;
  width: 50%;
  margin: 0 auto;
  text-align: center;
  padding: 1.4rem 0;
  border-radius: 15px;
  @media (max-width: 768px) {
    width: 70%;
  }
`
const Div3 = styled.div`
  grid-area: 'bio';
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  margin: 6rem auto;
  text-align: center;
  align-items: center;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-auto-flow: rows;
  }
`
const Div4 = styled.div`
  width: 70%;
  border-right: 5px solid rgba(0, 0, 0, 0.2);
  @media (max-width: 768px) {
    border: none;
  }
`
const H1a = styled.h1`
  font-family: 'Crimson Text', serif;
  padding: 1.4rem;
  `
const P1 = styled.p`
  font-family: 'Crimson Text', serif;
  padding: 1.4rem;
  font-size: 1.8rem;
`
const P2 = styled.p`
  font-family: 'Crimson Text', serif;
  font-size: 2.4rem;
  line-height: 1.4;
  text-align: left;
  justify-self: start;
  width: 90%;
  @media (max-width: 768px) {
    justify-self: center;
    text-align: center;
    width: 60%;
  }
  @media (max-width: 400px) {
    width: 80%;
    font-size: 2rem;
  }
`
const Img1 = styled.img`
  border-radius: 50%;
  width: 50%;
  border: 5px double black;
  @media (max-width: 376px) {
    width: 70%;
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
  @media (max-width: 376px) {}
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

export default About
