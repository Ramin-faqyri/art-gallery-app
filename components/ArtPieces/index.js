import ArtPiecePreview from "../ArtPiecePreview";
import Link from "next/link";
import { FavoriteButton } from "../FavoriteButton";
import styled from "styled-components";

export default function ArtPieces({ pieces }) {
  return (
    <ul>
      {pieces?.map((piece) => {
        return (
          <StyledList key={piece.slug}>
            <Link href={`/art-pieces/${piece.slug}`}>
              <ArtPiecePreview
                image={piece.imageSource}
                title={piece.name}
                artist={piece.artist}
              />
            </Link>
            <FavoriteButton />
          </StyledList>
        );
      })}
    </ul>
  );
}

const StyledList = styled.li`
  list-style-type: none;
`;
