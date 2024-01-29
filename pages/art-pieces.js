import ArtPieces from "@/components/ArtPieces";

export default function ArtPiecesPage({ artworks }) {
  console.log("artPiecesPage", artworks);
  return (
    <div>
      <h1>Art Gallery App</h1>
      <p>list of all art-pieces</p>
      <ArtPieces pieces={artworks} />
    </div>
  );
}
