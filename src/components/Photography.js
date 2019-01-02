import React from 'react'
import styled from 'styled-components'
import { Div, Span, P, A } from '../assets/Matrix'

const Photography = () => (
  <Div0>
    <P1>Photography</P1>
    <Div1>
      <Div2>
        <A href="https://i.imgur.com/7RHSjUt.jpg" target="_blank">
          <Img1 src="https://i.imgur.com/7RHSjUt.jpg" alt="Photo 1" />
        </A>
        <P2>
          1 <Span className="icons">💬</Span> | <Span className="icons">❤️</Span> 40
        </P2>
        <P2 modifiers={['w75', 'm0A']}>
          Copenhagen, A city rich in 17th century architecture!
        </P2>
      </Div2>
      <Div2>
        <A href="https://i.imgur.com/IYWrU1k.jpg" target="_blank">
          <Img1 src="https://i.imgur.com/IYWrU1k.jpg" alt="Photo 2" />
        </A>
        <P2>
          3 <Span className="icons">💬</Span> | <Span className="icons">❤️</Span> 33
        </P2>
        <P2 modifiers={['w75', 'm0A']}>
          Gamla Linkoping Open Air-Market
        </P2>
      </Div2>
      <Div2>
        <A href="https://i.imgur.com/fIpzycI.jpg" target="_blank">
          <Img1 src="https://i.imgur.com/fIpzycI.jpg" alt="Photo 3" />
        </A>
        <P2>
          1 <Span className="icons">💬</Span> | <Span className="icons">❤️</Span> 45
        </P2>
        <P2 modifiers={['w75', 'm0A']}>
          Historic buildings are true works of art- look at the detail in this church's ceiling!
        </P2>
      </Div2>
    </Div1>
  </Div0>
)

const Div0 = styled.div`
  padding: 1.5rem 0;
  width: 90%;
  margin: 0 auto;
`
const Div1 = styled(Div)`
  display: grid;
  text-align: center;
  justify-content: center;
  grid-template-columns: repeat(3, 1fr);

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`
const Div2 = styled.div`
  padding-top: 3rem 0;
`
const P1 = styled.p`
  font-family: 'Crimson Text', serif;
  font-size: 1.6rem;
  padding: 0.4rem 0;
  text-align: center;
  text-decoration: underline;
  transform: rotate(-5deg);
  border: 1px solid black;
  margin: 0 auto;
  margin-bottom: 4rem;
  background: #333333;
  color: white;
  border-radius: 5px;
  width: 10%;
  @media (max-width: 768px) {
    width: 18%;
    font-size: 1.4rem;
  }
  @media (max-width: 376px) {
    width: 40%;
  }
`
const P2 = styled.p`
  font-family: 'Crimson Text', serif;
  font-size: 1.6rem;
  margin: 0 auto;
  margin-bottom: 2rem;
  width: 75%;
`
const Img1 = styled.img`
  width: 75%;
  margin-bottom: 2rem;
  &:hover {
    filter: brightness(80%);
    box-shadow: 0 0 10px #82DBFA;
  }
  @media (max-width: 376px) {
    width: 90%;
  }
`

export default Photography
