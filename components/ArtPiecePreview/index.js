import { artworks } from "@/components/ArtPieces/index.js";
import Image from "next";

export default function ArtPiecePreview({ image, title, artist }) {
  const imgSrc = image.src;
  console.log(image);
  return (
    <>
      <h1>{title}</h1>
      <p>{artist}</p>
      <Image src={imgSrc} />
    </>
  );
}
