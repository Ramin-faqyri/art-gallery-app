import Image from "next/image";
import styled from "styled-components";

export default function ArtPiecePreview({ image, title, artist }) {
  console.log("url", { image });
  return (
    <StyledArtPreviewBox>
      <h3>{title}</h3>
      <p>{artist}</p>
      <StyledImagePreview
        src={image}
        width={300}
        height={300}
        //style={{ width: "300px", height: "auto" }}
      />
    </StyledArtPreviewBox>
  );
}

const StyledImagePreview = styled(Image)`
  width: 300;
  height: auto;
  padding: 2rem;
  border-radius: 10px;
  margin-bottom: 3rem;
`;

const StyledArtPreviewBox = styled.div`
  border: 0 black;
  border-radius: 12px;
  padding: 1rem 1rem 1rem 1rem;
  margin: 1.3rem;
  text-align: center;

  background-color: white;
`;

// img ist eigentlich nicht gewuencht. Next will eigentlich eine Next-Image-Komponente Image
//       <img src={image} width={300}></img>
// - musste in next.config ergänzt werden, wegen remote bildern von ext server
// - Image Module von next war falsch importiert
