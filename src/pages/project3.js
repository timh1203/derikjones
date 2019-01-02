import React from 'react'
import styled from 'styled-components'
import { Layout, Nav2 } from '../components'

const Project3 = () => (
  <Layout>
    <Div0>
      <Nav2 />
      <H1a>Leesburg South</H1a>
      <Hr1 />
      <a href="https://i.imgur.com/qXkvDah.png">
        <Img1 src="https://i.imgur.com/qXkvDah.png" alt="Project 3a" />
      </a>
      <Hr1 />
      <a href="https://i.imgur.com/WMBCRUA.png">
        <Img1 src="https://i.imgur.com/WMBCRUA.png" alt="Project 3b" />
      </a>
      <Hr1 />
      <a href="https://i.imgur.com/WZQFqp7.png">
        <Img1 src="https://i.imgur.com/WZQFqp7.png" alt="Project 3c" />
      </a>
      <Hr1 />
      <a href="https://i.imgur.com/78iC8wJ.png">
        <Img1 src="https://i.imgur.com/78iC8wJ.png" alt="Project 3d" />
      </a>
      <Hr1 />
      <a href="https://i.imgur.com/sAa9vNG.png">
        <Img1 src="https://i.imgur.com/sAa9vNG.png" alt="Project 3e" />
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

export default Project3
