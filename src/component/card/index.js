import React from "react";

const Card = (props) => {
  console.log(props);
  const { age, id, imgUrl, name } = props.cardData;
  return (
    <div key={id} className="container">
      <img src={imgUrl} alt="user" width={100} height={100} />
      <h1>{name}</h1>
      <p>{age}</p>
    </div>
  );
};

export default Card;
