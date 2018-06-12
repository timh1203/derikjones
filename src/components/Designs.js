import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import { Div, H1, P, P1, Img1 } from '../assets/Matrix'

const Designs = () => (
  <Div modifier={['py1']}>
    <P1>3d Designs</P1>
    <Div1>
      <Div modifiers={['pt3']}>
        <Link to="/design1">
          <Img1 modifiers={['w75']} src="https://i.imgur.com/7USkFg2.png" alt="design 1" />
        </Link>
        <H1>Teagarden</H1>
        <P>Illustrator Design & Photoshop</P>
      </Div>
      <Div modifiers={['pt3']}>
        <Link to="/design2">
          <Img1 modifiers={['w75']} src="https://i.imgur.com/yGY60ZS.png" alt="design 2" />
        </Link>
        <H1>Grand Villas-Hudson</H1>
        <P>Shetckup Design</P>
      </Div>
      <Div modifiers={['pt3']}>
        <Link to="/design3">
          <Img1 modifiers={['w75']} src="https://i.imgur.com/idFt6go.png" alt="design 3" />
        </Link>
        <H1>Middleway</H1>
        <P>Illustrator Design & Photoshop</P>
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

export default Designs
