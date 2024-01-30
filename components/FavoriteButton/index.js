import styled from "styled-components";
import HeartIcon from "@/public/heart.svg";
import { useAtom } from "jotai";
import { likedArtworkAtom } from "@/pages/states/atom";

// const onClick = () => setArtPiecesInfo((prev) => prev + 1);

export function FavoriteButton() {
  const [artPiecesInfo, setArtPiecesInfo] = useAtom(likedArtworkAtom);
  function handleOnClickFavoriteButton() {
    setArtPiecesInfo((prev) => prev + 1);
    //      onClick={() => setArtPiecesInfo((prev) => prev + 1)}
  }
  return (
    <>
      <StyledFavoriteButton type="button" onClick={handleOnClickFavoriteButton}>
        <HeartIconStyled />
        <span>{artPiecesInfo}</span>
      </StyledFavoriteButton>
    </>
  );
}

const StyledFavoriteButton = styled.button`
  background-color: transparent;
  border: 2px black;
  position: absolute;
  right: 34vw;
  top: 31vh;
  width: 3rem;
  cursor: pointer;
`;

const HeartIconStyled = styled(HeartIcon)`
  color: white;
  background-color: transparent;
  path {
    fill: white;
    stroke: black;
    stroke-width: 1;
  }
`;
