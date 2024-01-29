import Spotlight from "@/components/Spotlight";
import ArtPieces from "@/components/ArtPieces";
import Link from "next/link";

export default function HomePage({ artworks }) {
  const randomArtPiece = artworks
    ? artworks[Math.floor(Math.random() * artworks.length)]
    : null;

  return (
    <div>
      <h1>Art Gallery App</h1>
      <nav>
        <Link href="/art-pieces">Art-Pieces</Link>
      </nav>
      {randomArtPiece && (
        <Spotlight
          image={randomArtPiece.imageSource}
          artist={randomArtPiece.artist}
        />
      )}
    </div>
  );
}
