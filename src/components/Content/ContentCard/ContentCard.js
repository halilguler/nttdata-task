import styled from "@emotion/styled";
import { FavoriteBorder } from "@mui/icons-material";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Collapse,
  IconButton,
} from "@mui/material";
import React from "react";
import Text from "../../Text/Text";
import CardImage from "./images/card1.png";

const BoxStyled = styled(Box)`
  border: 1px solid #0004;
  border-radius: 5px;
  padding: 1rem;
  height: 100%;
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

const ContentCard = () => {
  const [showMore, setShowMore] = React.useState(false);
  const [text, setText] = React.useState(
    "Sed ac eros vitae odio fringilla pulvinar. Sed nec interdum"
  );

  const handleShowMore = () => {
    setShowMore(!showMore);
  };
  return (
    <BoxStyled
      className="flex flex-col w-full sm:w-1/2 md:w-5/12 lg:justify-between lg:4/4 gap-3 p-2"
      my={4}
      showMore={showMore}
    >
      <Card
        sx={{
          position: "relative",
        }}
      >
        <CardMedia component="img" height="140" image={CardImage} />
        <IconButton
          sx={{
            position: "absolute",
            top: 0,
            right: 0,
            zIndex: 1,
          }}
        >
          <FavoriteBorder />
        </IconButton>
        <CardContent>
          <Text gutterBottom variant="h5" component="h2">
            Product Name
          </Text>
          <Box
            className="flex bg-blue-100 text-black px-2 py-1 text-xs font-bold mr-3
          "
          >
            <Text variant="body2" color="text.secondary">
              1.299,00 TL
            </Text>
          </Box>
          <Text>Description</Text>
          <TextStyled showMore={showMore}>
            lorem ipsum dolor sit amet, consectetur
            {showMore && (
              <>
                Sed ac eros vitae odio fringilla pulvinar. Sed nec interdum
                odio. Praesent eget dapibus mi.
              </>
            )}
          </TextStyled>
          {text.length > 20 && (
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
          <Text>ücretsiz kargo - aynı gün kargo - 30 gün iade</Text>
        </CardContent>
      </Card>
    </BoxStyled>
  );
};

export default ContentCard;
