import ArtPieces from "@/components/ArtPieces";
import Navigation from "@/components/Navigation";

export default function ArtPiecesPage({ artworks }) {
  console.log("artPiecesPage", artworks);
  return (
    <div>
      <h1>Art Gallery App</h1>
      <Navigation />
      <p>list of all art-pieces</p>
      <ArtPieces pieces={artworks} />
    </div>
  );
}
