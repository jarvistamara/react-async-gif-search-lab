import React, { Component } from 'react'

class GifSearch extends Component {

  state = {
    query: ""
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.getGifs(this.state.query)
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
            <br />
            <h3>Enter a Search Term:</h3>
          <input type="text" value={this.state.query} onChange={event => this.setState({query: event.target.value})} lable='Enter a Search Term' />
        </form>
      </div>
    )
  }

}

export default GifSearch
