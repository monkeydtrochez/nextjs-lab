import { serverSideFunction } from "../utils/server-utils";

export default function ServerOnlyPage() {
  const result = serverSideFunction();
  return (
    <>
      <h1>ServerOnlyPage</h1>
      <p>{result}</p>
    </>
  );
}
