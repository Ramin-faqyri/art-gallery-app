import ArtPieces from "@/components/ArtPieces";
import Navigation from "@/components/Navigation";
import Link from "next/link";

export default function ArtPiecesPage({ artworks }) {
  console.log("artPiecesPage", artworks);
  return (
    <div>
      <h1>Art Gallery App</h1>
      <Navigation />
      <p>list of all art-pieces</p>
      <Link href="./art-pieces/">
        <ArtPieces pieces={artworks} />
      </Link>
    </div>
  );
}
