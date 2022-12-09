export const GET_ALBUMS = "GET_ALBUMS";

export const getAlbumsAction = () => {
  const options = {
    method: "GET",
  };
  return async (dispatch, getState) => {
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/deezer/search?q=queen`,
        options
      );
      if (response.ok) {
        const albumData = await response.json();
        console.log("albumData", albumData);
        dispatch({
          type: GET_ALBUMS,
          payload: albumData,
        });
      } else {
        console.log("Error fetching data!");
      }
    } catch (error) {
      console.log("🚀 error", error);
    }
  };
};