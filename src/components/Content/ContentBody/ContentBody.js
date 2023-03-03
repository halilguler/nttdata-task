import { Grid } from "@mui/material";
import React from "react";
import ContentCard from "../ContentCard/ContentCard";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { ButtonStyled } from "../ContentHeader/ContentHeader";
import { addToFav } from "../../../features";

const ContentBody = () => {
  const { cardItems, isShowFavorite, favoriteCards } = useSelector(
    (state) => state.reducer.cardsSlice
  );
  const [showMoreCount, setShowMoreCount] = useState(4);
  const dispatch = useDispatch();
  const handleShowMore = () => {
    setShowMoreCount((prevCount) => prevCount + 4);
  };

  const addFavorite = (item) => {
    dispatch(addToFav(item));
  };
  return (
    <Grid className="flex items-center flex-col justify-center">
      <Grid
        className={`
        flex flex-wrap gap-2 md:mx-3 w-full  p-2
        ${isShowFavorite ? "justify-start" : "justify-center"} `}
        spacing={2}
        sx={{ mt: 2 }}
      >
        {isShowFavorite ? (
          <>
            {favoriteCards.map((item) => (
              <ContentCard
                key={item.id}
                {...item}
                addFavorite={() => addFavorite(item)}
              />
            ))}
          </>
        ) : (
          <>
            {cardItems.slice(0, showMoreCount).map((item) => (
              <ContentCard
                key={item.id}
                {...item}
                addFavorite={() => addFavorite(item)}
              />
            ))}
          </>
        )}
      </Grid>
      {!isShowFavorite && showMoreCount < cardItems.length && (
        <div className="flex mx-auto mb-4">
          <ButtonStyled
            variant="contained"
            sx={{
              width: "150px",
              height: "50px",
              borderRadius: "0.5rem",
              mt: 2,
              backgroundColor: "#0059bc",
            }}
            onClick={handleShowMore}
          >
            Daha Fazla
          </ButtonStyled>
        </div>
      )}
    </Grid>
  );
};

export default ContentBody;
