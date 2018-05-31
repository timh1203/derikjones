import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import { Container, Div } from '../assets/Matrix'

const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Portfolio' },
        { name: 'keywords', content: 'Architect, Site' },
      ]}
    />
    <Div modifiers={['mt2R', 'tCenter']}>
      <Nav />
      {children()}
      <Footer />
    </Div>
  </div>
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
