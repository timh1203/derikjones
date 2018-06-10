import React from 'react'
import { Div, P, A, Span, Img } from '../assets/Matrix'

const Photo = (props) => (
  <Div modifiers={['pt3']}>
    <A href={props.details.link} target="_blank">
      <Img modifiers={['w75', 'h75']} src={props.details.images.standard_resolution.url} alt={props.details.caption.from.text} />
    </A>
    <P>
      <Span className="icons">💬</Span> {props.details.comments.count} | <Span className="icons">❤️</Span> {props.details.likes.count}
    </P>
    <P modifiers={['w75', 'm0A']}>
      {props.details.caption.text.substring(0, 100) + '...'}
    </P>
  </Div>
)

export default Photo