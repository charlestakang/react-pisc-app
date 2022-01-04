import React from "react"
import axios from "axios"
import Searchbar from "./Searchbar"

class App extends React.Component{

    state = { images: [] };

    onSearchSubmit = async term => {
        const response = await axios.get('https://api.unsplash.com/search/photos', {
            params: {query: term},
            headers: {
                Authorization: 'Client-ID 7_GIhitTPFcDV9s67mpTPMFwkkx8SFzPWxfa5nJO5Vs'
            }
        });
        this.setState({ term: response.data.results});
};

    render(){ return(
        <div className="ui container" style={{marginTop: 10+'px'}}>
            <Searchbar onSubmit={this.onSearchSubmit} />
            Found: {this.state.images} images
        </div>
    )
    }
}

export default App
