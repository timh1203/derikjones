import React from 'react'
import styled from 'styled-components'
import Nav2 from '../components/Nav2'
import { Wrapper, H1, Img, A, Hr1 } from '../assets/Matrix'

const Project1 = () => (
  <Wrapper1>
    <Nav2 />
    <H1>Brambleton Virginia</H1>
    <Hr1 />
    <A href='https://i.imgur.com/k0dZG6j.png'>
      <Img modifiers={['w90']} src='https://i.imgur.com/k0dZG6j.png' alt='Project 1a' />
    </A>
    <Hr1 />
    <A href='https://i.imgur.com/KH1RVYo.png'>
      <Img modifiers={['w90']} src='https://i.imgur.com/KH1RVYo.png' alt='Project 1b' />
    </A>
    <Hr1 />
    <A href='https://i.imgur.com/kSJ8FNr.png'>
      <Img modifiers={['w90']} src='https://i.imgur.com/kSJ8FNr.png' alt='Project 1c' />
    </A>
    <Hr1 />
    <A href='https://i.imgur.com/UMxNqnL.png'>
      <Img modifiers={['w90']} src='https://i.imgur.com/UMxNqnL.png' alt='Project 1d' />
    </A>
    <Hr1 />
    <A href='https://i.imgur.com/CiI7YQQ.png'>
      <Img modifiers={['w90']} src='https://i.imgur.com/CiI7YQQ.png' alt='Project 1e' />
    </A>
    <Hr1 />
    <A href='https://i.imgur.com/njUsFBN.png'>
      <Img modifiers={['w90']} src='https://i.imgur.com/QlX9DFn.png' alt='Project 1f' />
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

export default Project1
