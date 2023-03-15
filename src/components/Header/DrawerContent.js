import { memo } from "react";
import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import { navItems } from "../../assets/data/NavItems";

export const DrawerContent = memo(({ handleDrawerToggle }) => (
  <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
    <Typography variant="h6" sx={{ my: 2 }}>
      MUI
    </Typography>
    <Divider />
    <List>
      {navItems.map((item) => (
        <ListItem key={item.label} disablePadding>
          <ListItemButton sx={{ textAlign: "center", color:"#000" }}>
            <ListItemText primary={item.label} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  </Box>
));
