import React, { useEffect } from "react";
import { getAlbumsAction } from "../redux/actions";
import AccountInfo from "./AccountInfo";
import GoodMorningCard from "./GoodMorningCard";
import MusicPlayer from "./MusicPlayer";
import RecentlyPlayedCard from "./RecentlyPlayedCard";
import { useDispatch, useSelector } from "react-redux";
import { ChevronLeft, ChevronRight } from "react-bootstrap-icons";
import MyNavBar from "./MyNavBar";

function Homepage() {
  const dispatch = useDispatch();
  const albumsFromRedux = useSelector((state) => state.albums.data);
  console.log("🚀albumsFromRedux", albumsFromRedux);

  useEffect(() => {
    dispatch(getAlbumsAction());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
     <div id="s1" className="container-fluid">
        <div id="n1" className="row">
          <div id="first" className="col-2">
            <MyNavBar />
          </div>
          <div id="col-10" className="col-10 pl-5">
          <div className="row">
      <div className="col d-flex justify-content-start">
      <div className="prev-next-buttons">
        <button type="button">
          <ChevronLeft className="text-white" />
        </button>
        <button type="button">
          <ChevronRight className="text-white" />
        </button>
      </div>
    </div>

        {/* <!--Account--> */}
        <AccountInfo />
      </div>

      {/* <!--Cards--> */}
      <div className="row mt-3 scrollit">
        <div className="row" id="cardstart">
          <h1 className="col-12 mb-4 d-flex">Good Morning</h1>
          {albumsFromRedux ? (
            albumsFromRedux
              .slice(0, 8)
              .map((album) => <GoodMorningCard data={album} />)
          ) : (
            <p>hi</p>
          )}
        </div>

        <div className="row  mt-3" id="mainrow">
          <h2 className="col-12 mb-4 d-flex">Recently Played</h2>
          <div className="col-12 pl-3 row" id="firstAlbumRow">
            <RecentlyPlayedCard />
          </div>
        </div>
      </div>

      {/* <!-- Music Player Bar --> */}
      <MusicPlayer />
          </div>
        </div>
      </div>


    </>
  );
}

export default Homepage;