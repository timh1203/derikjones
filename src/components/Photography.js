import React from 'react'
import styled from 'styled-components'
import { Div, Span, P, P1, A, Img1 } from '../assets/Matrix'

const Photography = () => (
  <Div modifier={['py1']}>
    <P1>Photography</P1>
    <Div1>
      <Div modifiers={['pt3']}>
        <A href="https://i.imgur.com/7RHSjUt.jpg" target="_blank">
          <Img1 src="https://i.imgur.com/7RHSjUt.jpg" alt="Photo 1" />
        </A>
        <P>
          1 <Span className="icons">💬</Span>| <Span className="icons">❤️</Span> 40
        </P>
        <P modifiers={['w75', 'm0A']}>
          Copenhagen, A city rich in 17th century architecture!
        </P>
      </Div>
      <Div modifiers={['pt3']}>
        <A href="https://i.imgur.com/IYWrU1k.jpg" target="_blank">
          <Img1 src="https://i.imgur.com/IYWrU1k.jpg" alt="Photo 2" />
        </A>
        <P>
          3 <Span className="icons">💬</Span>| <Span className="icons">❤️</Span> 33
        </P>
        <P modifiers={['w75', 'm0A']}>
          Gamla Linkoping Open Air-Market
        </P>
      </Div>
      <Div modifiers={['pt3']}>
        <A href="https://i.imgur.com/fIpzycI.jpg" target="_blank">
          <Img1 src="https://i.imgur.com/fIpzycI.jpg" alt="Photo 3" />
        </A>
        <P>
          1 <Span className="icons">💬</Span>| <Span className="icons">❤️</Span> 45
        </P>
        <P modifiers={['w75', 'm0A']}>
          Historic buildings are true works of art- look at the detail in this church's ceiling!
        </P>
      </Div>
    </Div1>
  </Div>
)

const Div1 = styled(Div)`
  display: grid;
  text-align: center;
  justify-content: center;
  grid-template-columns: repeat(3, 1fr);

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

export default Photography
