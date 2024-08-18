export async function GET() {
  return Response.json(comments, {
    headers: {
      "set-cookie" : "theme=dark",
    },
  });
}

export async function POST(request) {
  const newComments = await request.json();
  comments.push({
    id: comments.length + 1,
    text: newComments.text,
  });
  return Response.json({
    message: "New comment added successfully!",
    comments,
  });
}

const comments = [
  {
    id: 1,
    text: "Nice post!",
  },
  {
    id: 2,
    text: "I agree!",
  },
  {
    id: 3,
    text: "I get",
  },
];
