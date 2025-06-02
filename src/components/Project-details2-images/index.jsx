/* eslint-disable @next/next/no-img-element */
import React from "react";

const ProjectDetails2Images = ({ galleryImages }) => {
  const safeImages = galleryImages || [];
  return (
    <section className="projdtal">
      <h2 style={{ display: "none" }}> &nbsp; </h2>
      <div className="container-fluid">
        <div className="justified-gallery">
          <div className="row">
            {safeImages.map((image, index) => (
              <div key={index} className="col-md-3 pr-0">
                <a href={image}>
                  <img alt="" src={image} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetails2Images;
