import ArtPieces from "@/components/ArtPieces";
import useSWR from "swr";

export default function HomePage() {
  const URL = `https://example-apis.vercel.app/api/art`;

  const { data: artworks, error, isLoading } = useSWR(URL);

  if (isLoading || !artworks) return <p>is loading...</p>;
  if (error) return <p>error</p>;
  console.log(artworks);

  return (
    <div>
      <h1>Hello from Niko,Nicole and Ramin</h1>
      <ArtPieces pieces={artworks} />
    </div>
  );
}
