import useSWR from "swr";

const URL = `https://example-apis.vercel.app/api/art`;
const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function HomePage() {
  const { data, error, isLoading } = useSWR(URL, fetcher);

  if (isLoading || !data) return <p>is loading...</p>;
  if (error) return <p>error</p>;
  console.log(data);

  return (
    <div>
      <h1>Hello from Niko,Nicole and Ramin</h1>
      <p>{data[0].artist}</p>
    </div>
  );
}
