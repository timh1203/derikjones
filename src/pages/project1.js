import React from 'react'
import styled from 'styled-components'
import { Layout, Nav2 } from '../components'

const Project1 = () => (
  <Layout>
    <Div0>
      <Nav2 />
      <H1a>Brambleton Virginia</H1a>
      <Hr1 />
      <a href="https://i.imgur.com/k0dZG6j.png">
        <Img1 src="https://i.imgur.com/k0dZG6j.png" alt="Project 1a" />
      </a>
      <Hr1 />
      <a href="https://i.imgur.com/KH1RVYo.png">
        <Img1 src="https://i.imgur.com/KH1RVYo.png" alt="Project 1b" />
      </a>
      <Hr1 />
      <a href="https://i.imgur.com/kSJ8FNr.png">
        <Img1 src="https://i.imgur.com/kSJ8FNr.png" alt="Project 1c" />
      </a>
      <Hr1 />
      <a href="https://i.imgur.com/UMxNqnL.png">
        <Img1 src="https://i.imgur.com/UMxNqnL.png" alt="Project 1d" />
      </a>
      <Hr1 />
      <a href="https://i.imgur.com/CiI7YQQ.png">
        <Img1 src="https://i.imgur.com/CiI7YQQ.png" alt="Project 1e" />
      </a>
      <Hr1 />
      <a href="https://i.imgur.com/njUsFBN.png">
        <Img1 src="https://i.imgur.com/QlX9DFn.png" alt="Project 1f" />
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

export default Project1
