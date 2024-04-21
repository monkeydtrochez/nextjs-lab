import { setDefaultHighWaterMark } from "stream";

export default function Docs({
  params,
}: {
  params: {
    slug: string[];
  };
}) {
  var slugsFromRoute = params.slug.join("/");

  return <h1>Docs home page with the following slugs: {slugsFromRoute}</h1>;
}
