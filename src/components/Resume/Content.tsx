import * as React from "react";
import { Grid, Typography } from "@mui/material";
import CompanyLine from "./CompanyLine";
import EduLine from "./EduLine";
import companyData from "../../static/data/company";
import educationData from "../../static/data/education";
import { CompanyProps } from "../../types/company";
import { EducationProps } from "../../types/education";

export default function Content() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} textAlign="left" justifyContent="center">
        <Grid item xs={12}>
          <Typography variant="h5">Work Experience</Typography>
          {companyData.map((c: CompanyProps) => (
            <CompanyLine key={c.name} {...c} />
          ))}
          <Typography variant="h5">Education</Typography>
          {educationData.map((e: EducationProps) => (
            <EduLine key={e.name} {...e} />
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}
