// api/tmdbApi.js

// const API_URL = `https://api.themoviedb.org/3/movie/${
//   category ? category : "now_playing"
// }?language=en-US&page=1`;
const API_KEY =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNmU3OTAzMWE4MWY0YzQ0YjY4NzE0NTU0YTU2OWViZCIsIm5iZiI6MTcyNTE5NTYyNS4wNzY2MjUsInN1YiI6IjY2MmIzNTkxMzIzZWJhMDExZTNlZjdlZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.uNFYmfxBw9-HohXH186SG80Oo2bZ7tnkFN23BEMgqRc"; // Store your API key here

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
