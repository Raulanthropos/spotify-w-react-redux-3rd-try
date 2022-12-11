import React from "react";

function AccountInfo() {
  return (
    <div className="col d-flex justify-content-end mr-3 mt-3">
      <div className="accountInfo d-flex rounded-pill p-1 mt-2 mr-2">
      <div className="profilePhotoDiv rounded-circle mr-1">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzHQv_th9wq3ivQ1CVk7UZRxhbPq64oQrg5Q&usqp=CAU"
            alt="Profile"
            className="profileImg"
          />
        </div>
        <div className="profileName text-white align-self-center pl-1 pr-1">
          Ioannis Psychias
        </div>
        <div className="profileArrowDown text-white align-self-center pl-1 pr-1">
          <i className="bi bi-caret-down-fill"></i>
        </div>
      </div>
    </div>
  );
}

export default AccountInfo;