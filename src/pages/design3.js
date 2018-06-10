import React from 'react'
import styled from 'styled-components'
import Nav2 from '../components/Nav2'
import { Wrapper, H1, Img, A } from '../assets/Matrix'

const Model3 = () => (
  <Wrapper1>
    <Nav2 />
    <H1>Middleway</H1>
    <A href='https://i.imgur.com/idFt6go.png'>
      <Img modifiers={['w100']} src='https://i.imgur.com/idFt6go.png' alt='Model 3' />
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

export default Model3
