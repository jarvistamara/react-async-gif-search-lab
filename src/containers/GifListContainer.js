import React, { Component } from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

class GifListContainer extends Component {
    state = {
        gifs: [],
    }

    
    render() {

        return (
            <div>
                <GifSearch getGifs={this.getGifs}/>
                <GifList gifs={this.state.gifs}/>
            </div>
        )
    }

    getGifs = (query = 'cheeseburgers') => {
        fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=6PehTbxTPoizaDbj39s3ZEOTCUQpHfcv&rating=g&limit=3`)
        .then(response => response.json())
        .then(({data}) => {
            this.setState({ gifs: data.map( gif => ({ url: gif.images.original.url }) ) })
          })
    }

    componentDidMount() {
        this.getGifs()
    }
}
export default GifListContainer