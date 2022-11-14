import React from "react";

export default function Video(props) {
  const { title, link, img } = props.data;
  return (
    <>
      <h3 className="aside-title">{title}</h3>
      <div className="video-post">
        <a href={link} className="glightbox link-video">
          <span className="bi-play-fill" />
          <img src={img} alt="" className="img-fluid" />
        </a>
      </div>
    </>
  );
}
