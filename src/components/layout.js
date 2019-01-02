import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Helmet from 'react-helmet'
import Footer from '../components/Footer'
import { Container, Div } from '../assets/Matrix'
import styled, { createGlobalStyle } from 'styled-components'

const Layout = ({ children }) => (
  <StaticQuery
    query={
      graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `
    }
    render={data => (
      <>
        <Container>
          <Helmet
            title={data.site.siteMetadata.title}
            meta={[
              { name: 'description', content: 'Portfolio' },
              { name: 'keywords', content: 'Architect, Site' },
            ]}
          >
          </Helmet>
          <Div>
            {children}
            <Footer />
          </Div>
          <GlobalStyles />
        </Container>
      </>
    )}
  />
)

const GlobalStyles = createGlobalStyle`
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: inherit;
    vertical-align: baseline;
  }
  html, body {
    /* max-width: 1024px; */
    width: 100%;
    margin: 0 auto;
    font-size: 62.5%;
    text-align: center;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  section {
    margin-top: 5rem;
  }
  h1 {
    font-size: 2.4rem;
  }
  p {
    font-size: 1.2rem;
  }
`

export default Layout