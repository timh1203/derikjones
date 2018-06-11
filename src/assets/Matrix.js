import styled from 'styled-components'
import { applyStyleModifiers } from 'styled-components-modifiers'
import { Modifiers } from './Modifiers'

export const Container = styled.div`
  font-family: 'Montserrat', sans-serif;
  ${applyStyleModifiers(Modifiers)}
`

export const Wrapper = styled.div`
  padding: 1rem 0;
  ${applyStyleModifiers(Modifiers)}
`

export const Section = styled.section`
  margin: 3rem 0;
  ${applyStyleModifiers(Modifiers)}
`

export const Div = styled.div`
  ${applyStyleModifiers(Modifiers)}
`

export const Nav = styled.nav`
  ${applyStyleModifiers(Modifiers)}
`

export const A = styled.a`
  ${applyStyleModifiers(Modifiers)}
`

export const Span = styled.span`
  ${applyStyleModifiers(Modifiers)}
`

export const Form = styled.form`
  ${applyStyleModifiers(Modifiers)}
`

export const Title = styled.h1`
  ${applyStyleModifiers(Modifiers)}
`
export const H1 = styled.h1`
  font-family: 'Crimson Text', serif;
  ${applyStyleModifiers(Modifiers)}
`

export const H2 = styled.h2`
  ${applyStyleModifiers(Modifiers)}
`

export const H3 = styled.h3`
  ${applyStyleModifiers(Modifiers)}
`

export const H4 = styled.h4`
  ${applyStyleModifiers(Modifiers)}
`

export const H5 = styled.h5`
  ${applyStyleModifiers(Modifiers)}
`
export const H6 = styled.h6`
  ${applyStyleModifiers(Modifiers)}
`

export const Iframe = styled.iframe`
  ${applyStyleModifiers(Modifiers)}
`

export const Img = styled.img`
  border-radius: 5px;
  box-shadow: 0 3px 10px #cccccc;

  &:hover {
    filter: brightness(80%);
    box-shadow: 0 0 10px #82DBFA;
  }
  ${applyStyleModifiers(Modifiers)}
`

export const Input = styled.input`
  font-size: 1rem;
  width: 300px;
  padding: 0.5rem;
  border-radius: 5px;
  font-family: 'Crimson Text', serif;
  justify-self: center;
  ${applyStyleModifiers(Modifiers)}
`

export const Textarea = styled.textarea`
  font-size: 1rem;
  width: 300px;
  padding: 0.5rem;
  border-radius: 5px;
  font-family: 'Crimson Text', serif;
  justify-self: center;
  ${applyStyleModifiers(Modifiers)}
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
  ${applyStyleModifiers(Modifiers)}
`

export const Li = styled.li`
  ${applyStyleModifiers(Modifiers)}
`

export const Object = styled.object`
  ${applyStyleModifiers(Modifiers)}
`

export const P = styled.p`
  font-family: 'Crimson Text', serif;
  ${applyStyleModifiers(Modifiers)}
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
  ${applyStyleModifiers(Modifiers)}

  @media (max-width: 768px) {
    width: 18%;
    font-size: 1.2rem;
  }
`

export const Ul = styled.ul`
  ${applyStyleModifiers(Modifiers)}
`

export const Hr = styled.hr`
  width: 80%;
  opacity: 0.3;
  margin: 2rem auto;
  ${applyStyleModifiers(Modifiers)}
`

export const Hr1 = styled.hr`
  height: 5px;
  background: #333333;
  border-radius: 50%;
  width: 30%;
  opacity: 0.3;
  margin: 2rem auto;
`