import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import { Div, H1, P, Img } from '../assets/Matrix'

const Models = () => (
  <Div>
    <P modifiers={['tCenter', 'ul', 'rotate5L', 'boxUp', 'm0A', 'w10', 'm1A', 'bGray', 'cWhite']}>3d/Modeling</P>
    <Div modifiers={['dFlex', 'fjcAround', 'tCenter']}>
      <Div>
        <Link to='/model1'>
          <Img modifiers={['w75']} src='https://i.imgur.com/7USkFg2.png' alt='model 1' />
        </Link>
        <H1>Downtown Brambleton</H1>
        <P>Multi-Family</P>
      </Div>
      <Div>
        <Link to='/model2'>
          <Img modifiers={['w75']} src='https://i.imgur.com/yGY60ZS.png' alt='model 2' />
        </Link>
        <H1>Model 2 Title</H1>
        <P>Model 3 Description</P>
      </Div>
      <Div>
        <Link to='/model3'>
          <Img modifiers={['w75']} src='https://i.imgur.com/idFt6go.png' alt='model 3' />
        </Link>
        <H1>Model 3 Title</H1>
        <P>Model 3 Description</P>
      </Div>
    </Div>
  </Div>
)

export default Models
