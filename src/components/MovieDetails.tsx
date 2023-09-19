import { MovieDetails } from "../utils/types";

interface MovieOverviewProps {
  movieDetails: MovieDetails;
}
export function MovieOverview({ movieDetails }: MovieOverviewProps) {
  return (
    <div className="wrapper">
      <div className="item1">
        <img
          src={
            "https://image.tmdb.org/t/p/" +
            "original" +
            movieDetails.poster_path
          }
          alt={"Filmcover for" + movieDetails.original_title}
        />
      </div>
      <div className="overviewWrapper">
        <div>
          <h1>{movieDetails.original_title}</h1>
          <p>{movieDetails.overview}</p>
        </div>
        <div className="spesificInfoWrapper">
          <div>
            <h3>Language</h3>
            <p>{movieDetails.original_language}</p>
          </div>

          <div>
            <h3>Genre</h3>
            <p>
              {movieDetails.genres.map((genre, i, arr) => {
                if (i === arr.length - 1) {
                  return genre.name;
                } else {
                  return genre.name + ", ";
                }
              })}
            </p>
          </div>

          <div>
            <h3>Release date</h3>
            <p>{movieDetails.release_date}</p>
          </div>

          <div>
            <h3>Vote average</h3>
            <p>{movieDetails.vote_average}</p>
          </div>

          <div>
            <h3>Popularity</h3>
            <p>{movieDetails.popularity}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
