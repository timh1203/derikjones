import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import Nav from '../components/Nav'
import { Wrapper, H1, Img, A } from '../assets/Matrix'

const Model2 = () => (
  <Wrapper>
    <Nav />
    <H1>Model2</H1>
    <A href='https://i.imgur.com/yGY60ZS.png'>
      <Img modifiers={['w100']} src='https://i.imgur.com/yGY60ZS.png' alt='Model 2' />
    </A>
  </Wrapper>
)

export default Model2
