import ArtPieces from "@/components/ArtPieces";
import Navigation from "@/components/Navigation";
import Link from "next/link";
import styled from "styled-components";

export default function ArtPiecesPage({ artworks }) {
  console.log("artPiecesPage", artworks);
  return (
    <div>
      <StyledH1>Art Gallery App</StyledH1>
      <Navigation />
      <StyledH3>list of all art-pieces</StyledH3>
      <Link href="./art-pieces/">
        <ArtPieces pieces={artworks} />
      </Link>
    </div>
  );
}

const StyledH1 = styled.h1`
  text-align: center;
`;

const StyledH3 = styled.h3`
  margin-top: 3rem;
  margin-bottom: 2.5rem;
  text-align: center;
`;
