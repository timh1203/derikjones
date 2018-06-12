import React from 'react'
import styled from 'styled-components'
import { Div, Input, Textarea, Button, P } from '../assets/Matrix'

const Contact = () => (
  <Section1 id="Contact">
    <Div1>
      <Img1 src="https://i.imgur.com/nFAGd8s.jpg" />
      <P modifiers={['m0', 'fLarger']}>I would love to connect with you and</P>
      <P modifiers={['m0', 'fLarger']}>always open to new opportunities!</P>
      <br />
      <P modifiers={['fTangerine', 'fSize2', 'm0']}>Derik Jones</P>
      <P modifiers={['m0']}>Architectural Designer</P>
    </Div1>
    <Div id="emailForm" modifiers={['tCenter']}>
      <Form1 id="contact-form" action="https://formspree.io/jonesderik91@gmail.com" method="POST">
        <Input className="hidden" type="hidden" name="From" value="derikjones.com" />
        <Input className="hidden" type="hidden" name="_gotcha" />
        <Input id="firstName" type="text" name="First Name" placeholder="First Name" required />
        <Input id="lastName" type="text" name="Last Name" placeholder="Last Name" required />
        <Input id="emailBox" type="email" name="Email" placeholder="Email" required />
        <Textarea id="messageBox" type="text" name="Message" placeholder="Message" required></Textarea>
        <Button id="send" type="submit" value="Send">Send</Button>
      </Form1>
    </Div>
  </Section1>
)

const Section1 = styled.section`
  color: white;
  height: 90%;
  padding: 3rem 0;
  background: no-repeat center center url('https://i.imgur.com/sgzH36g.png');
  background-size: cover;
  text-align: center;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-items: center;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr auto;
    align-items: center;
    align-content: center;
  }
`

const Div1 = styled.div`
  background: rgba(0, 0, 0, 0.3);
  border-radius: 10px 150px;
  padding: 1rem;

  @media (max-width: 375px) {
    margin: 1rem;
  }
`

const Form1 = styled.form`
  display: grid;
  justify-content: center;
  grid-gap: 0.8rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

const Img1 = styled.img`
  width: 25%;
  border-radius: 50%;
  border: 5px double white;

  @media (max-width: 375px) {
    width: 50%;
  }
`

export default Contact
