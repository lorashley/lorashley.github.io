import React, { useState, useEffect, useCallback } from 'react';
import { Grid, ImageList, CircularProgress } from '@mui/material';
import ImageItem from './ImageItem';
import SectionHeader from './SectionHeader';
import { client } from '../../client';

import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import ExperienceItem from './ExperienceItem';

type ContentProps = {
  filterContent: string;
};

export default function Content(props: ContentProps) {
  const [loading, setLoading] = useState(false);
  const [experiences, setExperiences] = useState([]);
  const [images, setImages] = useState([]);

  const getExperiences = useCallback(async () => {
    setLoading(true);
    try {
      const response = await client.getEntries({ content_type: 'experience' });
      setLoading(false);
      const responseData = response.items;
      if (responseData) {
        cleanExperiences(responseData as []);
      } else {
        setExperiences([]);
      }
    } catch (e) {
      console.log('Error: ' + e);
      setLoading(false);
    }
  }, []);

  const cleanExperiences = useCallback((rawData: []) => {
    console.log('cleaning data');
    const cleanExperiences = rawData.map((experience: any) => {
      const { sys, fields } = experience;
      const { id } = sys;
      const title = fields.title;
      const description = documentToHtmlString(fields.description);
      //const links = fields.links
      const mediaArray = fields.media.map((item: any) => {
        return 'https:' + item.fields.file.url;
      });
      const thumbnail = 'https:' + fields.thumbnail.fields.file.url;
      const tags = fields.tags;
      const updatedExperience = {
        id,
        title,
        description,
        tags,
        thumbnail,
        mediaArray,
      };
      console.log(updatedExperience);
      return updatedExperience;
    });
    setExperiences(cleanExperiences);
  }, []);

  const getImages = useCallback(async () => {
    setLoading(true);
    try {
      const response = await client.getEntries({ content_type: 'image' });
      setLoading(false);
      const responseData = response.items;
      if (responseData) {
        cleanImages(responseData as []);
      } else {
        setImages([]);
      }
    } catch (e) {
      console.log('Error: ' + e);
      setLoading(false);
    }
  }, []);

  const cleanImages = useCallback((rawData: []) => {
    const cleanImages = rawData.map((image: any) => {
      const { sys, fields } = image;
      const { id } = sys;
      const title = fields.title;
      const img = 'https:' + fields.image.fields.file.url;
      const link = fields.link;
      const tags = fields.tags;

      const updatedImage = {
        id,
        title,
        link,
        tags,
        img,
      };
      return updatedImage;
    });
    setImages(cleanImages);
  }, []);

  useEffect(() => {
    getExperiences();
  }, [getExperiences]);
  useEffect(() => {
    getImages();
  }, [getImages]);

  if (loading) {
    return (
      <Grid container spacing={2}>
        <Grid item xs={12} textAlign="left" justifyContent="center">
          <Grid item xs={12}>
            <>{loading && <CircularProgress color="inherit" />}</>
          </Grid>
        </Grid>
      </Grid>
    );
  } else {
    return (
      <Grid
        container
        spacing={2}
        display="flex"
        textAlign="left"
        justifyContent="center"
      >
        <Grid item>
          <>
            <SectionHeader>work</SectionHeader>
            <ImageList sx={{ width: 800 }} cols={4} rowHeight={197}>
              {experiences.map((experience) =>
                props.filterContent == 'All' ||
                experience.tags.includes(props.filterContent) ? (
                  <ExperienceItem key={experience.id} {...experience} />
                ) : null
              )}
            </ImageList>
            <SectionHeader>creative</SectionHeader>
            <ImageList sx={{ width: 800 }} cols={4} rowHeight={197}>
              {images.map((image) =>
                props.filterContent == 'All' ||
                image.tags.includes(props.filterContent.toLowerCase()) ? (
                  <ImageItem key={image.id} {...image} />
                ) : null
              )}
            </ImageList>
          </>
        </Grid>
      </Grid>
    );
  }
}
