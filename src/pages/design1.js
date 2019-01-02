import React from 'react'
import styled from 'styled-components'
import Nav2 from '../components/Nav2'
import { A } from '../assets/Matrix'
import { Layout } from '../components'

const Model1 = () => (
  <Layout>
    <Div1>
      <Nav2 />
      <H1a>Conceptual Design</H1a>
      <Hr1 />
      <A href="#">
        <Img1 src="https://i.imgur.com/XX6RFQc.jpg" alt="Design 1" />
      </A>
      <A href="#">
        <Button1>View Full Size</Button1>
      </A>
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
const Button1 = styled.button`
  width: 150px;
  border-radius: 5px;
  font-family: 'Crimson Text', serif;
  font-size: 1.6rem;
  padding: 0.5rem;
  margin: 0 auto;
  transition: all ease 0.2s;
  background: #82DBFA;
  border: 1px solid #333333;
  &:hover{
    color: white;
    background: #333333;
    border-radius: 10px;
    border: 1px solid #82BDFA;
    box-shadow: 0 0 5px #82DBFA;
  }
`

export default Model1
