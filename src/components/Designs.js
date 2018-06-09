import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import { Div, H1, P, Span, Img } from '../assets/Matrix'

const Designs = () => (
  <Div modifier={['py1']}>
    <P modifiers={['tCenter', 'ul', 'rotate5L', 'boxUp', 'm0A', 'w10', 'bGray', 'cWhite', 'bRadius5px']}>3d Design</P>
    <Div modifiers={['dFlex', 'fjcAround', 'tCenter']}>
      <Div modifiers={['pt3']}>
        <Link to='/model1'>
            <Img1 modifiers={['w75']} src='https://i.imgur.com/7USkFg2.png' alt='model 1' />
        </Link>
        <H1>Teagarden</H1>
        <P>Illustrator Design & Photoshop</P>
      </Div>
      <Div modifiers={['pt3']}>
        <Link to='/model2'>
          <Img1 modifiers={['w75']} src='https://i.imgur.com/yGY60ZS.png' alt='model 2' />
        </Link>
        <H1>Grand Villas-Hudson</H1>
        <P>Shetckup Design</P>
      </Div>
      <Div modifiers={['pt3']}>
        <Link to='/model3'>
          <Img1 modifiers={['w75']} src='https://i.imgur.com/idFt6go.png' alt='model 3' />
        </Link>
        <H1>Middleway</H1>
        <P>Illustrator Design & Photoshop</P>
      </Div>
    </Div>
  </Div>
)

const Img1 = styled(Img)`
  &:hover {
    filter: brightness(80%);
    box-shadow: 0 0 10px #82DBFA;
  }
`

export default Designs
