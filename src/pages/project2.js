import React from 'react'
import styled from 'styled-components'
import Nav2 from '../components/Nav2'
import { Wrapper, H1, Img, A, Hr1 } from '../assets/Matrix'

const Project2 = () => (
  <Wrapper1>
    <Nav2 />
    <H1>Brambleton Virginia</H1>
    <Hr1 />
    <A href="https://i.imgur.com/yAUDSX7.png">
      <Img modifiers={['w90']} src="https://i.imgur.com/yAUDSX7.png" alt="Project 2a" />
    </A>
    <Hr1 />
    <A href="https://i.imgur.com/kuDcc5r.png">
      <Img modifiers={['w90']} src="https://i.imgur.com/kuDcc5r.png" alt="Project 2b" />
    </A>
    <Hr1 />
    <A href="https://i.imgur.com/bayjX8l.png">
      <Img modifiers={['w90']} src="https://i.imgur.com/bayjX8l.png" alt="Project 2c" />
    </A>
    <Hr1 />
    <A href="https://i.imgur.com/qezMAre.png">
      <Img modifiers={['w90']} src="https://i.imgur.com/qezMAre.png" alt="Project 2d" />
    </A>
    <Hr1 />
    <A href="https://i.imgur.com/Ip4YWK5.png">
      <Img modifiers={['w90']} src="https://i.imgur.com/Ip4YWK5.png" alt="Project 2e" />
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

export default Project2
