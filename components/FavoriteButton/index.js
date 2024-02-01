import styled from "styled-components";
import HeartIcon from "@/public/heart.svg";
import { useAtom } from "jotai";
import { likedArtworkCounterAtom, isLikedAtom } from "@/states/atom";

// const onClick = () => setArtPiecesInfo((prev) => prev + 1);

export function FavoriteButton() {
  const [likedArtworkCounter, setLikedArtworkCounter] = useAtom(
    likedArtworkCounterAtom
  );
  const [isLikedValue, setIsLikedValue] = useAtom(isLikedAtom);

  function handleOnClickFavoriteButton() {
    setLikedArtworkCounter((prev) => prev + 1);
    //      onClick={() => setLikedArtwork((prev) => prev + 1)}
    handleToggleIsLiked();
  }
  function handleToggleIsLiked() {
    setIsLikedValue((prev) => {
      return !prev;
    });
  }

  return (
    <>
      <StyledFavoriteButton type="button" onClick={handleOnClickFavoriteButton}>
        <HeartIconStyled isLikedValue={isLikedValue} />
        <span>{likedArtworkCounter}</span>
      </StyledFavoriteButton>
    </>
  );
}

const StyledFavoriteButton = styled.button`
  background-color: transparent;
  border: 2px black;
  position: absolute;
  right: 30vw;
  top: 31vh;
  width: 3rem;
  cursor: pointer;
`;

const HeartIconStyled = styled(HeartIcon)`
  path {
    fill: ${({ isLikedValue }) => {
      console.log("isLikedTrueOrFalse?", isLikedValue);
      return isLikedValue ? "red" : "white";
    }};
    stroke: black;
    stroke-width: 1;
  }
`;
