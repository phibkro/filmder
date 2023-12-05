import type { LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { json } from "@remix-run/router";
import { getMovieById } from "~/api";
import Card from "~/components/Card";
import { createPosterUrl } from "~/utils/lib";

export const loader = async ({ params }: LoaderFunctionArgs) => {
  const movieDetails = await getMovieById(params.movieId);
  if (!movieDetails) {
    throw new Response("Movie not found", { status: 404 });
  }
  return json({ movieDetails });
};

export default function Overview() {
  const { movieDetails } = useLoaderData<typeof loader>();

  return (
    <>
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
    </>
  );
}
