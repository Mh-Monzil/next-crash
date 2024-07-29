import Link from "next/link";
import React from "react";

const BlogsPage = () => {
  const blogs = [
    {
      id: 1,
      title: "Blog 1",
      description: "Blog 1 description",
    },
    {
      id: 2,
      title: "Blog 2",
      description: "Blog 2 description",
    },
  ];
  return (
    <div>
      <h2 className="text-4xl text-center">Blog Page</h2>
      <ul>
        {blogs.map((blog) => (
          <Link href={`/blogs/${blog.id}`} key={blog.id} className="block text-lg font-bold">{blog.title}</Link>
        ))}
      </ul>
    </div>
  );
};

export default BlogsPage;
