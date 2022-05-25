import React from "react";

import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

export default function Photos(props) {
  console.log(props.photos);
  const photos = props.photos;

  if (photos) {
    return (
      // <div className="photos">
      <Box sx={{ width: '100%', height: 450, overflowY: 'scroll' }}>
        <ImageList variant="masonry" cols={3} gap={8}>
          {photos.map((photo, key) => {
            return (
              <ImageListItem key={key}>
                <img key={key}
                  src={`${photo.src.small}?w=248&fit=crop&auto=format`}
                  srcSet={`${photo.src.small}?w=248&fit=crop&auto=format&dpr=2 2x`}
                  alt={photo.alt}
                  loading="lazy" />
              </ImageListItem>
            )
          })}
        </ImageList>
      </Box>
    );
  } else {
    return null;
  }
}