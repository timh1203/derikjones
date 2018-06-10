import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

const Nav2 = () => (
  <Div1>
    <Div2>
      <Link to='/'>
        <Img1 src="https://i.imgur.com/5x6n6r3.png" alt="logo" />
      </Link>
    </Div2>

    <Div3>
      <Link1 to="/#About">
        <H11>About</H11>
      </Link1>
      <Link1 to="/#Portfolio">
        <H11>Portfolio</H11>
      </Link1>
      <Link1 to="/#Contact">
        <H11>Contact</H11>
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

  @media (max-width: 768px) {
    justify-self: center;
  }
`

const Div3 = styled.div`
  grid-area: 'nav';
  display: grid;
  justify-items: end;
  padding-right: 1rem;
  margin: 1rem 0;

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
  color: black;
  font-size: 0.8rem;
  text-decoration: none;
  border-right: 5px solid black;
  padding: 0.2rem;
  
  &:hover {
    text-decoration: none;
    border-right: 5px solid #82DBFA;
    color: black;
    text-shadow: 0 0 2px #82DBFA;
  }

  @media (max-width: 768px) {
    width: 100%;
    border-top: 5px solid black;
    border-right: none;

    &:hover {
      border-top: 5px solid #82DBFA;
      border-right: none;
      text-shadow: 0 0 2px #82DBFA;
    }
  }
`

const H11 = styled.h1`
  font-family: 'Crimson Text', serif;
  margin: 0;
`

export default Nav2
