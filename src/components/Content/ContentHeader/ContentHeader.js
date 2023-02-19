import styled from "@emotion/styled";
import { FavoriteBorder } from "@mui/icons-material";
import { Button, Container, Grid } from "@mui/material";
import React from "react";
import Text from "../../Text/Text";

export const ContainerStyled = styled(Container)`
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 1rem;
  padding-right: 1rem;
`;

const ButtonStyled = styled(Button)`
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
  return (
   
      <Grid item xs={12} md={6} sm={3}>
        <div className="flex md:flex-row flex-col justify-between items-center">
          <div className="flex">
            <Text variant="h5" component="h5" sx={{ fontWeight: 500 }}>
              Content title goes here
            </Text>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-3">
              <FavoriteBorder />
              <Text variant="h6" component="h6" sx={{ fontWeight: 500 }}>
                0 Ürün
              </Text>
            </div>
            <div className="flex">
              <ButtonStyled
                variant="contained"
                sx={{ textTransform: "capitalize" }}
              >
                Beğenilenler
              </ButtonStyled>
            </div>
          </div>
        </div>
      </Grid>
  );
};

export default ContentHeader;
