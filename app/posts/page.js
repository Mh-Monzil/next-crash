import getAllPosts from '@/lib/getAllPosts';
import Link from 'next/link';
import React from 'react';

const page = async () => {
    const posts = await getAllPosts();
    // console.log(posts);
    return (
        <div className='mt-6'>
            <h1 className='text-3xl font-bold text-rose-500'>All Posts</h1>

            <div className='grid grid-cols-2 gap-6 mt-6'>
            {
                posts.map((post) => <Link key={post.id} href={`/posts/${post.id}`} className='p-6 border-2 border-rose-500 rounded-xl'>
                    <p className='text-3xl font-bold'>{post.id}.</p>
                    <h2 className='text-2xl text-teal-500 pb-3'>Title: {post.title}</h2>
                    <p>Description: {post.body}</p>

                </Link>)
            }
            </div>
        </div>
    );
};

export default page;