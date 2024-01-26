import useSWR from "swr";

const URL = `https://example-apis.vercel.app/api/art`;
const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function HomePage() {
  const { data: artworks, error, isLoading } = useSWR(URL, fetcher);

  if (isLoading || !artworks) return <p>is loading...</p>;
  if (error) return <p>error</p>;
  console.log(artworks);

  return (
    <div>
      <h1>Hello from Niko,Nicole and Ramin</h1>

      <ul>
        {artworks.map((artwork) => {
          return (
            <li key={artwork.slug}>
              {artwork.name}
              by {artwork.artist}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
