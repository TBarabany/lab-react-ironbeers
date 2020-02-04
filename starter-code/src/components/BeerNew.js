import React,{Component} from 'react'
import {Link,Redirect} from 'react-router-dom'
import BeerService from '../service/BeerService'  

class BeerNew extends Component {
  constructor(props){
    super(props)
    this.state = {
      name: '', 
      tagline: '',
      description: '',
      first_brewed: '',
      brewers_tips: '',
      attenuation_level: 0,
      contributed_by: '',
    }
  }
  
  handleFormSubmit = (event) => {
    event.preventDefault();
    BeerService.newBeer(this.state) // aqui le mandas a ese metodo la beer
    .then(
     () => { this.setState({ redirect: true }) }
    )    
  }


  handleChange = (event) => {
    let { name, value } = event.target
    this.setState({[name]: value})
  }
    
  render() {
    if (this.state.redirect) {
      return <Redirect to="/" /> //url donde quieres que vaya despues de crear una cerve
    }
    return (
      <div className="BeerNew">
        <form onSubmit={this.handleFormSubmit}>
            <label>Name:</label>
            <input type="text" name="name" value={this.state.name} onChange={this.handleChange}/>

            <label>Tagline:</label>
            <input type="text" name="tagline" value={this.state.tagline} onChange={this.handleChange}/>

            <label>Description:</label>
            <input type="text" name="description" checked={this.state.description} onChange={this.handleChange}/>
            
            <label>First Brewed:</label>
            <input type="text" name="first_brewed" value={this.state.first_brewed} onChange={this.handleChange}/>

            <label>Brewer's Tips:</label>
            <input type="text" name="brewers_tips" value={this.state.brewers_tips} onChange={this.handleChange}/>

            <label>Attenuation Level:</label>
            <input type="number" name="attenuation_level" value={this.state.attenuation_level} onChange={this.handleChange}/>

            <label>Contributed by:</label>
            <input type="text" name="contributed_by" value={this.state.contributed_by}onChange={this.handleChange} />
            
            <button type="submit">Create a Beer!</button>
        </form>
      </div>
    )
  }
}

export default BeerNew