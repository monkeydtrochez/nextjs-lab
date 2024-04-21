import "server-only";
export const serverSideFunction = () => {
  console.log(
    `Use multple libraries,
        use environment variables,
        interact with a database,
        process confidential information`
  );

  return "server result";
};
