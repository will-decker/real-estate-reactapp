import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Header from './Header.js'
import Filter from './Filter.js'
import Listings from './Listings.js'
import listingsData from './data/listingsData.js'

class App extends Component {
	constructor() {
		super()
		this.state = {
			name: 'Joe',
			listingsData,
			city: 'All Cities',
			homeType: 'All Home Types',
			bedrooms: 0,
			min_price: 0,
			max_price: 700000,
			min_floor_space: 150,
			max_floor_space: 6000,
			elevator: false,
			swimming_pool: false,
			fireplace: false,
			storage: false,
			filteredData: listingsData,
			populateFormsData: '',
			sortby: 'price-dsc',
			view: 'box'
		}
		this.change = this.change.bind(this)
		this.filteredData = this.filteredData.bind(this)
		this.populateForms = this.populateForms.bind(this)
	}

	componentWillMount() {
		var listingsData = this.state.listingsData.sort((a, b) => {
			return a.price - b.price
		})

		this.setState({
			listingsData
		})
	}

	change(event) {
		var name = event.target.name
		var value = (event.target.type === 'checkbox') ? event.target.checked : event.target.value

		this.setState({
			[name]: value
		}, () => {
			console.log(this.state)
			this.filteredData()
		})
	}

	filteredData() {
		var newData = this.state.listingsData.filter((item) => {
			return item.price >= this.state.min_price && item.price <= this.state.max_price && item.floorSpace >= this.state.min_floor_space && item.floorSpace <= this.state.max_floor_space && item.rooms >= this.state.bedrooms
		})

		if (this.state.city != "All Cities") {
			newData = newData.filter((item) => {
				return item.city == this.state.city
			})
		}

		if (this.state.homeType != "All Home Types") {
			newData = newData.filter((item) => {
				return item.homeType == this.state.homeType
			})
		}

		if (this.state.sortby == 'price-dsc') {
			newData = newData.sort((a, b) => {
				return a.price - b.price
			})
		}

		if (this.state.sortby == 'price-asc') {
			newData = newData.sort((a, b) => {
				return b.price - a.price
			})
		}

		this.setState({
			filteredData: newData
		})
	}

	populateForms() {
		// city
		var cities = this.state.listingsData.map((item) => {
			return item.city
		})
		cities = new Set(cities)
		cities = [...cities]

		cities = cities.sort()

		// homeType
		var homeTypes = this.state.listingsData.map((item) => {
			return item.homeType
		})
		homeTypes = new Set(homeTypes)
		homeTypes = [...homeTypes]

		homeTypes = homeTypes.sort()


		// bedrooms
		var bedrooms = this.state.listingsData.map((item) => {
			return item.rooms
		})
		bedrooms = new Set(bedrooms)
		bedrooms = [...bedrooms]

		bedrooms = bedrooms.sort()

		this.setState({
			populateFormsData: {
				homeTypes,
				bedrooms,
				cities
			}
		}, () => {
			console.log(this.state)
		})

	}

	render() {
		return (<div>
			<Header />
			<section className="content-area">
				<Filter change={this.change} globalState={this.state} populateAction={this.populateForms} />
				<Listings listingsData={this.state.filteredData} change={this.change} globalState={this.state} />
			</section>
		</div>)
	}
}

const app = document.getElementById('app')

ReactDOM.render(<App />, app)
