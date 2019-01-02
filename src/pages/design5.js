import React from 'react'
import styled from 'styled-components'
import { Layout, Nav2 } from '../components'

const Design5 = () => (
  <Layout>
    <Div1>
      <Nav2 />
      <H1a>Grand Villas-Hudson</H1a>
      <Hr1 />
      <a href="https://i.imgur.com/yGY60ZS.png" target="_blank">
        <Img1 src="https://i.imgur.com/yGY60ZS.png" alt="Design 5" />
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
  &:hover {
    filter: brightness(80%);
    box-shadow: 0 0 10px #82DBFA;
  }
`

export default Design5
