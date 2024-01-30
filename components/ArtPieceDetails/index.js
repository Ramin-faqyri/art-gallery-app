import Image from "next/image";

export function ArtPieceDetails({ imageSource, title, artist, year, genre }) {
  console.log(imageSource);
  // style = {{width: value , height: value}}
  return (
    <>
      <Image
        src={imageSource}
        //width={300}
        // height={300}
        //style={{ width: "300px", height: "auto" }}
        fill={true}
      />
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
