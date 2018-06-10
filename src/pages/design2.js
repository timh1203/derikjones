import React from 'react'
import styled from 'styled-components'
import Nav2 from '../components/Nav2'
import { Wrapper, H1, Img, A } from '../assets/Matrix'

const Model2 = () => (
  <Wrapper1>
    <Nav2 />
    <H1>Grand Villas-Hudson</H1>
    <A href='https://i.imgur.com/yGY60ZS.png'>
      <Img modifiers={['w100']} src='https://i.imgur.com/yGY60ZS.png' alt='Model 2' />
    </A>
  </Wrapper1>
)

const Wrapper1 = styled(Wrapper)`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 20px;
  width: 90%;
  text-align: center;
  margin: 0 auto;
`

export default Model2