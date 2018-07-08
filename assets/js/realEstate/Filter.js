import React, { Component } from 'react'


export default class Filter extends Component {
	constructor() {
		super()
		this.state = {
			name: 'Joe'
		}
		this.cities = this.cities.bind(this)
		this.homeTypes = this.homeTypes.bind(this)
		this.bedrooms = this.bedrooms.bind(this)
	}
	componentWillMount() {
		this.props.populateAction()
	}
	cities() {
		if (this.props.globalState.populateFormsData.cities != undefined) {
			var { cities } = this.props.globalState.populateFormsData

			return cities.map((item) => {
				return (
					<option key={item} value={item}>{item}</option>
				)
			})
		}
	}
	homeTypes() {
		if (this.props.globalState.populateFormsData.homeTypes != undefined) {
			var { homeTypes } = this.props.globalState.populateFormsData

			return homeTypes.map((item) => {
				return (
					<option key={item} value={item}>{item}</option>
				)
			})
		}
	}
	bedrooms() {
		if (this.props.globalState.populateFormsData.bedrooms != undefined) {
			var { bedrooms } = this.props.globalState.populateFormsData

			return bedrooms.map((item) => {
				return (
					<option key={item} value={item}>{item}+ BR</option>
				)
			})
		}
	}

	render() {
		return (<section id="filter">
			<div className="inside">
				<h4>Filter</h4>
				<label htmlFor="city">City</label>
				<select name="city" className="filters city" onChange={this.props.change}>
					<option value="All Cities">All Cities</option>
					{this.cities()}
				</select>
				<label htmlFor="homeType">Home Type</label>
				<select name="homeType" className="filters homeType" onChange={this.props.change}>
					<option value="All Home Types">All Home Types</option>
					{this.homeTypes()}
				</select>
				<label htmlFor="bedrooms">Bedrooms</label>
				<select name="bedrooms" className="filters bedrooms" onChange={this.props.change}>
					<option value="0">0+ BR</option>
					{this.bedrooms()}
				</select>
				<div className="filters price">
					<span className="title">Price</span>
					<input type="text" name="min_price" className="min-price" onChange={this.props.change} value={this.props.globalState.min_price} />
					<input type="text" name="max_price" className="max-price" onChange={this.props.change} value={this.props.globalState.max_price} />
				</div>
				<div className="filters floor-space">
					<span className="title">Floor Space</span>
					<input type="text" name="min_floor_space" className="min-floor-space" onChange={this.props.change} value={this.props.globalState.min_floor_space} />
					<input type="text" name="max_floor_space" className="max-floor-space" onChange={this.props.change} value={this.props.globalState.max_floor_space} />
				</div>
				<div className="filters amenities">
					<span className="title">
						Amenities
					</span>
					<label htmlFor="amenities">
						<span>Elevators</span>
						<input name="elevator" value="elevator" type="checkbox" onChange={this.props.change} />
					</label>
					<label htmlFor="amenities">
						<span>Swimming Pool</span>
						<input name="swimming_pool" value="swimming_pool" type="checkbox" onChange={this.props.change} />
					</label>
					<label htmlFor="amenities">
						<span>Fireplace</span>
						<input name="fireplace" value="fireplace" type="checkbox" onChange={this.props.change} />
					</label>
					<label htmlFor="amenities">
						<span>Storage</span>
						<input name="storage" value="storage" type="checkbox" onChange={this.props.change} />
					</label>
				</div>
			</div>
		</section>)
	}
}