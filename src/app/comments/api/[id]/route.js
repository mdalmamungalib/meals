// export async function GET(request, {params}) {
//     console.log(params.id);
//     return Response.json({
//         message: "dynamic get method"
//     })

// }

// export async function PATCH(request, { params }) {
//   const body = await request.json();
//   const index = comments.findIndex(
//     (c) => c.id === parseInt(params.id)
//   );
//   comments[index] = {
//     text: body.text,
//   };

//   return Response.json({
//     message: "Comments Update",
//     comments,
//   });
// }

export async function DELETE(request, { params }) {
  const newComments = comments.filter(
    (c) => c.id !== parseInt(params.id)
  );
  return Response.json({
    message: "Comments Delete",
    newComments,
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
