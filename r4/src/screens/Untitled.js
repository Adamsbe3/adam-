import React, { Component } from "react";
import styled, { css } from "styled-components";

function Untitled(props) {
  return (
    <Image
      src={require("../assets/images/mobile-375.png")}
      resizeMode="contain"
    ></Image>
  );
}

const Image = styled.img`
  width: 504px;
  height: 814px;
  margin-top: 52px;
  align-self: center;
`;

export default Untitled;
