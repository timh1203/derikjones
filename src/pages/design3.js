import React from 'react'
import styled from 'styled-components'
import Nav2 from '../components/Nav2'
import { Wrapper, H1, Img, A, Hr1 } from '../assets/Matrix'

const Model3 = () => (
  <Wrapper1>
    <Nav2 />
    <H1>Middleway</H1>
    <Hr1 />
    <A href="https://i.imgur.com/idFt6go.png">
      <Img modifiers={['w90']} src="https://i.imgur.com/idFt6go.png" alt="Design 3" />
    </A>
  </Wrapper1>
)

const Wrapper1 = styled(Wrapper)`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 10px;
  text-align: center;
  padding: 0;
  margin-bottom: 3rem;
`

export default Model3
