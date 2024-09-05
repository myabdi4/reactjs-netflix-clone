// api/tmdbApi.js

// const API_URL = `https://api.themoviedb.org/3/movie/${
//   category ? category : "now_playing"
// }?language=en-US&page=1`;
const API_KEY = import.meta.env.VITE_TMDB_API_KEY; // Store your API key here

export const fetchNowPlayingMovies = async ({ category = "now_playing" }) => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${category}?language=en-US&page=1`,
      {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${API_KEY}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch data from TMDB");
    }

    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error("Error fetching now playing movies:", error);
    return [];
  }
};
