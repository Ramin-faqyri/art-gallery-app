import { ArtPieceDetails } from "@/components/ArtPieceDetails";
import { useRouter } from "next/router";

const router = useRouter();
const { slug } = router.query;

export default function ArtPiecesDetailRender() {
  return (
    <>
      <ArtPieceDetails />
    </>
  );
}
