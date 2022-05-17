import React from "react";

export default function Photos(props) {
  const photos = props.photos;

  if (photos) {
    return (
      <div className="photos">
        {photos.map((photo, key) => {
          return (
            <img className="img-fluid" key={key} src={photo.src.tiny} alt="/" />
          )
        })}
      </div>
    );
  } else {
    return null;
  }
}