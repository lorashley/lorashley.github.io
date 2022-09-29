import React, {useState, useEffect, useCallback} from "react";
import { Grid, ImageList, Typography } from "@mui/material";
import CompanyLine from "./CompanyLine";
import { companySection, companyData } from "../../static/data/company";
import { educationSection, educationItems } from "../../static/data/education";
import { CompanyProps } from "../../types/company";
import ExperienceItem from "./ExperienceItem";
import ImageItem from "./ImageItem";
import SectionHeader from "./SectionHeader";
import { client } from "../../client";

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

  const [loading, setLoading] = useState(false)
  const [experiences, setExperiences] = useState([])

  const getExperiences = useCallback(async () => {
    setLoading(true)
    try {
      const response = await client.getEntries(
        {content_type: 'experience'}
      )
      setLoading(false)
      const responseData = response.items
      if(responseData){
        cleanExperiences(responseData as [])
      }else {
        setExperiences([])
      }

    } catch(e) {
      console.log("Error: "+e)
      setLoading(false)
    }
  }, [])

  const cleanExperiences = useCallback((rawData: []) => {
    console.log("cleaning data")
    const cleanExperiences = rawData.map((experience: any) => {
      const {sys, fields} = experience
      const {id} = sys
      const title = fields.title
      const description = fields.description
      //const links = fields.links
      const tags = fields.tags
      const updatedExperience = {
        id, title, description, tags
      }
      console.log(updatedExperience)
      return updatedExperience
    })
    setExperiences(cleanExperiences)
  }, [])

  useEffect(() => {getExperiences()}, [getExperiences])
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} textAlign="left" justifyContent="center">
        <Grid item xs={12}>
          <>
            <SectionHeader>Works</SectionHeader>
            {experiences.map((experience) => <ExperienceItem key={experience.id} {...experience}></ExperienceItem>)}
            <SectionHeader>Made</SectionHeader>
          </>
        </Grid>
      </Grid>
    </Grid>
  );
}
