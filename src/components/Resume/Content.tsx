import * as React from "react";
import { Grid, Typography } from "@mui/material";
import CompanyLine from "./CompanyLine";
import EducationItem from "./EducationItem";
import { companySection, companyData } from "../../static/data/company";
import { educationSection, educationData } from "../../static/data/education";
import { CompanyProps } from "../../types/company";
import { EducationProps } from "../../types/education";

type ContentProps = {
  filterContent: string;
};

export default function Content(props: ContentProps) {
  const educationArray = educationData.filter((e) => {
    if (props.filterContent !== "All") {
      return e.tags.includes(props.filterContent);
    }
    return true;
  });
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} textAlign="left" justifyContent="center">
        <Grid item xs={12}>
          <>
            {companySection.tags.includes(props.filterContent) && (
              <Typography variant="h5">{companySection.name}</Typography>
            )}
            {companyData.map((c: CompanyProps) => (
              <CompanyLine key={c.name} {...c} />
            ))}

            {educationSection.tags.includes(props.filterContent) && (
              <Typography variant="h5">{educationSection.name}</Typography>
            )}
            {educationArray.map((e: EducationProps) => (
              <EducationItem key={e.name} {...e} />
            ))}
          </>
        </Grid>
      </Grid>
    </Grid>
  );
}
