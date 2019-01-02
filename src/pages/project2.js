import React from 'react'
import styled from 'styled-components'
import { Layout, Nav2 } from '../components'

const Project2 = () => (
  <Layout>
    <Div0>
      <Nav2 />
      <H1a>Brambleton Virginia</H1a>
      <Hr1 />
      <a href="https://i.imgur.com/yAUDSX7.png">
        <Img1 src="https://i.imgur.com/yAUDSX7.png" alt="Project 2a" />
      </a>
      <Hr1 />
      <a href="https://i.imgur.com/kuDcc5r.png">
        <Img1 src="https://i.imgur.com/kuDcc5r.png" alt="Project 2b" />
      </a>
      <Hr1 />
      <a href="https://i.imgur.com/bayjX8l.png">
        <Img1 src="https://i.imgur.com/bayjX8l.png" alt="Project 2c" />
      </a>
      <Hr1 />
      <a href="https://i.imgur.com/qezMAre.png">
        <Img1 src="https://i.imgur.com/qezMAre.png" alt="Project 2d" />
      </a>
      <Hr1 />
      <a href="https://i.imgur.com/Ip4YWK5.png">
        <Img1 src="https://i.imgur.com/Ip4YWK5.png" alt="Project 2e" />
      </a>
    </Div0>
  </Layout>
)

const Div0 = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 10px;
  text-align: center;
  padding: 0;
  margin-bottom: 6rem;
`
const H1a = styled.h1`
font-family: 'Crimson Text', serif;
margin-top: 2rem;
`
const Img1 = styled.img`
border-radius: 5px;
box-shadow: 0 3px 10px #cccccc;
width: 90%;
border-radius: 5px;
&:hover {
  filter: brightness(80%);
  box-shadow: 0 0 10px #82DBFA;
}
`
const Hr1 = styled.hr`
  height: 5px;
  background: #333333;
  border-radius: 50%;
  width: 30%;
  opacity: 0.3;
  margin: 2rem auto;
`

export default Project2
