import React from 'react';

const BlogPage = ({params}) => {
    const {id} = params;
    return (
        <div>
            The blog id is : {id}
        </div>
    );
};

export default BlogPage;