import Image from "next/image";

export default function Spotlight({ image, artist }) {
  return (
    <>
      <h2>Random Art Piece</h2>
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
