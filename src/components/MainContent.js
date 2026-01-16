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
    IconButton,
    Typography,
    FormControl,
    InputAdornment,
    OutlinedInput,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import RssFeedRoundedIcon from "@mui/icons-material/RssFeedRounded";

const cardData = [
    {
        title: "Introducción a Sistemas Embebidos",
        description: "Sistemas diseñados para realizar una función específica.",
        img: "/sistemas.jpg",
        tag: "Sistemas",
        authors: [{ name: "Carlos Solorio", avatar: "" }],
    },
    {
        title: "Características",
        description: "Función dedicada, integración y eficiencia.",
        img: "/arduino.jpg",
        tag: "Hardware",
        authors: [{ name: "Carlos Solorio", avatar: "" }],
    },
    {
        title: "RTOS",
        description: "Control del tiempo real en sistemas críticos.",
        img: "/asd.jpg",
        tag: "Software",
        authors: [{ name: "Carlos Solorio", avatar: "" }],
    },
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
                {authors.map(a => a.name).join(", ")}
            </Typography>
        </Box>
    );
}

Author.propTypes = {
    authors: PropTypes.array.isRequired,
};

export function Search() {
    return (
        <FormControl variant="outlined">
            <OutlinedInput
                size="small"
                placeholder="Search…"
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
        <Box sx={{ maxWidth: 1200, mx: "auto", p: 4 }}>
            <Typography variant="h3" gutterBottom>
                Blog
            </Typography>

            <Box sx={{ display: "flex", gap: 2, mb: 4 }}>
                <Search />
                <IconButton>
                    <RssFeedRoundedIcon />
                </IconButton>
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
                                <Typography variant="body2">
                                    {card.description}
                                </Typography>
                            </StyledCardContent>
                            <Author authors={card.authors} />
                        </StyledCard>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}
