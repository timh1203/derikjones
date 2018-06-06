import React from 'react'
import { instagram } from '../helpers/ig'
import Link from 'gatsby-link'
import styled from 'styled-components'
import Photo from './Photo'
import { Section, Div, H1 } from '../assets/Matrix'

class Photos extends React.Component {
  constructor() {
    super()
    this.state = {
      photos: {},
    }
  }

  addPhotos = (data) => {
    let photos = {...this.state.photos}
    photos = data
    this.setState({ photos })
  }

  componentDidMount() {
    instagram.get('users/self/media/recent')
      .then((res) => {
        let photos = res.data.slice(0, 3);
        this.setState({ photos })
      })
      .catch((err) => {
          console.log("error" + err);
      })
  }

  render() {
    let {photos} = this.state
    return (
      <Section id='Photos' modifiers={['my3A']}>
        <H1 modifiers={['ol']}>Photos</H1>
        <Div modifiers={['dFlex', 'fjcAround', 'tCenter']}>
          { Object.keys(photos).map( key => 
            <Photo key={key} details={photos[key]} />) 
          }
        </Div>
      </Section>
    )
  }
}

export default Photos
