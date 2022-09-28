import * as React from "react";
import { Avatar, Grid, Typography } from "@mui/material";
import { CompanyProps } from "../../types/company";

export default function CompanyLine(props: CompanyProps) {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Avatar alt={props.name} src={props.src} />
        <Typography variant="h6">
          {props.name}, {props.year}
        </Typography>
      </Grid>
    </Grid>
  );
}
