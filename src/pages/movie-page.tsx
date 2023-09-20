import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getMovieById } from "../server/api";
import MovieOverview from "../components/MovieOverview";
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
