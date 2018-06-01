import React from 'react'
import Link from 'gatsby-link'
import Header from '../components/Header'
import Portfolio from '../components/Portfolio'
import Photos from '../components/Photos'
import Contact from '../components/Contact'
import { Wrapper, H1 } from '../assets/Matrix'

const IndexPage = () => (
  <Wrapper>
    <Header />
    <Portfolio />
    <Photos />
    <Contact />
  </Wrapper>
)

export default IndexPage
