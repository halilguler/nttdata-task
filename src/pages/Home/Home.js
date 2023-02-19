import React from "react";
import ContentBody from "../../components/Content/ContentBody/ContentBody";
import ContentHeader, { ContainerStyled } from "../../components/Content/ContentHeader/ContentHeader";
import ContentSlider from "../../components/Slider/ContentSlider";

const Home = () => {
  return (
    <>
      <ContentSlider />
      <ContainerStyled item maxWidth="lg" sx={{ py: 10 }}>
        <ContentHeader />
        <ContentBody />
      </ContainerStyled>
    </>
  );
};

export default Home;
