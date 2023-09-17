import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getMovieById } from "../utils/apiCalls";

export default function MoviePage() {
  const { movieId } = useParams();
  const { isLoading, isError, isSuccess, data, error } = useQuery({
    queryKey: ["movies", movieId],
    queryFn: () => getMovieById(movieId),
    refetchOnWindowFocus: false,
  });
  return <>{data && <p>{JSON.stringify(data)}</p>}</>;
}
