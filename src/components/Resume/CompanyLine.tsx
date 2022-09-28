import * as React from "react";
import { Avatar, Box, Grid, Typography } from "@mui/material";
import { CompanyProps } from "../../types/company";

export default function CompanyLine(props: CompanyProps) {
  return (
    <Grid container spacing={2}>
      <Box m={2} p={2}>
        <Grid
          item
          xs={12}
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Avatar
            alt={props.name}
            src={props.src}
            sx={{ width: 32, height: 32 }}
          />
          <span>&nbsp;</span>
          <Typography variant="h6">
            {props.name}, {props.year}
          </Typography>
        </Grid>
      </Box>
    </Grid>
  );
}
