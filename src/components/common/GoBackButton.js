import React from "react";
import { Button } from "@mui/material";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";

export const GoBackButton = () => {
  const history = useHistory();

  const handleClick = () => history.goBack();

  return (
    <Button to="/" onClick={handleClick} component={Link} variant="outlined">
      Go Back
    </Button>
  );
};
