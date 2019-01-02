import React from 'react'
import styled from 'styled-components'
import { Div, Button } from '../assets/Matrix'

const Contact = () => (
  <Section1 id="Contact">
    <Div1>
      <Img1 src="https://i.imgur.com/nFAGd8s.jpg" />
      <P1 modifiers={['m0', 'fLarger']}>I would love to connect with you and</P1>
      <P1 modifiers={['m0', 'fLarger']}>always open to new opportunities!</P1>
      <br />
      <br />
      <P2 modifiers={['fTangerine', 'fSize2', 'm0']}>Derik Jones</P2>
      <P1 modifiers={['m0']}>Architectural Designer</P1>
    </Div1>
    <Div id="emailForm" modifiers={['tCenter']}>
      <Form1 id="contact-form" action="https://formspree.io/jonesderik91@gmail.com" method="POST">
        <Input1 className="hidden" type="hidden" name="From" value="derikjones.com" />
        <Input1 className="hidden" type="hidden" name="_gotcha" />
        <Input1 id="firstName" type="text" name="First Name" placeholder="First Name" required />
        <Input1 id="lastName" type="text" name="Last Name" placeholder="Last Name" required />
        <Input1 id="emailBox" type="email" name="Email" placeholder="Email" required />
        <Textarea1 id="messageBox" type="text" name="Message" placeholder="Message" required></Textarea1>
        <Button id="send" type="submit" value="Send">Send</Button>
      </Form1>
    </Div>
  </Section1>
)

const Section1 = styled.section`
  color: white;
  height: 90%;
  padding: 4rem 0;
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
  padding: 2rem;
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
const Input1 = styled.input`
  font-size: 1.6rem;
  width: 100%;
  padding: 0.5rem;
  border-radius: 5px;
  font-family: 'Crimson Text', serif;
  justify-self: center;
`
const Textarea1 = styled.textarea`
  font-size: 1.6rem;
  width: 100%;
  padding: 0.5rem;
  border-radius: 5px;
  font-family: 'Crimson Text', serif;
  justify-self: center;
`
const P1 = styled.p`
  margin: 0;
  font-size: 2rem;
  font-family: 'Crimson Text', serif;
`
const P2 = styled.p`
  font-size: 3rem;
  font-family: 'Tangerine', cursive;
  margin: 0;
`
export default Contact
