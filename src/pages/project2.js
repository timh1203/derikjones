import React from 'react'
import styled from 'styled-components'
import Nav2 from '../components/Nav2'
import { Wrapper, H1, Img, A } from '../assets/Matrix'

const Project2 = () => (
  <Wrapper1>
    <Nav2 />
    <H1>Brambleton Virginia</H1>
    <A href='https://i.imgur.com/yAUDSX7.png'>
      <Img modifiers={['w100']} src='https://i.imgur.com/yAUDSX7.png' alt='Picture 2a' />
    </A>
    <A href='https://i.imgur.com/kuDcc5r.png'>
      <Img modifiers={['w100']} src='https://i.imgur.com/kuDcc5r.png' alt='Picture 2b' />
    </A>
    <A href='https://i.imgur.com/bayjX8l.png'>
      <Img modifiers={['w100']} src='https://i.imgur.com/bayjX8l.png' alt='Picture 2c' />
    </A>
    <A href='https://i.imgur.com/qezMAre.png'>
      <Img modifiers={['w100']} src='https://i.imgur.com/qezMAre.png' alt='Picture 2d' />
    </A>
    <A href='https://i.imgur.com/Ip4YWK5.png'>
      <Img modifiers={['w100']} src='https://i.imgur.com/Ip4YWK5.png' alt='Picture 2e' />
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

export default Project2
