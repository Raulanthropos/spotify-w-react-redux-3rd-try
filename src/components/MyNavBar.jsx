import React from "react";
import { Button } from "react-bootstrap";
import {
  HouseDoorFill,
  Search,
  LayoutThreeColumns,
  Plus,
  HeartFill,
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
          <a className="nav-link d-flex align-items-center" href="welcome.html">
            <div className="navHomeDiv d-flex justify-content-center align-items-center">
              <HouseDoorFill />
            </div>
            <span className="pl-2 navSpans">Home</span>
          </a>
        </li>
        <li className="nav-item">
          <Button className="d-flex justify-content-center align-items-center" onClick={() => navigate('/search')}><Search />Search</Button>
        </li>
        <li className="nav-item">

            <div className="navIconDivs d-flex justify-content-center align-items-center">
              <LayoutThreeColumns />
            </div>
            <span className="pl-2 navSpans" width={40}>Your Library</span>
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
      {/* <hr style={{ border: "solid 0.5px rgba(128, 128, 128, 0.43)" }} />
      <ul id="nav-3" className="navScroll d-flex flex-column align-items-start">
        <li className="nav-item">
          <a className="nav-link active" href="/">
            Funky Heavy Bluesy
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">
            Your Top Songs 2020
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">
            In Love With You - Erykah B...
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">
            This is Rod Stewart
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">
            FRANCHISE ft.Young Thug...
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">
            Your Top Songs 2019
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">
            Palleggio
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">
            This is Joe Bonamassa
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">
            Jun19
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">
            Jack 30th Party 2
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">
            Jack 30th Party
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">
            This is Opeth
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">
            Metal Ballads
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">
            New Playlist
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">
            Your Top Songs 2018
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">
            Jazz ClassNameclassName=cs Blue Note Editi...
          </a>
        </li>
      </ul>
      <ul id="nav-4" className="nav">
        <li className="nav-item">
          <a className="nav-link" href="/">
            <i className="bi bi-arrow-down-circle"></i>
            <span>Install App</span>
          </a>
        </li>
      </ul> */}
    </>
  );
}

export default MyNavBar;