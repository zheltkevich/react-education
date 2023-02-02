import React from "react";

const PostItem = (props) => {
    console.log(props);

    return (
        <div className="post">
            <div className="post__content">
                <h3>{props.post.id}. {props.post.title}</h3>
                <p>{props.post.description}</p>
            </div>
            <div className="post__buttons">
                <button type="button">Удалить</button>
            </div>
        </div>
    );
};

export default PostItem;
