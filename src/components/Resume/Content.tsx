import React, {useState, useEffect, useCallback} from "react";
import { Grid, ImageList, CircularProgress } from "@mui/material";
import ImageItem from "./ImageItem";
import SectionHeader from "./SectionHeader";
import { client } from "../../client";

import { documentToHtmlString } from '@contentful/rich-text-html-renderer';


type ContentProps = {
  filterContent: string;
};

export default function Content(props: ContentProps) {

  const [loading, setLoading] = useState(false)
  const [experiences, setExperiences] = useState([])
  const [images, setImages] = useState([])



  const getExperiences = useCallback(async () => {
    setLoading(true)
    try {
      const response = await client.getEntries(
        {content_type: 'experience'}
      )
      setLoading(false)
      const responseData = response.items
      console.log(responseData)
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
      const description = documentToHtmlString(fields.description);
      //const links = fields.links
      const mediaArray = fields.media.map((item: any) => {
        return 'https:'+item.fields.file.url
      })
      const tags = fields.tags
      const updatedExperience = {
        id, title, description, tags, mediaArray
      }
      console.log(updatedExperience)
      return updatedExperience
    })
    setExperiences(cleanExperiences)
  }, [])

  const getImages = useCallback(async () => {
    setLoading(true)
    try {
      const response = await client.getEntries(
        {content_type: 'image'}
      )
      setLoading(false)
      const responseData = response.items
      console.log(responseData)
      if(responseData){
        cleanImages(responseData as [])
      }else {
        setImages([])
      }

    } catch(e) {
      console.log("Error: "+e)
      setLoading(false)
    }
  }, [])

  const cleanImages = useCallback((rawData: []) => {
    console.log("cleaning data")
    const cleanImages = rawData.map((image: any) => {
      const {sys, fields} = image
      const {id} = sys
      const title = fields.title
      const img = 'https:'+fields.image.fields.file.url
      const link = fields.link
      const tags = fields.tags
    
      const updatedImage = {
        id, title, link, tags, img
      }
      console.log(updatedImage)
      return updatedImage
    })
    setImages(cleanImages)
  }, [])

  useEffect(() => {getExperiences() }, [getExperiences])
  useEffect(() => {getImages() }, [getImages])

  if(loading){
    return(

      <Grid container spacing={2}>
      <Grid item xs={12} textAlign="left" justifyContent="center">
        <Grid item xs={12}>
          <>
          {loading && <CircularProgress color="inherit"/>}
          </>
        </Grid>
      </Grid>
    </Grid>
    )
  } else { 
    return (
      <Grid container spacing={2}>
        <Grid item xs={12} textAlign="left" justifyContent="center">
          <Grid item xs={12}>
            <>
              <SectionHeader>Works</SectionHeader>
              
              {/*experiences.map((experience) => <ExperienceItem key={experience.id} {...experience}></ExperienceItem>)*/}
              <SectionHeader>Made</SectionHeader>

              <ImageList sx={{ width: '80%', height: 450 }} cols={3} rowHeight={164}>
  {images.map((image) => (<ImageItem key={image.id} {...image}/>))}
  
</ImageList>
             
            </>
          </Grid>
        </Grid>
      </Grid>
    );

    }
  
}
