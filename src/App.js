import React from "react";
import Header from "./components/Header";
import Post from "./components/Post";
import Footer from "./components/Footer";
import FAQ from "./components/FAQ";
import Comments from "./components/Comments";
import "./styles.css";

function App() {
    const posts = [
        {
            title: "Introducción a Sistemas Embebidos",
            content: `
Los sistemas embebidos son sistemas computacionales diseñados para realizar una función específica dentro de un dispositivo mayor. 
A diferencia de una computadora convencional, estos sistemas no están pensados para ejecutar múltiples programas, sino para cumplir 
una tarea concreta de manera eficiente, confiable y continua.

Ejemplo de la vida real:
Un sistema de frenos ABS en un automóvil, el cual monitorea constantemente la velocidad de las ruedas y actúa en tiempo real para evitar que se bloqueen.

Conexión con otros conceptos:
Los sistemas embebidos suelen trabajar junto con sensores, actuadores y, en muchos casos, con sistemas operativos de tiempo real (RTOS).
            `,
            image: "/sistemas.jpg"
        },
        {
            title: "Características principales de los Sistemas Embebidos",
            content: `
Los sistemas embebidos poseen características que los diferencian de otros sistemas computacionales:

• Función dedicada: realizan una tarea específica.
• Integración: están integrados dentro de un sistema mayor.
• Restricciones: trabajan con recursos limitados de memoria, energía y procesamiento.
• Autonomía: funcionan sin intervención humana constante.

Ejemplo de la vida real:
Un reloj digital que mantiene la hora exacta y activa alarmas automáticamente.

Conexión con otros conceptos:
Estas características hacen necesario el uso de software optimizado y, en aplicaciones críticas, el uso de RTOS.
            `,
            image: "/caracteristicas.jpg"
        },
        {
            title: "RTOS en Proyectos Embebidos",
            content: `
Un RTOS (Real-Time Operating System) es un sistema operativo diseñado para ejecutar tareas con tiempos de respuesta predecibles.
Su principal objetivo es garantizar que ciertas operaciones se realicen dentro de un límite de tiempo específico.

Ejemplo de la vida real:
En equipos médicos como un marcapasos, un RTOS garantiza que los impulsos eléctricos se generen en el momento adecuado.

Conexión con otros conceptos:
El RTOS complementa a los sistemas embebidos cuando se requieren respuestas en tiempo real y alta confiabilidad.
            `,
            image: "/rtos.jpg"
        }
    ];

    const faqs = [
        {
            question: "¿Qué es un sistema embebido?",
            answer: "Es un sistema computacional diseñado para realizar una función específica dentro de un dispositivo mayor."
        },
        {
            question: "¿Todos los sistemas embebidos usan RTOS?",
            answer: "No. Solo se utiliza RTOS cuando se requieren tiempos de respuesta estrictos."
        },
        {
            question: "¿Arduino es un sistema embebido?",
            answer: "Arduino es una plataforma de desarrollo, pero los proyectos creados con él sí son sistemas embebidos."
        },
        {
            question: "¿Qué lenguajes se usan en sistemas embebidos?",
            answer: "Principalmente C y C++, debido a su eficiencia y control del hardware."
        }
    ];

    const comments = [
        {
            author: "Ana López",
            text: "La explicación de los sistemas embebidos es muy clara y los ejemplos ayudan bastante a entender el tema."
        },
        {
            author: "Luis Hernández",
            text: "Me gustó la relación entre RTOS y aplicaciones médicas, se nota la importancia del tiempo real."
        },
        {
            author: "María González",
            text: "El contenido está bien estructurado y fácil de comprender, sobre todo la sección de características."
        }
    ];

    return (
        <div className="App">
            <Header />
            <main>
                {posts.map((post, index) => (
                    <Post
                        key={index}
                        title={post.title}
                        content={post.content}
                        image={post.image}
                    />
                ))}

                <FAQ faqs={faqs} />
                <Comments comments={comments} />
            </main>
            <Footer />
        </div>
    );
}

export default App;
