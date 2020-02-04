import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import BeerService from '../../service/BeerService'  

class BeerDetail extends Component {
  state = {
    beer:{}
  }
  
  componentDidMount(){ 
    const id = this.props.match.params.id
    BeerService.detail(id).then(beer => this.setState({beer}))
  }
  
  render() {
    return (
      <div className="BeerDetail">
        <img src={this.state.beer.image_url}/>
        <h2>{this.state.beer.name}</h2>
        <p>{this.state.beer.tagline}</p>
        <p>{this.state.beer.first_brewed}</p>
      </div>
    )
  }
}

export default BeerDetail