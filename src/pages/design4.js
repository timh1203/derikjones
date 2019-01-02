import React from 'react'
import styled from 'styled-components'
import { Layout, Nav2 } from '../components'

const Design4 = () => (
  <Layout>
    <Div1>
      <Nav2 />
      <H1a>Teagarden</H1a>
      <Hr1 />
      <a href="https://i.imgur.com/7USkFg2.png" target="_blank">
        <Img1 src="https://i.imgur.com/7USkFg2.png" alt="Design 4a" />
      </a>
      <Hr1 />
      <a href="https://i.imgur.com/xqWKo4i.png" target="_blank">
        <Img1 src="https://i.imgur.com/xqWKo4i.png" alt="Design 4b" />
      </a>
      <Hr1 />
      <a href="https://i.imgur.com/orBwsPV.png" target="_blank">
        <Img1 src="https://i.imgur.com/orBwsPV.png" alt="Design 4c" />
      </a>
      <Hr1 />
      <a href="https://i.imgur.com/fsVRlCd.png" target="_blank">
        <Img1 src="https://i.imgur.com/fsVRlCd.png" alt="Design 4d" />
      </a>
      <Hr1 />
      <a href="https://i.imgur.com/w4AMGWT.png" target="_blank">
        <Img1 src="https://i.imgur.com/w4AMGWT.png" alt="Design 4e" />
      </a>
    </Div1>
  </Layout>
)

const Div1 = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 10px;
  text-align: center;
  padding-top: 0;
  margin-bottom: 6rem;
`
const H1a = styled.h1`
  font-family: 'Crimson Text', serif;
  margin-top: 2rem;
`
const Hr1 = styled.hr`
  height: 5px;
  background: #333333;
  border-radius: 50%;
  width: 30%;
  opacity: 0.3;
  margin: 2rem auto;
`
const Img1 = styled.img`
  width: 90%;
  border-radius: 5px;
  box-shadow: 0 3px 10px #cccccc;
`

export default Design4
