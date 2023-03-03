import styled from "@emotion/styled";
import { Favorite, FavoriteBorder } from "@mui/icons-material";
import { Button, Container, Grid } from "@mui/material";
import React from "react";
import Text from "../../Text/Text";
import { useDispatch, useSelector } from "react-redux";
import { setShowFavorite } from "../../../features";

export const ContainerStyled = styled(Container)`
  padding-top: 10px;
  padding-bottom: 10px;
  max-width: 100% !important;
  padding-left: 5rem !important;
  padding-right: 5rem !important;
  @media (max-width: 768px) {
    padding-left: 1rem !important;
    padding-right: 1rem !important;
    justify-content: center;
    padding-top: 0px;
    padding-bottom: 0px;
  }
`;

export const ButtonStyled = styled(Button)`
  &.MuiButton-root {
    border-radius: 0.5rem;
    padding: 0.25rem 1rem;
    background: #0059bc;
  }
  margin-top: 2px;
  color: #fff;
  background: #0059bc;
  &:hover {
    background: #0059bc;
  }
`;

const ContentHeader = () => {
  const dispatch = useDispatch();
  const { isShowFavorite, favoriteCount } = useSelector(
    (state) => state.reducer.cardsSlice
  );

  const toogleFavorite = () => {
    dispatch(setShowFavorite(!isShowFavorite));
  };

  return (
    <Grid>
      <div className="flex md:flex-row flex-col justify-between items-center">
        <div className="flex">
          <Text variant="h5" component="h5" sx={{ fontWeight: 500 }}>
            Content title goes here
          </Text>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-3">
            {favoriteCount > 0 ? (
              <Favorite
                sx={{
                  color: "red",
                }}
              />
            ) : (
              <FavoriteBorder />
            )}
            <Text variant="h6" component="h6" sx={{ fontWeight: 500 }}>
              {favoriteCount} Ürün
            </Text>
          </div>
          <div className="flex">
            <ButtonStyled
              variant="contained"
              sx={{ textTransform: "capitalize" }}
              onClick={toogleFavorite}
            >
              {isShowFavorite ? "Tümünü Göster" : "Beğenilenler"}
            </ButtonStyled>
          </div>
        </div>
      </div>
    </Grid>
  );
};

export default ContentHeader;
