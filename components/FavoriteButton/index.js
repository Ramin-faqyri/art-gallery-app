import styled from "styled-components";
import HeartIcon from "@/public/heart.svg";

export function FavoriteButton() {
  return (
    <>
      <StyledFavoriteButton OnClick={}>
        <HeartIconStyled />
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
