import { redirect } from "next/navigation";
import { comments } from "../data";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  if (parseInt(params.id) > comments.length) {
    redirect("/api/comments");
  }
  const comment = comments.find(
    (comment) => comment.id === parseInt(params.id)
  );
  return Response.json(comment);
}

export async function PATCH(
  request: Request,
  { params }: { params: { id: string } }
) {
  const { text } = await request.json();
  const commentIndexToUpdate = comments.findIndex(
    (comment) => comment.id === parseInt(params.id)
  );
  comments[commentIndexToUpdate].text = text;

  return Response.json(comments);
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  const commentIndexToDelete = comments.findIndex(
    (comment) => comment.id === parseInt(params.id)
  );

  const commentToDelete = comments[commentIndexToDelete];
  comments.splice(commentIndexToDelete, 1);
  return Response.json(commentToDelete);
}
