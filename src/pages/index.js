import React from 'react'
import Link from 'gatsby-link'
import Portfolio from '../components/Portfolio'
import Photos from '../components/Photos'
import Contact from '../components/Contact'
import { Wrapper, H1 } from '../assets/Matrix'

const IndexPage = () => (
  <Wrapper>
    <Portfolio />
    <Photos />
    <Contact />
  </Wrapper>
)

export default IndexPage
