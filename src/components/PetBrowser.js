import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  petArray = () => {
    return this.props.pets.map(petObj => 
    <Pet onAdoptPet={this.props.onAdoptPet} {...petObj}/>)
  }
  render() {
    return <div className="ui cards">
      {this.petArray()}
    </div>
  }
}

export default PetBrowser
