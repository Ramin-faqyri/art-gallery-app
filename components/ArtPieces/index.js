import ArtPiecePreview from "../ArtPiecePreview";
import Link from "next/link";
import { FavoriteButton } from "../FavoriteButton";

export default function ArtPieces({ pieces }) {
  return (
    <ul>
      {pieces?.map((piece) => {
        return (
          <li key={piece.slug}>
            <Link href={`/art-pieces/${piece.slug}`}>
              <ArtPiecePreview
                image={piece.imageSource}
                title={piece.name}
                artist={piece.artist}
              />
              <FavoriteButton />
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
