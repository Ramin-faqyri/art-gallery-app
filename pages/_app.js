import GlobalStyle from "../styles";
import { SWRConfig } from "swr";
import useSWR from "swr";
import { Layout } from "@/components/Layout";
import { Provider, useAtom } from "jotai";
import { artPiecesInfoAtom } from "@/states/atom.js";

const fetcher = (...args) => fetch(...args).then((res) => res.json());
// const [artPiecesInfo, setArtPiecesInfo] = useAtom(null);
// console.log("atom", artPiecesInfo);

export default function App({ Component, pageProps }) {
  const URL = `https://example-apis.vercel.app/api/art`;
  const { data: artworks, error, isLoading } = useSWR(URL, fetcher);
  handleSetArtPiecesInfo();
  function handleSetArtPiecesInfo() {
    const [artPiecesInfo, SetArtPiecesInfo] = useAtom(artPiecesInfoAtom);
    SetArtPiecesInfo(artworks);
    console.log("artworks after passed to artPieceInfo", artPiecesInfo);
  }

  // if (isLoading || !artworks) return <p>is loading...</p>;
  // if (error) return <p>error</p>;

  return (
    <>
      <Provider>
        <Layout>
          <GlobalStyle />
          <SWRConfig value={{ fetcher }}>
            <Component
              artworks={isLoading || error ? [] : artworks}
              {...pageProps}
            />
          </SWRConfig>
        </Layout>
      </Provider>
    </>
  );
}
