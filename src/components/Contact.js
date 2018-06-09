import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import { Div, Form, Input, Textarea, Button, H1, H3, P, Img } from '../assets/Matrix'

const Contact = () => (
  <SectionResponse id='Contact'>
    <DivResponse>
      <Img1 src='https://i.imgur.com/nFAGd8s.jpg' />
      <P modifiers={['m0', 'fLarger']}>I would love to connect with you and</P>
      <P modifiers={['m0', 'fLarger']}>always open to new opportunities!</P>
      <br />
      <P modifiers={['fTangerine', 'fSize2', 'm0']}>Derik Jones</P>
      <P modifiers={['m0']}>Architectural Designer</P>
    </DivResponse>
    <Div id="emailForm"  modifiers={['tCenter']}>
        <FormResponse id="contact-form" action="https://formspree.io/jonesderik91@gmail.com" method="POST" method="POST">
          <Input className="hidden" type="hidden" name="From" value="derikjones.com" />
          <Input className="hidden" type="hidden" name="_gotcha" />
          <Input id="firstName" type="text" name="First Name" placeholder="First Name" required />                    
          <Input id="lastName" type="text" name="Last Name" placeholder="Last Name" required />
          <Input id="emailBox" type="email" name="Email" placeholder="Email" required />
          <Textarea id="messageBox" type="text" name="Message" placeholder="Message" required></Textarea>
          <Button id="send" type="submit" value="Send">Send</Button>
        </FormResponse>
    </Div>
  </SectionResponse>
)

const SectionResponse = styled.section`
  color: white;
  height: 70vh;
  background: no-repeat center center url('https://i.imgur.com/sgzH36g.png');
  background-size: cover;
  text-align: center;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-items: center;
  align-items: center;
`

const DivResponse = styled.div`
  background: rgba(0, 0, 0, 0.3);
  border-radius: 5% 30%;
`

const FormResponse = styled.form`
  display: grid;
  justify-content: center;
  grid-gap: 0.8rem;
`

const Img1 = styled.img`
  width: 25%;
  border-radius: 50%;
  border: 5px double white;
`

export default Contact
