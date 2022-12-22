import React from "react";
import { Button } from "react-bootstrap";
import {
  HouseDoorFill,
  Search,
  Plus,
  HeartFill,
  MusicNoteList
} from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";

function MyNavBar() {

  const navigate = useNavigate();

  return (
    <>
      <ul id="nav-1" className="nav flex-column">
        <li className="nav-item">
          <a className="nav-link my-3 d-flex" href="welcome.html">
            <img
              id="logo"
              src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_White.png"
              alt="Logo"
            />
          </a>
        </li>
        <li className="nav-item">
          <a className="d-flex align-items-center" href="welcome.html">
            <div className="d-flex justify-content-center align-items-center">
              <HouseDoorFill />
            </div>
            <span className="pl-2 navSpans">Home</span>
          </a>
        </li>
        <li className="nav-item mt-2">
          <div className="d-flex justify-content-start align-items-center text-white"><Search className="onhover" onClick={() => navigate('/search')} title="Search" /><span className="text-white">{"  "}Search</span></div>
        </li>
        <li className="nav-item mt-2">
            <div className="d-flex justify-content-start align-items-center text-white">
              <MusicNoteList />
            </div>
            <span className="text-white d-flex justify-content-start align-items-center text-white">Library</span>
        </li>
      </ul>
      <hr />
      <ul id="nav-2" className="navActions">
        <li className="nav-item">

            <div className="creatPlaylistDiv d-flex justify-content-center align-items-center">
              <Plus />
            </div>
            <span className="pl-2 navSpans">Create Playlist</span>
        </li>
        <li className="nav-item">

            <div className="navHeartDiv d-flex justify-content-center align-items-center">
              <HeartFill />
            </div>
            <span className="pl-2 navSpans">Liked Songs</span>
        </li>
      </ul>
    </>
  );
}

export default MyNavBar;