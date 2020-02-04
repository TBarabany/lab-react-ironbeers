import Axios from 'axios'

const http = Axios.create({baseURL:"https://ih-beers-api2.herokuapp.com/beers"})

const list = () => (http.get('/').then(res => res.data))
const detail = (id) => (http.get(`/${id}`).then(res => res.data))
const random = () => (http.get(`/random`).then(res => res.data))
const newBeer = (beer) => (http.post(`/new`, beer).then(res => res.data))
const search = (search) => (http.get(`/search?q=${search}`).then(res => res.data))

export default {
  list, detail, random, newBeer, search
}