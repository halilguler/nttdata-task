import React from "react";
import { Box } from "@mui/system";
import { DrawerContent } from "./DrawerContent";
import { Drawer } from "@mui/material";

export const DrawerComponent = React.memo((props) => {
  const { window, handleDrawerToggle, mobileOpen } = props;
  const container =
    window !== undefined ? () => window().document.body : undefined;
  const drawerWidth = 240;

  return (
    <Box component="nav">
      <Drawer
        container={container}
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
        }}
      >
        <DrawerContent handleDrawerToggle={handleDrawerToggle} />
      </Drawer>
    </Box>
  );
});
