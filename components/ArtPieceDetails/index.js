import Image from "next/image";
import styled from "styled-components";
import { FavoriteButton } from "../FavoriteButton";
import { useRouter } from "next/router";

export function ArtPieceDetails({ imageSource, title, artist, year, genre }) {
  console.log(imageSource);
  // style = {{width: value , height: value}}
  console.log("titel", title);
  const router = useRouter();
  const handleGoBack = () => {
    router.back();
  };
  return (
    <>
      <DetailsPageBox>
        <ArtPieceDetailImage
          src={imageSource}
          width={300}
          height={300}
          //style={{ width: "300px", height: "auto" }}
          //fill={true}
        />
        <FavoriteButton />

        <DetailsInfoBox>
          <p>
            Title:
            <br />
            {title}
            <br />
            <br />
            Artist:
            <br />
            {artist}
          </p>

          <p>
            Year:
            <br />
            {year}
            <br />
            Genre:
            <br />
            {genre}
          </p>
        </DetailsInfoBox>
        <br />
        <StyledButton onClick={handleGoBack}>{`>>>> Go Back`}</StyledButton>
      </DetailsPageBox>
    </>
  );
}

const ArtPieceDetailImage = styled(Image)`
  width: 20rem;
  height: auto;
  padding: 2rem;
`;
const DetailsPageBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const DetailsInfoBox = styled.div`
  margin-top: 2rem;
  background-color: white;
  border-radius: 12px;
  width: 300px;
  margin-bottom: 2rem;
  padding-top: 2rem;
  padding-left: 2rem;
`;

const StyledButton = styled.button`
  border: 0;
  border-radius: 12px;
  background-color: lightgreen;
  color: deeppink;
  font-weight: bold;
  letter-spacing: 0.3rem;
  padding: o.3rem;
  margin: 3rem;
  height: 10vh;
`;
