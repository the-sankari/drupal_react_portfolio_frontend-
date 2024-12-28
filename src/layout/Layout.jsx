import { Box, Container } from "@mui/material";
import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

const Layout = () => {
  return (
    <Container>
      <Box sx={{paddingBottom:"60px"}}>
        <Header />
      </Box >
      <Box  >
        <Outlet /> {/* Ensure this is correctly placed */}
      </Box>
      <Box sx={{position:"absolute", bottom:"0"}} >
        <Footer />
      </Box>
    </Container>
  );
};

export default Layout;
