import Spotlight from "@/components/Spotlight";
import Navigation from "@/components/Navigation";

export default function HomePage({ artworks }) {
  const randomArtPiece = artworks
    ? artworks[Math.floor(Math.random() * artworks.length)]
    : null;

  return (
    <div>
      <h1>Art Gallery App</h1>
      <nav>
        <Navigation />
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
