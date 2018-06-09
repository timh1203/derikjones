import React from 'react'
import Header from '../components/Header'
import About from '../components/About'
import Portfolio from '../components/Portfolio'
import Contact from '../components/Contact'
import { Wrapper } from '../assets/Matrix'

const IndexPage = () => (
  <Wrapper modifiers={['p0']}>
    <Header />
    <About />
    <Portfolio />
    <Contact />
  </Wrapper>
)

export default IndexPage
