"use client";
import { notFound } from "next/navigation";

function getRandomInt(count: number) {
  return Math.floor(Math.random() * count);
}

export default function ReviewDetails({
  params,
}: {
  params: {
    productId: string;
    reviewId: string;
  };
}) {
  const randomNumber = getRandomInt(2);

  if (randomNumber === 1) {
    throw new Error(
      `Something unexpected happened when loading reivew: ${params.reviewId}`
    );
  }

  if (parseInt(params.reviewId) > 1000) {
    notFound();
  }

  return (
    <h1>
      Product: {params.productId} review details about review by id:{" "}
      {params.reviewId}
    </h1>
  );
}
