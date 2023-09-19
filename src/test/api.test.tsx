import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { renderHook, waitFor } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { usePopularMovies, useMovieById } from "../server/api";

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
