import { Box, Container } from "@mui/material";
import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

const Layout = () => {
  return (
    <Container>
      <Box>
        <Header />
      </Box>
      <Box  sx={{paddingTop:"100px"}}>
        <Outlet /> {/* Ensure this is correctly placed */}
      </Box>
      <Box>
        <Footer />
      </Box>
    </Container>
  );
};

export default Layout;
