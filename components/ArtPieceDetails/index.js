import Image from "next/image";
import styled from "styled-components";
import { FavoriteButton } from "../FavoriteButton";

export function ArtPieceDetails({ imageSource, title, artist, year, genre }) {
  console.log(imageSource);
  // style = {{width: value , height: value}}
  console.log("titel", title);
  return (
    <>
      <DetailsBox>
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
      </DetailsBox>
    </>
  );
}

const ArtPieceDetailImage = styled(Image)`
  width: 20rem;
  height: auto;
  padding: 2rem;
`;
const DetailsBox = styled.div`
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
