import Image from "next/image";
import styled from "styled-components";

export function ArtPieceDetails({ imageSource, title, artist, year, genre }) {
  console.log(imageSource);
  // style = {{width: value , height: value}}
  console.log("titel", title);
  return (
    <>
      <ArtPieceDetailImage
        src={imageSource}
        width={300}
        height={300}
        //style={{ width: "300px", height: "auto" }}
        //fill={true}
      />
      <DetailsBox>
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
      </DetailsBox>
    </>
  );
}

const ArtPieceDetailImage = styled(Image)`
  width: 300px;
  height: auto;
  padding: 2rem;
`;

const DetailsBox = styled.div`
  margin-top: 2rem;
  background-color: white;
  border-radius: 12px;
  width: 20rem;
  margin-bottom: 2rem;
  padding-top: 2rem;
  padding-left: 2rem;
`;
