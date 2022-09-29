import * as React from "react";
import { Grid, ImageList, Typography } from "@mui/material";
import CompanyLine from "./CompanyLine";
import { companySection, companyData } from "../../static/data/company";
import { educationSection, educationItems } from "../../static/data/education";
import { CompanyProps } from "../../types/company";
import ExperienceItem from "./ExperienceItem";
import ImageItem from "./ImageItem";
import SectionHeader from "./SectionHeader";

type ContentProps = {
  filterContent: string;
};

export default function Content(props: ContentProps) {
  const educationArray = educationItems.filter((e) => {
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
              <SectionHeader>{companySection.name}</SectionHeader>
            )}
            {companyData.map((c: CompanyProps) => (
              <>
                <CompanyLine key={c.name} {...c} />
                <ul>
                  {c.experiences.map((experience) => (
                    <ExperienceItem> {experience}</ExperienceItem>
                  ))}
                </ul>
              </>
            ))}

            {educationSection.tags.includes(props.filterContent) && (
              <SectionHeader>{educationSection.name}</SectionHeader>
            )}
            <ImageList
              sx={{ width: "100%", height: 400 }}
              variant="quilted"
              cols={4}
              rowHeight={150}
            >
              {educationArray.map((e) => (
                <ImageItem key={e.title} {...e} />
              ))}
            </ImageList>
          </>
        </Grid>
      </Grid>
    </Grid>
  );
}
