import Image from "next/image";

export function ArtPieceDetails({ image, title, artist, year, genre }) {
  return (
    <>
      <Image src={image} />
      <p>
        {title}
        {artist}
      </p>
      <p>
        {year}
        {genre}
      </p>
    </>
  );
}
