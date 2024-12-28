import MenuIcon from "@mui/icons-material/Menu";
import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [anchoreEl, setAnchoreEl] = useState(null);
  const handleMenuOpen = (e) => {
    setAnchoreEl(e.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchoreEl(null);
  };

  return (
    <AppBar>
      <Container>
        <Toolbar>
          <IconButton>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6">KDEV</Typography>
          <Box sx={{ flexGrow: 1 }}>
            <Button color="inherit" component={Link} to="/">
              Home
            </Button>
            <Button color="inherit" component={Link} to="/about">
              About
            </Button>
            <Button color="inherit" component={Link} to="/projects">
              projects
            </Button>
            <Button color="inherit" component={Link} to="/contact">
              Contact
            </Button>
          </Box>
          <Box>
            <Menu
              anchorEl={anchoreEl}
              open={Boolean(anchoreEl)}
              onClose={handleMenuClose} // Corrected here
            >
              <MenuItem onClick={handleMenuClose} component={Link} to="/">
                Home
              </MenuItem>
              <MenuItem onClick={handleMenuClose} component={Link} to="/about">
                About
              </MenuItem>
              <MenuItem
                onClick={handleMenuClose}
                component={Link}
                to="/projects"
              >
                Projects
              </MenuItem>
              <MenuItem
                onClick={handleMenuClose}
                component={Link}
                to="/contact"
              >
                Contact
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
