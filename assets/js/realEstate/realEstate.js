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
			listingsData
		}
		this.change = this.change.bind(this)
	}

	change() {

	}

	render() {
		console.log(this.state)
		return (<div>
			<Header />
			<section className="content-area">
				<Filter change={this.change} />
				<Listings listingsData={this.state.listingsData} />
			</section>
		</div>
		)
	}
}

const app = document.getElementById('app')

ReactDOM.render(<App />, app)
