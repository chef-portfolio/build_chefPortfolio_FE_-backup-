import React from "react";
import styled from "styled-components";

export default function ChefCard(props) {
  return (
    <Card>
      <h3>{props.chef.name}</h3>
      <div className="card-contents">
        <img src={props.chef.pic} alt="Chef's Avatar" />
        <div className="info-box">
          <h4>{props.chef.loc}</h4>
          <h4>{props.chef.org}</h4>
          <p>{props.chef.contact}</p>
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
  }
`;
