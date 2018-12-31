import styled from 'styled-components'
import { Modifiers } from './Modifiers'

export const Container = styled.div`
  font-family: 'Montserrat', sans-serif;
`

export const Wrapper = styled.div`
  padding: 1rem 0;
`

export const Section = styled.section`
  margin: 3rem 0;
`

export const Div = styled.div`
`

export const Nav = styled.nav`
`

export const A = styled.a`
`

export const Span = styled.span`
`

export const Form = styled.form`
`

export const Title = styled.h1`
`
export const H1 = styled.h1`
  font-family: 'Crimson Text', serif;
`

export const H2 = styled.h2`
`

export const H3 = styled.h3`
`

export const H4 = styled.h4`
`

export const H5 = styled.h5`
`
export const H6 = styled.h6`
`

export const Iframe = styled.iframe`
`

export const Img = styled.img`
  border-radius: 5px;
  box-shadow: 0 3px 10px #cccccc;

  &:hover {
    filter: brightness(80%);
    box-shadow: 0 0 10px #82DBFA;
  }
`

export const Img1 = styled.img`
  width: 75%;

  &:hover {
    filter: brightness(80%);
    box-shadow: 0 0 10px #82DBFA;
  }

  @media (max-width: 376px) {
    width: 90%;
  }
`

export const Input = styled.input`
  font-size: 1rem;
  width: 100%;
  padding: 0.5rem;
  border-radius: 5px;
  font-family: 'Crimson Text', serif;
  justify-self: center;
`

export const Textarea = styled.textarea`
  font-size: 1rem;
  width: 100%;
  padding: 0.5rem;
  border-radius: 5px;
  font-family: 'Crimson Text', serif;
  justify-self: center;
`

export const Button = styled.button`
  width: 50%;
  border-radius: 5px;
  font-family: 'Crimson Text', serif;
  font-size: 1rem;
  padding: 0.5rem;
  margin: 0 auto;
  transition: all ease 0.2s;

  &:hover{
    color: white;
    background: #333333;
    border-radius: 10px;
    border: 1px solid #82BDFA;
    box-shadow: 0 0 5px #82DBFA;
  }
`

export const Li = styled.li`
`

export const Object = styled.object`
`

export const P = styled.p`
  font-family: 'Crimson Text', serif;
`

export const P1 = styled.p`
  font-family: 'Crimson Text', serif;
  text-align: center;
  text-decoration: underline;
  transform: rotate(-5deg);
  border: 1px solid black;
  margin: 0 auto;
  background: #333333;
  color: white;
  border-radius: 5px;
  width: 10%;

  @media (max-width: 768px) {
    width: 18%;
    font-size: 1.2rem;
  }
  @media (max-width: 376px) {
    width: 40%;
  }
`

export const Ul = styled.ul`
`

export const Hr = styled.hr`
  width: 80%;
  opacity: 0.3;
  margin: 2rem auto;
`

export const Hr1 = styled.hr`
  height: 5px;
  background: #333333;
  border-radius: 50%;
  width: 30%;
  opacity: 0.3;
  margin: 2rem auto;
`
