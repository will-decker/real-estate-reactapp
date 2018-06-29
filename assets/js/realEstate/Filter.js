import React, { Component } from 'react'


export default class Filter extends Component {
  constructor() {
    super()
    this.state = {
      name: 'Joe'
    }
  }

  render() {
    return (<section className="filter">
      <h4>Filter</h4>
      <select name="neighborhood" id="">
        <option value="">Belleville</option>
      </select>
    </section>)
  }
}