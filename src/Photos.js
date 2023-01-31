import React from "react";
export default function Photos(props) {
  if (props.photos) {
    return (
      <section className="photos">
        <div className="row">
          {props.photos.map(function (photo, i) {
            return (
              <div className="col-md-3" key={i}>
                <a href={photo.src.original} target="_blank" rel="noreferrer">
                  <img
                    className="img-fluid img-thumbnail rounded text-center"
                    src={photo.src.small}
                    alt="photos of searched word "
                    style={{ width: "80%", height: "80%" }}
                  />
                </a>
              </div>
            );
          })}
        </div>
      </section>
    );
  } else {
    return null;
  }
}
