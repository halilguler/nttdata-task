import styled from "@emotion/styled";
import { Box } from "@mui/material";
import Slider from "react-slick";

export const BoxStyled = styled(Box)`
  width: 100%;
  max-width: 100%;
`;

export const SliderStyled = styled(Slider)`
  & .slick-dots {
    display: flex !important;
    justify-content: end;
    position: absolute;
    padding-right: 4rem;
    bottom: 0px;
    padding-top: 1rem;
    padding-bottom: 1rem;
    margin-bottom: 0;
    background: #0003;
  }
  & .slick-dots li {
    margin: 0;
    padding: 0;
    width: 20px;
  }
  & .slick-dots li button:before {
    font-size: 8px;
    color: #fff;
    margin: 0;
    padding: 0;
    opacity: 1;
  }
  & .slick-dots li.slick-active button:before {
    background: transparent;
    opacity: 1;
  }
`;
