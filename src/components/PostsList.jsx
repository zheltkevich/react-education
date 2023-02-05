import React from "react";
import PostItem from './PostItem';


const PostsList = ({ posts, title }) => {


    return (
        <div className="posts-list">
            <h1 style={{ textAlign: 'center' }}>
                { title }
            </h1>
            {
                posts.map((post, index) => {
                    return <PostItem
                        number={index + 1}
                        post={post}
                        title={'Cgbsdkbskdjghbvksdg'}
                        key={post.id}>
                    </PostItem>
                })
            }
        </div>
    );
};

export default PostsList;
