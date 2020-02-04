import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import BeerService from '../service/BeerService'  

class BeerRandom extends Component {
  state = {
    beer:{}
  }
  
  componentDidMount(){
    BeerService.random().then(beer => this.setState({beer}))
  }
  
  render() {
    return (
      <div className="BeerDetail">
        <img src={this.state.beer.image_url}/>
        <h2>{this.state.beer.name}</h2>
        <p>{this.state.beer.tagline}</p>
        <p>{this.state.beer.first_brewed}</p>
        <p>{this.state.beer.attenuation_level}</p>
        <p>{this.state.beer.description}</p>
        <p>{this.state.beer.contributed_by}</p>
      </div>
    )
  }
}

export default BeerRandom