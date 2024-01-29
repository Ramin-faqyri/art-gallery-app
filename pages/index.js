import useSWR from "swr";
import Spotlight from "@/components/Spotlight";

export default function HomePage() {
  const URL = `https://example-apis.vercel.app/api/art`;

  const { data: artworks, error, isLoading } = useSWR(URL);

  if (isLoading || !artworks) return <p>is loading...</p>;
  if (error) return <p>error</p>;
  console.log(artworks);

  const randomArtPiece = artworks
    ? artworks[Math.floor(Math.random() * artworks.length)]
    : null;

  return (
    <div>
      <h1>Art Gallery App</h1>
      <Spotlight
        image={randomArtPiece.imageSource}
        artist={randomArtPiece.artist}
      />
    </div>
  );
}
