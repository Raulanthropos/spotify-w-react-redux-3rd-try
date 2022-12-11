import React from "react";

function GoodMorningCard({ data }) {

  return (
    <div className="col-3">
      <a href="/">
        <div className="sidecards col-2">
          <img className="col-4" src={data?.album.cover_xl} alt={data?.title} />
          <p className="col-8 sidetext">
            {data?.artist.name} <br />
            {data?.title}
          </p>
        </div>
      </a>
    </div>
  );
}

export default GoodMorningCard;