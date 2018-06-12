import React from 'react'
import styled from 'styled-components'
import Nav2 from '../components/Nav2'
import { Wrapper, H1, Img, A, Hr1 } from '../assets/Matrix'

const Project3 = () => (
  <Wrapper1>
    <Nav2 />
    <H1>Leesburg South</H1>
    <Hr1 />
    <A href="https://i.imgur.com/qXkvDah.png">
      <Img modifiers={['w90']} src="https://i.imgur.com/qXkvDah.png" alt="Project 3a" />
    </A>
    <Hr1 />
    <A href="https://i.imgur.com/WMBCRUA.png">
      <Img modifiers={['w90']} src="https://i.imgur.com/WMBCRUA.png" alt="Project 3b" />
    </A>
    <Hr1 />
    <A href="https://i.imgur.com/WZQFqp7.png">
      <Img modifiers={['w90']} src="https://i.imgur.com/WZQFqp7.png" alt="Project 3c" />
    </A>
    <Hr1 />
    <A href="https://i.imgur.com/78iC8wJ.png">
      <Img modifiers={['w90']} src="https://i.imgur.com/78iC8wJ.png" alt="Project 3d" />
    </A>
    <Hr1 />
    <A href="https://i.imgur.com/sAa9vNG.png">
      <Img modifiers={['w90']} src="https://i.imgur.com/sAa9vNG.png" alt="Project 3e" />
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

export default Project3
