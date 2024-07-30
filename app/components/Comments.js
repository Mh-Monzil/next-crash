import React from "react";

const Comments = async ({commentsPromise}) => {
    const comments = await commentsPromise;

  return (
    <div className="m-5 space-y-4">
      <h1 className="mb-5 text-3xl">Comments</h1>
      {comments.map((comment) => (
        <div key={comment.id} className=" border p-4 rounded-md">
          <h2 className="text-lg text-rose-400">Name: {comment.name}</h2>
          <h2 className="text-lg">Email: {comment.email}</h2>
          <h2>Description: {comment.body}</h2>
        </div>
      ))}
    </div>
  );
};

export default Comments;
