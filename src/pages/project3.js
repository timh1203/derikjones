import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import Nav from '../components/Nav'
import { Wrapper, Div, H1, Img, A } from '../assets/Matrix'

const Project3 = () => (
  <Wrapper>
    <Nav />
    <H1>Project3</H1>
    <A href='https://i.imgur.com/WMBCRUA.png'>
      <Img modifiers={['w100']} src='https://i.imgur.com/WMBCRUA.png' alt='Picture 3b' />
    </A>
    
    <A href='https://i.imgur.com/qXkvDah.png'>
      <Img modifiers={['w100']} src='https://i.imgur.com/qXkvDah.png' alt='Picture 3a' />
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
  </Wrapper>
)

export default Project3
