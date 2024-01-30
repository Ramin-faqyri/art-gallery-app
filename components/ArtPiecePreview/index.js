import Image from "next/image";
import styled from "styled-components";

export default function ArtPiecePreview({ image, title, artist }) {
  console.log("url", { image });
  return (
    <>
      <h1>{title}</h1>
      <p>{artist}</p>
      <StyledImagePreview
        src={image}
        width={300}
        height={300}
        //style={{ width: "300px", height: "auto" }}
      />
    </>
  );
}

const StyledImagePreview = styled(Image)`
  width: 300;
  height: auto;
  padding: 2rem;
  border-radius: 10px;
`;

// img ist eigentlich nicht gewuencht. Next will eigentlich eine Next-Image-Komponente Image
//       <img src={image} width={300}></img>
// - musste in next.config ergänzt werden, wegen remote bildern von ext server
// - Image Module von next war falsch importiert
