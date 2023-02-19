import styled from "@emotion/styled";
import { Card, CardMedia } from "@mui/material";
import React from "react";
import slider1 from "../Slider/images/slider1.png";

const CardStyled = styled(Card)`
    width: 100%;
    max-width: 100%;
    height: 450px;
`;

const CardMediaStyled = styled(CardMedia)`
    height: 450px !important;
    width: 100%;
    max-width: 100%;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
`;

const SliderCard = () => {
  return (
    <CardStyled>
      <CardMediaStyled
        component="img"
        height="450px !important"
        image={slider1}
      />
    </CardStyled>
  );
};

export default SliderCard;
