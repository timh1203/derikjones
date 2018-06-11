import React from 'react'
import styled from 'styled-components'
import Nav2 from '../components/Nav2'
import { Wrapper, H1, Img, A, Hr1 } from '../assets/Matrix'

const Model1 = () => (
  <Wrapper1>
    <Nav2 />
    <H1>Teagarden</H1>
    <Hr1 />
    <A modifiers={['w90']} href="https://i.imgur.com/7USkFg2.png">
      <Img src="https://i.imgur.com/7USkFg2.png" alt="Design 1a" />
    </A>
    <Hr1 />
    <A modifiers={['w90']} href="https://i.imgur.com/xqWKo4i.png">
      <Img src="https://i.imgur.com/xqWKo4i.png" alt="Design 1b" />
    </A>
    <Hr1 />
    <A modifiers={['w90']} href="https://i.imgur.com/orBwsPV.png">
      <Img src="https://i.imgur.com/orBwsPV.png" alt="Design 1c" />
    </A>
    <Hr1 />
    <A modifiers={['w90']} href="https://i.imgur.com/fsVRlCd.png">
      <Img src="https://i.imgur.com/fsVRlCd.png" alt="Design 1d" />
    </A>
    <Hr1 />
    <A modifiers={['w90']} href="https://i.imgur.com/w4AMGWT.png">
      <Img src="https://i.imgur.com/w4AMGWT.png" alt="Design 1e" />
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

export default Model1
