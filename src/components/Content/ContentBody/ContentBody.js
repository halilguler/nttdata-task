import { Grid } from "@mui/material";
import React from "react";
import ContentCard from "../ContentCard/ContentCard";

const ContentBody = () => {
  return (
    <Grid className="flex flex-wrap md:justify-between lg:flex-nowrap lg:gap-3 md:mx-3" spacing={2} sx={{ mt: 2 }}>
      <ContentCard />
      <ContentCard />
      <ContentCard />
      <ContentCard />
    </Grid>
  );
};

export default ContentBody;
