import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'

const Nav2 = () => (
  <Div1>
    <Div2>
      <Link to="/">
        <Img1 src="https://i.imgur.com/SIMExmd.png" alt="logo" />
      </Link>
    </Div2>
    <Div3>
      <Link1 to="/#About">
        <H1a>About</H1a>
      </Link1>
      <Link1 to="/#Portfolio">
        <H1a>Portfolio</H1a>
      </Link1>
      <Link1 to="/#Contact">
        <H1a>Contact</H1a>
      </Link1>
    </Div3>
  </Div1>
)

const Div1 = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-flow: column;
  width: 100%;
  align-content: space-between;
  background: #333333;
  margin: 0;
  @media (max-width: 768px) {
    grid-auto-flow: rows;
    justify-items: center;
    grid-template-areas:
      "logo"
      "nav"
  }
`
const Div2 = styled.div`
  grid-area: 'logo';
  justify-self: start;
  align-self: center;
  @media (max-width: 768px) {
    justify-self: center;
  }
`
const Div3 = styled.div`
  grid-area: 'nav';
  display: grid;
  justify-items: end;
  padding-right: 2rem;
  margin: 2rem 0;
  @media (max-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    justify-items: center;
    justify-content: space-between;
    width: 90%;
    padding-right: 0;
    margin: 0;
  }
`
const Img1 = styled.img`
  width: 60%;
  margin: 1rem;

  @media (max-width: 768px) {
    width: 75%;
  }
`
const Link1 = styled(Link)`
  color: white;
  font-size: 0.8rem;
  text-decoration: none;
  border-right: 5px solid white;
  padding: 1rem;
  &:hover {
    text-decoration: none;
    border-right: 5px solid black;
    color: black;
    text-shadow: 0 0 3px white;
  }
  @media (max-width: 768px) {
    width: 100%;
    border-top: 5px solid white;
    border-right: none;
    &:hover {
      color: black;
      border-top: 5px solid black;
      border-right: none;
      text-shadow: 0 0 3px white;
    }
  }
`
const H1a = styled.h1`
  font-family: 'Crimson Text', serif;
  font-size: 2.4rem;
  margin: 0;
`

export default Nav2
