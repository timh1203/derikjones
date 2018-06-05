import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import Nav from '../components/Nav'
import { Wrapper, H1, Img, A } from '../assets/Matrix'

const Model3 = () => (
  <Wrapper>
    <Nav />
    <H1>Model3</H1>
    <A href='https://i.imgur.com/idFt6go.png'>
      <Img modifiers={['w100']} src='https://i.imgur.com/idFt6go.png' alt='Model 3' />
    </A>
  </Wrapper>
)

export default Model3
