import React from "react";

function Post({ title, content, image }) {
    return (
        <article className="post">
            <h2>{title}</h2>
            <p>{content}</p>
            {image && <img src={image} alt={title} />}
        </article>
    );
}

export default Post;
