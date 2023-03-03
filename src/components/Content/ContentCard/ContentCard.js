import styled from "@emotion/styled";
import { Favorite, FavoriteBorder } from "@mui/icons-material";
import {
  Box,
  Grid,
  Card,
  CardContent,
  CardMedia,
  IconButton,
} from "@mui/material";
import React from "react";
import Text from "../../Text/Text";

const GridStyled = styled(Grid)`
  border: 1px solid #0004;
  border-radius: 5px;
  padding: 1rem;
  max-width: 300px;
  height: fit-content;
  & .MuiCard-root {
    height: ${({ showMore }) => (showMore ? "auto" : "auto")};
  }
`;

const TextStyled = styled(Text)`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  display: ${({ showMore }) => (showMore ? "flex" : "webkit-box")};
  max-height: ${({ showMore }) => (showMore ? "100%" : "2.8rem")};
`;

const CardMediaStyled = styled(CardMedia)`
  height: 100%;
  width: 100%;
`;

const ContentCard = (props) => {
  const {
    id,
    shoppingMethod,
    name,
    imageUrl,
    description,
    price,
    isFavorite,
    addFavorite,
  } = props;
  const [showMore, setShowMore] = React.useState(false);

  const handleShowMore = () => {
    setShowMore(!showMore);
  };
  return (
    <GridStyled
      item
      xs={12}
      className="flex flex-col md:flex-wrap w-full gap-3 p-2"
      my={4}
      showMore={showMore}
    >
      <Card
        sx={{
          position: "relative",
        }}
      >
        <CardMediaStyled component="img" image={imageUrl} />
        <IconButton
          sx={{
            position: "absolute",
            top: 0,
            right: 0,
            zIndex: 1,
          }}
          onClick={addFavorite}
        >
          {isFavorite ? (
            <Favorite
              sx={{
                color: "red",
              }}
            />
          ) : (
            <FavoriteBorder />
          )}
        </IconButton>
        <CardContent>
          <Text gutterBottom variant="h5" component="h2">
            {name}
          </Text>
          <Box
            className="flex bg-blue-100 text-black px-2 py-1 text-xs font-bold mr-3
          "
          >
            <Text variant="body2" color="text.secondary">
              {price}
            </Text>
          </Box>
          <TextStyled showMore={showMore}>
            {description}
            {/* {showMore && <span>{description}</span>} */}
          </TextStyled>
          {description.length > 20 && (
            <Text variant="body2" color="textSecondary" component="p">
              <span
                onClick={handleShowMore}
                style={{
                  cursor: "pointer",
                  color: "blue",
                  textDecoration: "underline",
                }}
              >
                {!showMore ? "Devamını Gör" : "Gizle"}
              </span>
            </Text>
          )}
          <Text>{shoppingMethod}</Text>
        </CardContent>
      </Card>
    </GridStyled>
  );
};

export default ContentCard;
