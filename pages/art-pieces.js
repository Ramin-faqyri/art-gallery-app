import ArtPieces from "@/components/ArtPieces";
import { artworks } from "@/pages/index.js";

export default function ArtpiecesPage() {
  return (
    <div>
      <h1>Art Gallery App</h1>
      <ArtPieces pieces={artworks} />
    </div>
  );
}
