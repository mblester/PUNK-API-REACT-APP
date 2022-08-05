import React, { useState } from "react";
import Heart from "react-heart";

function Beer(props) {
  const { name, image, malts, hops, yeast } = props;
  const [isHidden, setHide] = useState(true);
  const [active, setActive] = useState(false)

  return (
    <li style={{ listStyle: "none" }}>
      <h3>{name} </h3>
      <img
        style={{ height: "200px" }}
        src={image}
        alt="image of beer"
        onClick={() => {
          isHidden ? setHide(false) : setHide(true);
        }}
      />
      	<Heart style={{width: "20px", margin: "20px"}} isActive={active} onClick={() => setActive(!active)}/>

      {isHidden ? (
        <div></div>
      ) : (
        <div>
          <p>Malts: {malts}</p>
          <p>Hops: {hops}</p>
          <p>Yeast: {yeast}</p>
        </div>
      )}
    </li>
  );
}

export default Beer;
