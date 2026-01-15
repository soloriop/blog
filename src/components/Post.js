import React from "react";

export default function Post({ title, content }) {
    return (
        <article className="post">
            <h2>{title}</h2>
            <p>{content}</p>
        </article>
    );
}
