import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Container, Body, Div } from '../assets/Matrix'

const Layout = ({ children, data }) => (
  <Container modifiers={['m0', 'p0']}>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Portfolio' },
        { name: 'keywords', content: 'Architect, Site' },
      ]}
    >
      <body style='margin: 0;'></body>
    </Helmet>
    <Div modifiers={['m0', 'p0']}>
      {children()}
      <Footer />
    </Div>
  </Container>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
