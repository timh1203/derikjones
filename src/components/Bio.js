import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import FaLinkedinSquare from 'react-icons/lib/fa/linkedin-square';
import FaInstagram from 'react-icons/lib/fa/instagram'
import { Section, Div, Img, H1, P, A } from '../assets/Matrix'

const Bio = () => (
  <Section id='Bio'>
    <Div>
      <DivResponse1>
        <H1>Whatever good things we build end up building us.</H1>
        <P>-Jim Rohn</P>
      </DivResponse1>

      <DivResponse2>
        <DivResponse3>
          <Img modifiers={['bRadius50', 'w50', 'borderBlack']} src='https://i.imgur.com/vxJq5Wl.jpg' />
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
        </DivResponse3>
        <PResponse>
          I am an architectural designer with a strong passion for sustainability and innovation. My goal in Architecture and photography is to reveal the beauty in ordinary things. To show the detail and the unique aspects of life that may be missed when one isn't paying attention. To draw people in to not just see the world, but to experience it through my designs. To inspire others to go outside the box, to live, to explore, and to adventure.
        </PResponse>
      </DivResponse2>
    </Div>
  </Section>
)

const DivResponse1 = styled.div`
  color: white;
  background: #333333;
  box-shadow: 0 3px 3px black;
  margin: 3rem 0;
  width: 50%;
  margin: 0 auto;
  text-align: center;
`

const DivResponse2 = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  justify-content: center;
  justify-items: center;
  margin: 3rem auto;
  text-align: center;
  align-items: center;
`

const DivResponse3 = styled.div`
  width: 500px;
`

const PResponse = styled.p`
  font-family: 'Crimson Text', serif;
  font-size: 1.5rem;
  padding: 4rem;
`
export default Bio
