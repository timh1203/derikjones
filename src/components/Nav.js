import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

const Nav = () => (
  <Div1>
    <Link to='/'>
      <Img1 src="https://i.imgur.com/SIMExmd.png" alt="logo" />
    </Link>

    <Div2>
      <Link1 to="/#Portfolio">
        <H11>Portfolio</H11>
      </Link1>
      <Link1 to="/#Photos">
        <H11>Photos</H11>
      </Link1>
      <Link1 to="/#Contact">
        <H11>Contact</H11>
      </Link1>
    </Div2>
  </Div1>
)

const Div1 = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-flow: column;
  width: 100%;
`

const Div2 = styled.div`
  display: grid;
  justify-items: end;
  padding-right: 1rem;
  margin: 1rem 0;
`

const Img1 = styled.img`
  width: 20%;
  margin: 1rem;
`

const Link1 = styled(Link)`
  color: white;
  font-size: 0.8rem;
  text-decoration: none;
  border-right: 5px solid white;
  padding: 0.2rem;
  
  &:hover {
    text-decoration: none;
    border-right: 5px solid black;
    color: black;
    text-shadow: 0 0 3px white;
  }
`

const H11 = styled.h1`
  font-family: 'Crimson Text', serif;
  margin: 0;
`

export default Nav
