import React from 'react'
import styled from 'styled-components'
import { instagram } from '../helpers/ig'
import Photo from './Photo'
import { Div, P1 } from '../assets/Matrix'

class Photography extends React.Component {
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
    const { photos } = this.state
    const Div1 = styled(Div)`
      display: grid;
      text-align: center;
      justify-content: center;
      grid-template-columns: repeat(3, 1fr);

      @media (max-width: 768px) {
        grid-template-columns: 1fr;
      }
    `

    return (
      <Div modifier={['py1']}>
        <P1>Photography</P1>
        <Div1>
          { Object.keys(photos).map( key => 
            <Photo key={key} details={photos[key]} />) 
          }
        </Div1>
      </Div>
    )
  }

  
}

export default Photography
