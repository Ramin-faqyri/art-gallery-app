import Link from "next/link";
import styled from "styled-components";

export default function Navigation() {
  return (
    <nav>
      <StyledLinks>
        <Link href="/">Spotlight</Link>
        <Link href="/art-pieces">Art Pieces</Link>
        <Link href="">Favorites</Link>
      </StyledLinks>
    </nav>
  );
}

const StyledLinks = styled.div`
  display: flex;
  justify-content: space-evenly;
`;
