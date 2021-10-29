import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header>
      <Button component={Link} to={`/favourites`} size="small" color="primary">
        fav
      </Button>
    </header>
  );
};
