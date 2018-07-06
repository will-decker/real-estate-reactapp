import React, { Component } from 'react'


export default class Filter extends Component {
	constructor() {
		super()
		this.state = {
			name: 'Joe'
		}
	}

	render() {
		return (<section id="filter">
			<div className="inside">
				<h4>Filter</h4>
				<select name="neighborhood" className="filters neighborhood">
					<option>Belleville</option>
				</select>
				<select name="housetype" className="filters housetype">
					<option>Ranch</option>
				</select>
				<select name="bedrooms" className="filters bedrooms">
					<option>2 BR</option>
				</select>
				<div className="filters price">
					<span className="title">Price</span>
					<input type="text" name="min-price" className="min-price" />
					<input type="text" name="max-price" className="max-price" />
				</div>
				<div className="filters floor-space">
					<span className="title">Floor Space</span>
					<input type="text" name="min-floor-space" className="min-floor-space" />
					<input type="text" name="max-floor-space" className="max-floor-space" />
				</div>
				<div className="filters amenities">
					<span className="title">
						Amenities
					</span>
					<label for="amenities">
						<span>Elevators</span>
						<input name="amenities" value="elevator" type="checkbox" />
					</label>
					<label for="amenities">
						<span>Swimming Pool</span>
						<input name="amenities" value="swimming-pool" type="checkbox" />
					</label>
					<label for="amenities">
						<span>Fireplace</span>
						<input name="amenities" value="fireplace" type="checkbox" />
					</label>
					<label for="amenities">
						<span>Storage</span>
						<input name="amenities" value="storage" type="checkbox" />
					</label>
				</div>
			</div>
		</section>)
	}
}