import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import FaLinkedinSquare from 'react-icons/lib/fa/linkedin-square';
import FaInstagram from 'react-icons/lib/fa/instagram'
import { Section, Div, Img, H1, P, A } from '../assets/Matrix'

const Bio = () => (
  <Section id='Bio'>
    <Div modifiers={['w50', 'm0A', 'tCenter']}>
      <DivResponse>
        <H1>Whatever good things we build end up building us.</H1>
        <P>-Jim Rohn</P>
      </DivResponse>
      <Img modifiers={['bRadius50', 'w25', 'borderBlack']} src='https://i.imgur.com/vxJq5Wl.jpg' />
      <PResponse>
        I am an architectural designer with a strong passion for sustainability and innovation. My goal in Architecture and photography is to reveal the beauty in ordinary things. To show the detail and the unique aspects of life that may be missed when one isn't paying attention. To draw people in to not just see the world, but to experience it through my designs. To inspire others to go outside the box, to live, to explore, and to adventure.
      </PResponse>
      
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
    </Div>
  </Section>
)

const DivResponse = styled.div`
  background: rgba(0, 0, 0, 0.2);
  box-shadow: 0 3px 3px black;
  margin: 3rem 0;
`

const PResponse = styled.p`
  font-family: 'Crimson Text', serif;
  font-size: 1.5rem;
`
export default Bio
