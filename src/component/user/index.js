import React from "react";

const User = (props) => {
  return (
    <div>
      <ul>
        {props.data.car.map((brand, i) => {
          return <li key={i}>{brand}</li>;
        })}
      </ul>
    </div>
  );
};

export default User;
