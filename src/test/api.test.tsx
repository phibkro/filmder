import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { renderHook, waitFor } from "@testing-library/react";
import { describe, expect } from "vitest";
import { useMovieById, usePopularMovies } from "../server/api";

// TODO

describe("usePopularMovies", async () => {
  const queryClient = new QueryClient();
  const wrapper = ({ children }) => (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
  const { result } = renderHook(() => usePopularMovies(), { wrapper });

  await waitFor(() => expect(result.current.isSuccess).toBe(true));
});

describe("usePopularMovies", async () => {
  const queryClient = new QueryClient();
  const wrapper = ({ children }) => (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
  const { result } = renderHook(() => useMovieById("346698"), { wrapper });

  await waitFor(() => expect(result.current.isSuccess).toBe(true));
});

// see https://tanstack.com/query/latest/docs/react/guides/testing
