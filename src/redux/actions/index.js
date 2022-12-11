// export const GET_ALBUMS = "GET_ALBUMS";

// export const addToCartAction = (album) => ({
//   type: GET_ALBUMS,
//   payload: album,
// })

// export const getAlbumsAction = () => {
//   const options = {
//     method: "GET",
//   };

//   return async (dispatch, getState) => {
//     try {
//       const response = await fetch(
//         `https://striveschool-api.herokuapp.com/api/deezer/search?q=queen`,
//         options
//       );
//       if (response.ok) {
//         const albumData = await response.json();
//         console.log("albumData", albumData);
//         dispatch(addToCartAction(albumData));
//       } else {
//         console.log("Error fetching data!");
//       }
//     } catch (error) {
//       console.log("🚀 error", error);
//     }
//   };
// };

export const GET_ALBUMS = "GET_ALBUMS";
export const GET_ARTISTS = "GET_ARTISTS";

export const getAlbumsAction = () => {
  const options = {
    method: "GET",
  };
  return async (dispatch, getState) => {
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/deezer/search?q=slipknot`,
        options
      );
      if (response.ok) {
        const albumData = await response.json();
        console.log(" getAlbums ~ albumData", albumData);
        dispatch({
          type: GET_ALBUMS,
          payload: albumData.data,
        });
      } else {
        console.log("Error fetching data");
      }
    } catch (error) {
      console.log("🚀 error", error);
    }
  };
};

export const getArtistsAction = () => {
  const options = {
    method: "GET",
  };
  return async (dispatch, getState) => {
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/deezer/search?q=rock`,
        options
      );
      if (response.ok) {
        const artistData = await response.json();
        console.log(" getartists ~ artistData", artistData);
        dispatch({
          type: GET_ARTISTS,
          payload: artistData.data,
        });
      } else {
        console.log("Error fetching data");
      }
    } catch (error) {
      console.log("🚀 error", error);
    }
  };
};

export const getListOfSongs = (query) => {
  const baseEndpoint = 'https://striveschool-api.herokuapp.com/api/deezer/search?q='
  return async (dispatch, getState) => {
      try {
          const response = await fetch(baseEndpoint + query)
          if (response.ok) {
            const { data } = await response.json()
            console.log(data) //It's working!
            dispatch(
              {
                  type: GET_ALBUMS,
                  payload: data,
              }
            )
          } else {
            alert('Error fetching results')
          }
        } catch (error) {
          console.log(error)
        }
      }
}