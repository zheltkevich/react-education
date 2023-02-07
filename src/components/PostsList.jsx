import React from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import PostItem from './PostItem';

const PostsList = ({ posts, title, remove }) => {
    if (!posts.length) {
        return (
            <h2 style={{textAlign: 'center'}}>Посты не найдены!</h2>
        )
    }

    return (
        <div className="posts-list">
            <h1 style={{ textAlign: 'center' }}>
                { title }
            </h1>
            <TransitionGroup>
            {
                posts.map((post, index) =>
                    <CSSTransition
                        key={post.id}
                        timeout={500}
                        classNames="post"
                    >
                        <PostItem
                            number={index + 1}
                            post={post}
                            title={'Cgbsdkbskdjghbvksdg'}
                            remove={remove}
                    />
                    </CSSTransition>
                )
            }
            </TransitionGroup>
        </div>
    );
};

export default PostsList;
