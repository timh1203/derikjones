import React from 'react'
import styled from 'styled-components'
import Nav2 from '../components/Nav2'
import { Wrapper, H1, Img, A, Hr1 } from '../assets/Matrix'

const Model2 = () => (
  <Wrapper1>
    <Nav2 />
    <H1>Grand Villas-Hudson</H1>
    <Hr1 />
    <A href='https://i.imgur.com/yGY60ZS.png'>
      <Img modifiers={['w90']} src='https://i.imgur.com/yGY60ZS.png' alt='Design 2' />
    </A>
  </Wrapper1>
)

const Wrapper1 = styled(Wrapper)`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 20px;
  text-align: center;
  margin: 0 auto;
  padding: 0;
`

export default Model2
