import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import ContentBody from "../../components/Content/ContentBody/ContentBody";
import ContentHeader, {
  ContainerStyled,
} from "../../components/Content/ContentHeader/ContentHeader";
import NavigationMenu from "../../components/Header/NavigationMenu";
import ContentSlider from "../../components/Slider/ContentSlider";
import { getCardsAsync } from "../../features";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCardsAsync());
  }, [dispatch]);
  return (
    <>
      <NavigationMenu />
      <ContentSlider />
      <ContainerStyled width="100%" sx={{ py: 10 }}>
        <ContentHeader />
        <ContentBody />
      </ContainerStyled>
    </>
  );
};

export default Home;
