import { Box, StyledEngineProvider } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

const Layout = () => {
  return (
    <StyledEngineProvider injectFirst>
      <Box className="flex min-h-screen flex-col">
        <Header />
        <Outlet />
        <Footer />
      </Box>
    </StyledEngineProvider>
  );
};

export default Layout;
