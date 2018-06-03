import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import FaLinkedinSquare from 'react-icons/lib/fa/linkedin-square';
import FaInstagram from 'react-icons/lib/fa/instagram'
import { Section, Div, Img, H1, P } from '../assets/Matrix'

const Footer = () => (
  <Section>
    <H1>Bio Section</H1>

    <Div modifiers={['w50', 'm0A', 'tCenter']}>
      <Img modifiers={['bRadius50', 'w25', 'borderBlack']} src='http://derikjones.com/static/derikjones.14076d66.jpg' />
      <P>
        I am an architectural designer with a strong passion for sustainability and innovation. My goal in Architecture and photography is to reveal the beauty in ordinary things. To show the detail and the unique aspects of life that may be missed when one isn't paying attention. To draw people in to not just see the world, but to experience it through my designs. To inspire others to go outside the box, to live, to explore, and to adventure.
      </P>
      
      <Div modifiers={['tCenter']}>
        <FaLinkedinSquare 
          style={{
            color: '#0077B5',
            border: '1px solid #0077B5',
            borderRadius: '10%',
            boxShadow: '0px 3px 10px rgba(0,0,0,.25)'
          }} 
          size={50} 
        />
        <FaInstagram 
          style={{
            color: 'white',
            borderRadius: '10%',
            background: '#d6249f',
            background: 'radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%)',
            boxShadow: '0px 3px 10px rgba(0,0,0,.25)'
          }}
          size={50}
        />
      </Div>
    </Div>
  </Section>
)

export default Footer
