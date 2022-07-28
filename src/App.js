import React from "react";
import axios from "axios";

import "./App.css";

import BeerCard from "./BeerCard";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      arrayOfBeer: [],
    };
  }

  componentDidMount() {
    axios.get("https://api.punkapi.com/v2/beers").then((res) => {
      const arrayOfBeer = res.data;
      this.setState({ arrayOfBeer });
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <ol>
            {this.state.arrayOfBeer.map((beer, index) => {
              return (
                <BeerCard key={index}>
                  {beer.name} image_url={beer.image_url}
                </BeerCard>
              );
            })}
          </ol>
        </header>
      </div>
    );
  }
}

export default App;
