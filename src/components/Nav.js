import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

class Nav extends React.Component {
  constructor() {
    super()
    this.state = {
      menuActive: false,
    }
  }

  handleClick = (e) => {
    e.preventDefault()
    const { menuActive } = this.state
    this.setState({ menuActive: !menuActive })
  }

  render() {
    return (
      <Div1>
        <Link to='/'>
          <Img1 src="https://i.imgur.com/SIMExmd.png" alt="logo" />
        </Link>

        { this.state.menuActive ? (
          <Div2>
            <ButtonClose active={this.state.menuActive} onClick={(e) => this.handleClick(e)}>
              <Span2 active={this.state.menuActive}>X Menu</Span2>
            </ButtonClose>
            <Nav1 active={this.state.menuActive}>
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
            </Nav1>
          </Div2>
          )
          :
          (
          <Div2>
            <ButtonOpen active={this.state.menuActive} onClick={(e) => this.handleClick(e)}>
              <Span1 active={this.state.menuActive}>☰ Menu</Span1>
            </ButtonOpen>
          </Div2>
          )
        }
    
        {/* <Div2>
          <Link1 to="/#About">
            <H11>About</H11>
          </Link1>
          <Link1 to="/#Portfolio">
            <H11>Portfolio</H11>
          </Link1>
          <Link1 to="/#Contact">
            <H11>Contact</H11>
          </Link1>
        </Div2> */}
      </Div1>
    )
  }
}

const Div1 = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-flow: column;
  width: 100%;
`

const Div2 = styled.div`
  display: grid;
`

const Div3 = styled.div`
  display: grid;
  justify-items: end;
  padding-right: 1rem;
  margin: 1rem 0;
`

const Nav1 = styled.nav``

const ButtonOpen = styled.button`
  max-height: 30%;
  border-radius: 5px;
  font-family: 'Crimson Text', serif;
  font-size: 1rem;
  padding: 0.5rem;
  transition: all ease 0.2s;

  &:hover{
    color: white;
    background: #333333;
    border-radius: 10px;
    border: 1px solid #82BDFA;
    box-shadow: 0 0 5px #82DBFA;
  }
`

const ButtonClose = styled.button`
  border-radius: 5px;
  font-family: 'Crimson Text', serif;
  justify-self: end;
  font-size: 1rem;
  padding: 0.5rem;
  transition: all ease 0.2s;

  &:hover{
    color: white;
    background: #333333;
    border-radius: 10px;
    border: 1px solid #82BDFA;
    box-shadow: 0 0 5px #82DBFA;
  }
`

const Span1 = styled.span`
`

const Span2 = styled.span`
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
