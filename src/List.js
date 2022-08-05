import React, { Component } from "react";
import Beer from "./Beer";



export class List extends Component {
  constructor() {
    super();
    this.state = {
      beers: [],
    };
  }

  componentDidMount() {
    fetch("https://api.punkapi.com/v2/beers")
      .then((resolve) => resolve.json())
      .then((data) => {
        this.setState({
          beers: data,
        });
      });
  }

  componentDidUpdate() {
    console.log("beers", this.state.beers);
  }

  render() {
    return (
      <ul className="beer">
        {this.state.beers.slice(0, 5).map(({ id, name, image_url }) => (
          <Beer name={name} image={image_url} key={id} />
        ))}
      </ul>
    );
  }
}

export default List;
