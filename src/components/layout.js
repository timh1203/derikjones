import React from 'react'
// import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import './index.css'
import Footer from '../components/Footer'
import { Container, Div } from '../assets/Matrix'

const Layout = ({ children, data }) => (
  <Container>
    <Helmet
      // title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Portfolio' },
        { name: 'keywords', content: 'Architect, Site' },
      ]}
    >
    </Helmet>
    <Div>
      {children()}
      <Footer />
    </Div>
  </Container>
)

export default Layout

// export const query = graphql`
//   query SiteTitleQuery {
//     site {
//       siteMetadata {
//         title
//       }
//     }
//   }
// `
