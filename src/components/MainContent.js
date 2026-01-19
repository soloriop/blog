import React from "react";
import PropTypes from "prop-types";
import {
    Avatar,
    AvatarGroup,
    Box,
    Card,
    CardContent,
    CardMedia,
    Chip,
    Grid,
    Typography,
    FormControl,
    InputAdornment,
    OutlinedInput,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";

const cardData = [
    {
        title: "Introducción a Sistemas Embebidos \n",
        description: "Blog dedicado a los sistemas embebidos \n Publicaremos semalalmente contenido relacionado con la clase de sistemas embebidos",
        img: "/sistemas.jpg",
        tag: "Sistemas Embebidos",
        authors: [{ name: "Carlos Solorio", avatar: "" }],
    },
    {
        title: "Características de los sistemas embebidos",
        description: "\n" +
            "\n" +
            "    Realizan funciones específicas: Están diseñados para llevar a cabo tareas altamente especializadas.\n" +
            "\n" +
            "    Funcionan prolongadamente: Están diseñados para operar de manera continua durante largos períodos de tiempo sin interrupciones. Esta facultad es esencial para muchas aplicaciones.\n" +
            "\n" +
            "    Inician rápidamente: Tienen la capacidad para arrancar de manera rápida y estar listos para funcionar en un tiempo mínimo. La rapidez con la que un sistema embebido puede ponerse en marcha es vital en situaciones donde se necesita una respuesta inmediata.\n" +
            "\n" +
            "    Son eficientes energéticamente: Están optimizados para consumir la menor cantidad de energía posible. Es importante sobre todo en aplicaciones que funcionan con baterías o fuentes de energía limitadas.\n" +
            "\n" +
            "    Destacan por su confiabilidad: La fiabilidad es una característica clave de los sistemas embebidos, ya que se espera que funcionen sin fallos en entornos críticos (como los relacionados a la salud o la seguridad).\n" +
            "\n" +
            "    Es limitado en recursos: Suelen contar con recursos limitados en términos de memoria, capacidad de procesamiento y almacenamiento.\n",
        img: "/arduino.jpg",
        tag: "Hardware",
        authors: [{ name: "Carlos Solorio", avatar: "/pikachu.jpg" }],
    },
    {
        title: "RTOS",
        description: "Real-Time Operating System  \n " +
            "un sistema operativo diseñado específicamente para gestionar los recursos de un procesador y ejecutar tareas con restricciones de tiempo precisas, determinismo y alta fiabilidad. A diferencia de los sistemas operativos de propósito general (como Windows o Linux), un RTOS garantiza que las tareas críticas se completen dentro de un plazo estricto. ",
        img: "/asd.jpg",
        tag: "Software",
        authors: [{ name: "Carlos Solorio", avatar: "/pikachu.jpg" }],
    },
    {
        title: "Componentes de un sistema embebido",
        description: "Un sistema embebido incluye\n" +
            "\n" +
            "    Microprocesador: Este componente actúa como el núcleo del sistema. Es un chip diseñado específicamente para tareas embebidas. Controla todas las operaciones, ejecuta instrucciones y gestiona los recursos del sistema de manera eficiente.\n" +
            "\n" +
            "    Memoria: Hay dos tipos de memoria en un sistema embebido. La memoria RAM (Random Access Memory) se utiliza para almacenar datos temporales y variables de trabajo. La memoria flash, por otro lado, almacena programas y datos permanentes, como el software del sistema y la configuración.\n" +
            "\n" +
            "    Periféricos: Son dispositivos adicionales conectados al sistema embebido, lo cuales permiten la interacción con el entorno. Abarcan elementos como sensores para recopilar datos del entorno, actuadores para realizar acciones físicas, y dispositivos de entrada/salida para interactuar con los usuarios.\n" +
            "\n" +
            "    Software: Es la parte inteligente del sistema. Comprende el conjunto de programas y algoritmos que definen las funciones específicas del sistema embebido. Este software dicta cómo el sistema responde y se comporta.\n" +
            "\n" +
            "    Fuente de poder: Proporciona la energía necesaria para que el sistema funcione correctamente. Puede ser una batería, un adaptador de corriente o cualquier otra fuente de energía diseñada para el sistema en particular.\n" +
            "\n" +
            "    Circuito de reloj: Es el responsable de sincronizar las operaciones del sistema. Define el ritmo al que el microprocesador ejecuta instrucciones y coordina el funcionamiento de todos los componentes para garantizar un rendimiento apropiado.\n",
    img: "/Componentes.jpg",
    tag: "Hardware",
    authors: [{name: "Carlos Solorio", avatar: "/pikachu.jpg"}]},
];

const StyledCard = styled(Card)(() => ({
    display: "flex",
    flexDirection: "column",
    height: "100%",
    cursor: "pointer",
}));

const StyledCardContent = styled(CardContent)({
    flexGrow: 1,
});

function Author({ authors }) {
    return (
        <Box sx={{ display: "flex", gap: 1, p: 2 }}>
            <AvatarGroup max={3}>
                {authors.map((a, i) => (
                    <Avatar key={i} alt={a.name} src={a.avatar} />
                ))}
            </AvatarGroup>
            <Typography variant="caption">
                {authors.map((a) => a.name).join(", ")}
            </Typography>
        </Box>
    );
}

Author.propTypes = {
    authors: PropTypes.array.isRequired,
};

export function Search() {
    return (
        <FormControl variant="outlined" fullWidth>
            <OutlinedInput
                size="small"
                placeholder="Buscar…"
                startAdornment={
                    <InputAdornment position="start">
                        <SearchRoundedIcon fontSize="small" />
                    </InputAdornment>
                }
            />
        </FormControl>
    );
}

export default function MainContent() {
    return (
        <Box sx={{ maxWidth: 1200, mx: "auto", p: 4, mt: 12 }}>
            <Typography variant="h3" gutterBottom>
                Sistemas Embebidos
            </Typography>

            {/* Barra de búsqueda debajo del AppBar */}
            <Box sx={{ mb: 4 }}>
                <Search />
            </Box>

            <Grid container spacing={3}>
                {cardData.map((card, index) => (
                    <Grid item xs={12} md={4} key={index}>
                        <StyledCard>
                            <CardMedia
                                component="img"
                                image={card.img}
                                sx={{ aspectRatio: "16 / 9" }}
                            />
                            <StyledCardContent>
                                <Chip label={card.tag} size="small" />
                                <Typography variant="h6">{card.title}</Typography>
                                <Typography variant="body2">{card.description}</Typography>
                            </StyledCardContent>
                            <Author authors={card.authors} />
                        </StyledCard>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}
