import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import { Div, Form, Input, Textarea, H1 } from '../assets/Matrix'

const Contact = () => (
  <SectionResponse id='Contact'>
    <H1>Contact Section</H1>
    <Div id="emailForm"  modifiers={['tCenter']}>
        <Form id="contact-form" modifiers={['dFlex', 'fColumn', 'w50', 'm0A']} action="https://formspree.io/jonesderik91@gmail.com" method="POST" method="POST">
          <Input className="hidden" type="hidden" name="From" value="derikjones.com" />
          <Input className="hidden" type="hidden" name="_gotcha" />
          <Input id="firstName" type="text" name="First Name" placeholder="First Name" required />                    
          <Input id="lastName" type="text" name="Last Name" placeholder="Last Name" required />
          <Input id="emailBox" type="email" name="Email" placeholder="Email" required />
          <Textarea id="messageBox" type="text" name="Message" placeholder="Message" required></Textarea>
          <Input id="send" type="submit" value="Send" />
        </Form>
    </Div>
  </SectionResponse>
)

const SectionResponse = styled.section`
  color: white;
  height: 50vh;
  background: no-repeat center center url('https://i.imgur.com/sgzH36g.png');
  background-size: cover;
`

export default Contact
