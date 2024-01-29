import Image from "next/image";
import styled from "styled-components";

export default function ArtPiecePreview({ image, title, artist }) {
  console.log("url", { image });
  return (
    <>
      <h1>{title}</h1>
      <p>{artist}</p>
      <Image
        src={image}
        width={300}
        height={300}
        style={{ width: "300px", height: "auto" }}
      />
    </>
  );
}
// img ist eigentlich nicht gewuencht. Next will eigentlich eine Next-Image-Komponente Image
//       <img src={image} width={300}></img>
// - musste in next.config ergänzt werden, wegen remote bildern von ext server
// - Image Module von next war falsch importiert
