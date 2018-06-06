import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import { Div, Form, Input, Textarea, H1, H3, Img } from '../assets/Matrix'

const Contact = () => (
  <SectionResponse id='Contact'>
    <Div>
      <Img modifiers={['bRadius50', 'w25', 'borderWhite']} src='https://i.imgur.com/vxJq5Wl.jpg' />
      <H1>I would love to connect with you.</H1>
      <H1>Always open to new opportunities!</H1>
    </Div>
    <Div id="emailForm"  modifiers={['tCenter']}>
        <FormResponse id="contact-form" action="https://formspree.io/jonesderik91@gmail.com" method="POST" method="POST">
          <Input className="hidden" type="hidden" name="From" value="derikjones.com" />
          <Input className="hidden" type="hidden" name="_gotcha" />
          <Input id="firstName" type="text" name="First Name" placeholder="First Name" required />                    
          <Input id="lastName" type="text" name="Last Name" placeholder="Last Name" required />
          <Input id="emailBox" type="email" name="Email" placeholder="Email" required />
          <Textarea id="messageBox" type="text" name="Message" placeholder="Message" required></Textarea>
          <Input id="send" type="submit" value="Send" />
        </FormResponse>
    </Div>
  </SectionResponse>
)

const SectionResponse = styled.section`
  color: white;
  height: 50vh;
  background: no-repeat center center url('https://i.imgur.com/sgzH36g.png');
  background-size: cover;
  text-align: center;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-items: center;
  align-items: center;
`

const FormResponse = styled.form`
  display: grid;
  justify-content: center;
  grid-gap: 0.8rem;
`

export default Contact
