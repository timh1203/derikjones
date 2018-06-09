import React from 'react'
import styled from 'styled-components'
import FaLinkedinSquare from 'react-icons/lib/fa/linkedin-square';
import FaInstagram from 'react-icons/lib/fa/instagram'
import { Div, Img, H1, P, A } from '../assets/Matrix'

const Bio = () => (
  <Section1 id='Bio'>
    <Div>
      <Div1>
        <H1>Whatever good things we build end up building us.</H1>
        <P>-Jim Rohn</P>
      </Div1>

      <Div2>
        <Div3>
          <Img modifiers={['bRadius50', 'w50', 'borderBlack']} src='https://i.imgur.com/vxJq5Wl.jpg' />
          <Div>
            <A href='https://www.linkedin.com/in/derik-jones-b3722b102/'>
              <FaLinkedinSquare1 size={50} />
            </A>
            <A href='https://www.instagram.com/rad_jones_photography/'>
              <FaInstagram1 size={50} />
            </A>
          </Div>
        </Div3>
        <P1>
          I am an architectural designer with a strong passion for sustainability and innovation. My goal in Architecture and photography is to reveal the beauty in ordinary things. To show the detail and the unique aspects of life that may be missed when one isn't paying attention. To draw people in to not just see the world, but to experience it through my designs. To inspire others to go outside the box, to live, to explore, and to adventure.
        </P1>
      </Div2>
    </Div>
  </Section1>
)

const Section1 = styled.section`
  margin: 3rem 0;
`

const Div1 = styled.div`
  color: white;
  background: #333333;
  box-shadow: 0 3px 3px black;
  margin: 3rem 0;
  width: 50%;
  margin: 0 auto;
  text-align: center;
  padding: 0.1rem 0;
  border-radius: 15px;
`

const Div2 = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  margin: 3rem auto;
  text-align: center;
  align-items: center;
`

const Div3 = styled.div`
  width: 500px;
  border-right: 5px solid rgba(0, 0, 0, 0.2);
`

const P1 = styled.p`
  font-family: 'Crimson Text', serif;
  font-size: 1.5rem;
  text-align: left;
  width: 90%;
  justify-self: start;
`

const FaLinkedinSquare1 = styled(FaLinkedinSquare)`
  color: #0077B5;
  border: 1px solid #0077B5;
  border-radius: 10%;
  box-shadow: 0px 3px 10px rgba(0,0,0,.25);
  margin: 2rem;
`

const FaInstagram1 = styled(FaInstagram)`
  color: white;
  border-radius: 10%;
  background: #d6249f;
  background: radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%);
  box-shadow: 0px 3px 10px rgba(0,0,0,.25);
  margin: 2rem;
`

export default Bio
