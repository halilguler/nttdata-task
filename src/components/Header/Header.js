import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";

import { DrawerComponent } from "./DrawerComponent";
import { Logo } from "../../assets/svg/logo";
import { Grid } from "@mui/material";
import AutoCompleteComponent from "./Autocomplete";
import { Search } from "@mui/icons-material";

function Header() {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = React.useCallback(() => {
    setMobileOpen((prevState) => !prevState);
  }, []);

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        component="nav"
        position="sticky"
        sx={{ backgroundColor: "transparent" }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon
              sx={{
                color: "black",
              }}
            />
          </IconButton>
          <Grid
            container
            display={"flex"}
            justifyContent="space-evenly"
            alignItems="center"
            sx={{ display: { xs: "none", sm: "flex" } }}
          >
            <Grid item xs={2}>
              <Logo />
            </Grid>
            <Grid item xs={5}>
              <AutoCompleteComponent />
            </Grid>
            <Grid item xs={3}>
              <Button
                variant="contained"
                sx={{
                  paddingInline: "2rem",
                  backgroundColor: "#1565c0 !important",
                }}
              >
                <Search />
              </Button>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <DrawerComponent
        handleDrawerToggle={handleDrawerToggle}
        mobileOpen={mobileOpen}
      />
    </Box>
  );
}

export default Header;
