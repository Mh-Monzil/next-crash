import Comments from "@/app/components/Comments";
import getAllPosts from "@/lib/getAllPosts";
import getPost from "@/lib/getPost";
import getPostComments from "@/lib/getPostComment";
import React, { Suspense } from "react";

export const generateMetadata = async ({ params }) => {
  const { id } = params;
  const post = await getPost(id);

  return {
    title: post.title,
    description: post.description,
  };
};

const PostPage = async ({ params }) => {
  const { id } = params;
  const postPromise = getPost(id);
  const commentsPromise = getPostComments(id);

  //   const [post, comments] = await Promise.all([postPromise, commentsPromise]);

  const post = await postPromise;

//   console.log(comments);

  return (
    <div className="mt-6 px-20">
      <p className="text-3xl font-bold">{post.id}.</p>
      <h2 className="text-2xl text-teal-500 pb-3">Title: {post.title}</h2>
      <p>Description: {post.body}</p>

      <Suspense fallback="<h1>Loading comments...</h1>"></Suspense>
      <Comments commentsPromise={commentsPromise} />
    </div>
  );
};

export default PostPage;


export const generateStaticParams = async () => {
    const posts = await getAllPosts();
    
    return [
        posts.map(post => ({
            id: post.id.toString(),
        }))
    ]
}