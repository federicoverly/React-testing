import React from "react";
import { useTheme } from "@mui/material/styles";
import { Typography } from "@mui/material";

export const MuiMode = () => {
  const theme = useTheme();
  return <Typography variant="h1">{`${theme.palette.mode} mode`}</Typography>;
};
