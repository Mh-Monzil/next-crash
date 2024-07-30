import React from 'react';

const getPostComments = async (id) => {
    const result = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}/comments?_limit=5`,
        {
            next: {
                revalidate: 10,
            }
        }
    )

    if(!result.ok){
        throw new Error("There was an error fetching posts")
    }

    return result.json();
};

export default getPostComments;