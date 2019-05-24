import React from "react";
import styled from "styled-components";

export default function ChefCard(props) {
  return (
    <Card>
      <h3>{props.chef.username}</h3>
      <div className="card-contents">
        <img src={props.chef.img_url} alt="Chef's Avatar" />
        <div className="info-box">
          <h4>Location: {props.chef.location}</h4>
          <p>Contact: {props.chef.contact}</p>
        </div>
      </div>
    </Card>
  );
}

const Card = styled.address`
  margin: 20px 0 0 20px;
  padding: 10px;
  border: 1px dashed darkgray;
  min-width: 250px;
  max-width: 400px;

  h3 {
    margin: 0 0 10px 0;
  }
  .card-contents {
    display: flex;

    .info-box {
      padding: 10px;
    }

    img {
      max-width: 100px;
      max-height: 100px;
      object-fit: scale-down;
    }
  }
`;
