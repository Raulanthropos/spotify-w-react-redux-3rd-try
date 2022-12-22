import React, { useEffect } from "react";
import { getArtistsAction } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";

function RecentlyPlayedCard() {
  const dispatch = useDispatch();
  const artistsFromRedux = useSelector((state) => state.artist.data);

  useEffect(() => {
    dispatch(getArtistsAction());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return artistsFromRedux.slice(0, 14).map((artist) => (
    <div className="albumCard">
      <img
        className="col-11"
        src={artist.artist.picture_big}
        alt={artist.artist.name}
      />
      <div className="albumText">
        <p>{artist.artist.name}</p>
        <p>{artist.title}</p>
      </div>
    </div>
  ));
}

export default RecentlyPlayedCard;