import React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import { Layout, Header, About, Portfolio, Contact } from '../components/index.js'

const IndexPage = (props) => (
  <Layout>
    <Header />
    <About />
    <Portfolio />
    <Contact />
    {console.log(props.data.houseImage.childImageSharp.fluid)}
    {console.log(Img)}
  </Layout>
)

const Wrapper = styled.div`
  padding: 0;
`

export const pageQuery = graphql`
  query {
    houseImage: file(relativePath: { eq: "house.jpg"}) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    },
    townhouseImage: file(relativePath: { eq: "townhouse.jpg"}) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    },
    clubhouseImage: file(relativePath: { eq: "clubhouse.jpg"}) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default IndexPage
