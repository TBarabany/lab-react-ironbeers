import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import BeerList from './BeersList/BeerList'
import BeerService from '../service/BeerService'

class Beers extends Component {
  state = {
    beerArray:[],
    search: ''
  }
  componentDidMount(){
    BeerService.list().then(beers => this.setState({beerArray:beers}))
  }

  handleSearch(event) {
    event.preventDefault()

    BeerService.search(this.state.search)
      .then(beers => this.setState({ beerArray: beers }))
  }

  handleChange(event) {
    const { value } = event.target

    this.setState({ search: value })
  }
  
  render() {
    return (
      <div className="Beers">
        <form onSubmit={(e) => this.handleSearch(e)}>
          <p>Look for a beer!</p>
          <input type="text" name="fname" value={this.state.search} onChange={(e) => this.handleChange(e)} />
          <button type="submit">Search</button>
        </form>      
        <BeerList beerArray={this.state.beerArray} />
      </div>
    )
  }
}



export default Beers