import React from 'react'

class Pet extends React.Component {
  clickHandler = () => {
    this.props.onAdoptPet(this.props.id)
  }
  genderIcon = () =>{
    if (this.props.gender === "male"){
      return (
        <div>♂</div>
      )
    }else {
      return (
        <div>♀</div>
      )
    }
  }
  renderButtons = () => {
    if (this.props.isAdopted === true){
      return <button className="ui disabled button">Already adopted</button>
    }else{
      return <button onClick={this.clickHandler} className="ui primary button">Adopt pet</button>
    }
  }
  render() {
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {this.props.name}
            {this.genderIcon()}
          </a>
          <div className="meta">
            <span className="date">{this.props.type}</span>
          </div>
          <div className="description">
            <p>Age: {this.props.age}</p>
            <p>Weight: {this.props.weight}</p>
          </div>
        </div>
        <div className="extra content">
          {this.renderButtons()}
        </div>
      </div>
    )
  }
}

export default Pet
