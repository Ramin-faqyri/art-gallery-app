import { ArtPieceDetails } from "@/components/ArtPieceDetails";
import Navigation from "@/components/Navigation";
import { useRouter } from "next/router";

export default function ArtPiecesDetailRender({ artworks }) {
  const router = useRouter();
  console.log(artworks);
  const slug = router.query.slug;
  console.log(slug);

  const selectedArtwork = artworks.find((artwork) => {
    return artwork.slug === slug;
  });
  if (!selectedArtwork) {
    return null;
  }
  const { imageSource, name, artist, year, genre } = selectedArtwork;
  return (
    <>
      <Navigation />
      <ArtPieceDetails
        imageSource={imageSource}
        title={name}
        artist={artist}
        year={year}
        genre={genre}
      />
    </>
  );
}
