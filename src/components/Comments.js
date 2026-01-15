import React from "react";

function Comments({ comments }) {
    return (
        <section className="comments">
            <h2>Comentarios de Compañeros</h2>
            {comments.map((comment, index) => (
                <div key={index} className="comment">
                    <strong>{comment.author}</strong>
                    <p>{comment.text}</p>
                </div>
            ))}
        </section>
    );
}

export default Comments;
