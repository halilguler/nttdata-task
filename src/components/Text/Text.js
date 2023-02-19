import { Typography } from "@mui/material";
import React from "react";

const Text = (props) => {
  return (
    <Typography
      variant={props.variant}
      component={props.component}
      sx={props.sx}
      className={props.className}
    >
      {props.children}
    </Typography>
  );
};

export default Text;
