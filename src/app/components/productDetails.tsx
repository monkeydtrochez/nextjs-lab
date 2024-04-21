import { resolve } from "path";

interface Props {
  productIdValue: string;
}

export const ProductDetails = async (props: Props) => {
  await new Promise((resolve) => setTimeout(resolve, 4000));

  return <h1>Details about product by id: {props.productIdValue}</h1>;
};
