import { useLoaderData } from "@remix-run/react";
import { json } from "@remix-run/router";
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
  useQuery,
} from "@tanstack/react-query";
import { getPopularMovies } from "~/api";
import MovieApp from "~/components/MovieApp";

export async function loader() {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["popularMovies"],
    queryFn: getPopularMovies,
  });
  return json({ dehydratedState: dehydrate(queryClient) });
}

function Movies() {
  const { data } = useQuery({
    queryKey: ["popularMovies"],
    queryFn: getPopularMovies,
  });

  return <MovieApp movieListResults={data.results} />;
}

export default function Index() {
  const { dehydratedState } = useLoaderData<typeof loader>();

  return (
    <HydrationBoundary state={dehydratedState}>
      <Movies />
    </HydrationBoundary>
  );
}
