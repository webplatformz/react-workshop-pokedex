export const fetcher = async <T>(
  input: RequestInfo,
  init?: RequestInit
): Promise<T> => {
  const response = await fetch(input, init);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};
