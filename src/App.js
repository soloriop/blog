import React from "react";
import Header from "./components/Header";
import Post from "./components/Post";
import Footer from "./components/Footer";
import "./styles.css";

function App() {
    const posts = [{
        title: "Introducción a Sistemas Embebidos",
        content: "Los sistemas embebidos son\n" + "sistemas informáticos especializados, integrados en dispositivos más grandes, diseñados para realizar tareas específicas de manera eficiente, como el control de frenos ABS en un coche, un microondas o un smartwatch, a diferencia de las computadoras de propósito general que son versátiles. Estos sistemas combinan hardware y software dedicados para una función concreta, optimizando recursos como memoria y energía para operar de forma autónoma y fiable dentro de sus limitaciones. "
    }, {
        title: "Caracteristicas principales",
        content: "Función dedicada: Realizan una o pocas tareas específicas, no son para uso general. \n Integración: Están \"embebidos\" o incrustados dentro de un producto o sistema mayor. \n Restricciones: Diseñados bajo limitaciones de recursos (procesamiento, memoria, energía) y tiempo real. \n Autonomía: Operan de forma independiente una vez configurados, aunque forman parte de un sistema más grande"
    }, {
        title: "RTOS en proyectos embebidos",
        content: "son\n" +
            "dispositivos dedicados que utilizan un software especializado para gestionar tareas con plazos estrictos, garantizando respuestas rápidas y predecibles, cruciales para aplicaciones críticas como medicina o automoción, a diferencia de Windows o Linux que no garantizan tiempos de respuesta; FreeRTOS y Zephyr son ejemplos populares, ofreciendo gestión de tareas, temporizadores y comunicación inter-tarea. "
    }, {title: ""},];

    return (<div className="App">
            <Header/>
            <main>
                {posts.map((p, i) => (<Post key={i} title={p.title} content={p.content}/>))}
            </main>
            <Footer/>
        </div>);
}

export default App;
