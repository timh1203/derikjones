import React from 'react'
import styled from 'styled-components'
import Nav2 from '../components/Nav2'
import { Wrapper, H1, Img, A } from '../assets/Matrix'

const Project3 = () => (
  <Wrapper1>
    <Nav2 />
    <H1>Leesburg South</H1>
    <A href='https://i.imgur.com/qXkvDah.png'>
      <Img modifiers={['w100']} src='https://i.imgur.com/qXkvDah.png' alt='Picture 3a' />
    </A>
    <A href='https://i.imgur.com/WMBCRUA.png'>
      <Img modifiers={['w100']} src='https://i.imgur.com/WMBCRUA.png' alt='Picture 3b' />
    </A>
    <A href='https://i.imgur.com/WZQFqp7.png'>
      <Img modifiers={['w100']} src='https://i.imgur.com/WZQFqp7.png' alt='Picture 3c' />
    </A>

    <A href='https://i.imgur.com/78iC8wJ.png'>
      <Img modifiers={['w100']} src='https://i.imgur.com/78iC8wJ.png' alt='Picture 3d' />
    </A>

    <A href='https://i.imgur.com/sAa9vNG.png'>
      <Img modifiers={['w100']} src='https://i.imgur.com/sAa9vNG.png' alt='Picture 3e' />
    </A>
  </Wrapper1>
)

const Wrapper1 = styled(Wrapper)`
  @media (max-width: 768px) {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 20px;
    width: 90%;
    text-align: center;
    margin: 0 auto;
  }
`

export default Project3
