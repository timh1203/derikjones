import React from 'react'
import styled from 'styled-components'
import Nav2 from '../components/Nav2'
import { Wrapper, H1, Img, A } from '../assets/Matrix'

const Model1 = () => (
  <Wrapper1>
    <Nav2 />
    <H1>Teagarden</H1>
      <A href='https://i.imgur.com/7USkFg2.png'>
        <Img modifiers={['w100']} src='https://i.imgur.com/7USkFg2.png' alt='Model 1a' />
      </A>
    <A href='https://i.imgur.com/xqWKo4i.png'>
      <Img modifiers={['w100']} src='https://i.imgur.com/xqWKo4i.png' alt='Model 1b' />
    </A>
    <A href='https://i.imgur.com/orBwsPV.png'>
      <Img modifiers={['w100']} src='https://i.imgur.com/orBwsPV.png' alt='Model 1c' />
    </A>
    <A href='https://i.imgur.com/fsVRlCd.png'>
      <Img modifiers={['w100']} src='https://i.imgur.com/fsVRlCd.png' alt='Model 1d' />
    </A>
    <A href='https://i.imgur.com/w4AMGWT.png'>
      <Img modifiers={['w100']} src='https://i.imgur.com/w4AMGWT.png' alt='Model 1e' />
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

export default Model1
