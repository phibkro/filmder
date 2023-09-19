import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getMovieById } from "../server/api";
import "../styles/overview.css";
import { useEffect, useState } from "react";
import { MovieDetails } from "../utils/types";
import { createPosterUrl } from "../utils/lib";
import Header from "../layouts/Header";

export default function MoviePage() {
  const { movieId } = useParams();
  const [result, setResult] = useState<MovieDetails>();
  const { isLoading, isError, isSuccess, data, error } = useQuery({
    queryKey: ["movies", movieId],
    queryFn: () => getMovieById(movieId),
    refetchOnWindowFocus: false,
  });
  useEffect(() => {
    if (isSuccess && data) {
      setResult(data);
    }
  }, [isSuccess, data]);
  if (isError) {
    console.log(error);
  }
  return (
    <>
      <Header></Header>
      {isLoading && <span>...loading</span>}
      {result && (
        <div className="wrapper">
          <div className="item1">
            <img
              src={createPosterUrl(result.poster_path)}
              alt={"Filmcover for" + result.original_title}
            />
          </div>
          <div className="overviewWrapper">
            <div>
              <h1>{result.original_title}</h1>
              <p>{result.overview}</p>
            </div>
            <div className="spesificInfoWrapper">
              <div>
                <h3>Language</h3>
                <p>{result.original_language}</p>
              </div>

              <div>
                <h3>Genre</h3>
                <p>
                  {result.genres.map((genre, i, arr) => {
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
                <p>{result.release_date}</p>
              </div>

              <div>
                <h3>Vote average</h3>
                <p>{result.vote_average}</p>
              </div>

              <div>
                <h3>Popularity</h3>
                <p>{result.popularity}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
