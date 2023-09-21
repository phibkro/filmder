import { createPosterUrl } from "@/utils/lib";
import { MovieDetails } from "@/utils/types";
import Card from "./Card";

interface MovieOverviewProps {
  movieDetails: MovieDetails;
}
export default function MovieOverview({ movieDetails }: MovieOverviewProps) {
  return (
    <main className="movie-overview">
      <Card
        src={createPosterUrl(movieDetails.poster_path)}
        alt={"Filmcover for" + movieDetails.original_title}
        size="large"
        showStar={false}
      />
      <section>
        <h2>{movieDetails.original_title}</h2>
        <p>{movieDetails.overview}</p>
        <div>
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
      </section>
    </main>
  );
}
