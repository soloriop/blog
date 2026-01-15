import React from "react";

function FAQ({ faqs }) {
    return (
        <section className="faq">
            <h2>Preguntas Frecuentes</h2>
            {faqs.map((faq, index) => (
                <div key={index} className="faq-item">
                    <h4>{faq.question}</h4>
                    <p>{faq.answer}</p>
                </div>
            ))}
        </section>
    );
}

export default FAQ;
