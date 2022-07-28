import React from "react";

function BeerCard(props) {
  return (
    <li style={{ listStyle: "none" }}>
      <img style={{ height: "200px" }} src={props.image_url}></img>
      {props.name}
    </li>
  );
}

export default BeerCard;
