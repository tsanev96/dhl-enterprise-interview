import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header>
      <Button component={Link} to={`/`} size="small" color="primary">
        Home (Albums)
      </Button>
      <Button component={Link} to={`/favourites`} size="small" color="primary">
        Favourites
      </Button>
    </header>
  );
};
