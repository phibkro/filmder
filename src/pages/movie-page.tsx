import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import MovieOverview from "../components/MovieOverview";
import { getMovieById } from "../server/api";
import "../styles/overview.css";

export default function MoviePage() {
  const { movieId } = useParams();
  const { isLoading, isError, isSuccess, data, error } = useQuery({
    queryKey: ["movies", movieId],
    queryFn: () => getMovieById(movieId),
    refetchOnWindowFocus: false,
  });
  if (isError) {
    console.log(error);
  }
  return (
    <>
      {isLoading && <span>...loading</span>}
      {isSuccess && <MovieOverview movieDetails={data} />}
    </>
  );
}
