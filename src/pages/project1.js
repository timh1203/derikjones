import React from 'react'
import styled from 'styled-components'
import Nav2 from '../components/Nav2'
import { Wrapper, H1, Img, A } from '../assets/Matrix'

const Project1 = () => (
  <Wrapper1>
    <Nav2 />
    <H1>Brambleton Virginia</H1>
    <A href='https://i.imgur.com/k0dZG6j.png'>
      <Img modifiers={['w100']} src='https://i.imgur.com/k0dZG6j.png' alt='Picture 1a' />
    </A>
    <A href='https://i.imgur.com/KH1RVYo.png'>
      <Img modifiers={['w100']} src='https://i.imgur.com/KH1RVYo.png' alt='Picture 1b' />
    </A>
    <A href='https://i.imgur.com/kSJ8FNr.png'>
      <Img modifiers={['w100']} src='https://i.imgur.com/kSJ8FNr.png' alt='Picture 1c' />
    </A>
    <A href='https://i.imgur.com/UMxNqnL.png'>
      <Img modifiers={['w100']} src='https://i.imgur.com/UMxNqnL.png' alt='Picture 1d' />
    </A>
    <A href='https://i.imgur.com/CiI7YQQ.png'>
      <Img modifiers={['w100']} src='https://i.imgur.com/CiI7YQQ.png' alt='Picture 1e' />
    </A>
    <A href='https://i.imgur.com/njUsFBN.png'>
      <Img modifiers={['w100']} src='https://i.imgur.com/njUsFBN.png' alt='Picture 1f' />
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

export default Project1
