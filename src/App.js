import React from "react";
import Header from "./components/Header";
import Post from "./components/Post";
import Footer from "./components/Footer";
import "./styles.css";

function App() {
  const posts = [
    { title: "Introducción a Sistemas Embebidos", content: "Un repaso de qué son y dónde se usan." },
    { title: "Microcontroladores vs Microprocesadores", content: "Comparación práctica para proyectos." },
    { title: "RTOS en proyectos embebidos", content: "Ventajas de usar sistemas operativos en tiempo real." }
  ];

  return (
      <div className="App">
        <Header />
        <main>
          {posts.map((p, i) => (
              <Post key={i} title={p.title} content={p.content} />
          ))}
        </main>
        <Footer />
      </div>
  );
}

export default App;
