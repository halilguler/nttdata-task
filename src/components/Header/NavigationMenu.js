import { Box, Popover, Typography } from "@mui/material";
import { Items } from "../../assets/data/NavigationMenuItems";
import React, { useEffect } from "react";

function NavigationMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [navItems, setNavItems] = React.useState({
    currentItems: Items,
    moreItems: [],
  });

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const navbarResizeEach = (data, size) => {
    const currentItems = [];
    const moreItems = [];
    data.forEach((item) => {
      if (currentItems.length < size) {
        currentItems.push(item);
      } else {
        moreItems.push(item);
      }
    });
    setNavItems({ currentItems, moreItems });
  };

  const handleResizeStart = () => {
    if (window.innerWidth < 400) {
      navbarResizeEach(Items, 1);
    } else if (window.innerWidth < 600) {
      navbarResizeEach(Items, 2);
    } else if (window.innerWidth < 768) {
      navbarResizeEach(Items, 3);
    } else if (window.innerWidth < 1280) {
      navbarResizeEach(Items, 5);
    } else if (window.innerWidth < 1440) {
      navbarResizeEach(Items, 7);
    } else {
      navbarResizeEach(Items, 12);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResizeStart);
    handleResizeStart();
    return () => window.removeEventListener("resize", handleResizeStart);
  }, []);
  return (
    <>
      <Box
        sx={{ display: { lg: "flex", xs: "none" } }}
        justifyContent={"space-evenly"}
        marginY={5}
        paddingX={5}
      >
        {Items.map(({ label }) => (
          <span>{label}</span>
        ))}
      </Box>
      <Box
        sx={{ display: { xs: "flex", lg: "none" } }}
        justifyContent={"space-evenly"}
        marginY={5}
        paddingX={5}
      >
        {navItems.currentItems.map(({ label }) => (
          <span>{label}</span>
        ))}
        <Typography
          display={navItems?.moreItems?.length ? "block" : "none"}
          onClick={handleClick}
        >
          More
        </Typography>

        <Popover
          id={"PopOver"}
          open={anchorEl}
          hideBackdrop={true}
          anchorEl={anchorEl}
          onBlur={() => setAnchorEl(null)}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          PaperProps={{
            sx: {
              padding: "1rem",
              display: "flex",
              flexDirection: "column",
              gap: "5px",
            },
          }}
        >
          {navItems?.moreItems?.map(({ label }) => (
            <span>
              {label} <br />
            </span>
          ))}
        </Popover>
      </Box>
    </>
  );
}

export default NavigationMenu;
