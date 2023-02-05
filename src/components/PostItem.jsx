import React from "react";
import AppButton from '../components/ui/button/AppButton'

const PostItem = (props) => {
    const removePost = () => {
        props.remove(props.post);
    }

    return (
        <div className="post">
            <div className="post__content">
                <h3>{props.number}. {props.post.title}</h3>
                <p>{props.post.description}</p>
            </div>
            <div className="post__buttons">
                <AppButton onClick={removePost} type="button">Удалить</AppButton>
            </div>
        </div>
    );
};

export default PostItem;
