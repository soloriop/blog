import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import InputLabel from '@mui/material/InputLabel';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/X';
import SitemarkIcon from './SitemarkIcon';

export default function Footer() {
    return (
        <React.Fragment>
            <Divider />
            <Container
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: { xs: 4, sm: 8 },
                    py: { xs: 8, sm: 10 },
                }}
            >
                {/* CONTENIDO SUPERIOR */}
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: { xs: 'column', sm: 'row' },
                        justifyContent: 'space-between',
                        gap: 4,
                    }}
                >
                    {/* NEWSLETTER */}
                    <Box sx={{ maxWidth: 400 }}>
                        <SitemarkIcon />
                        <Typography variant="body2" sx={{ fontWeight: 600, mt: 2 }}>
                            Únete al blog
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary', mb: 2 }}>
                            Suscríbete para recibir novedades sobre los sistemas embebidos
                        </Typography>

                        <InputLabel htmlFor="email-newsletter">Email</InputLabel>
                        <Stack direction="row" spacing={1}>
                            <TextField
                                id="email-newsletter"
                                size="small"
                                fullWidth
                                placeholder="Ingresa tu correo"
                            />
                            <Button variant="contained" size="small">
                                Suscribirse
                            </Button>
                        </Stack>
                    </Box>

                    {/* LINKS */}
                    <Box
                        sx={{
                            display: { xs: 'none', sm: 'flex' },
                            flexDirection: 'column',
                            gap: 1,
                        }}
                    >
                        <Typography variant="body2" sx={{ fontWeight: 500 }}>
                            Contenido
                        </Typography>
                        <Link color="text.secondary" variant="body2" href="#">
                            Introducción
                        </Link>
                        <Link color="text.secondary" variant="body2" href="#">
                            Características
                        </Link>
                        <Link color="text.secondary" variant="body2" href="#">
                            RTOS
                        </Link>
                        <Link color="text.secondary" variant="body2" href="#">
                            FAQ
                        </Link>
                    </Box>
                </Box>

                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        pt: 4,
                        borderTop: '1px solid',
                        borderColor: 'divider',
                    }}
                >
                    <Box>
                        <Link color="text.secondary" variant="body2" href="#">
                            Política de privacidad
                        </Link>
                        <Typography sx={{ display: 'inline', mx: 0.5, opacity: 0.5 }}>
                            •
                        </Typography>
                        <Link color="text.secondary" variant="body2" href="#">
                            Términos del servicio
                        </Link>
                    </Box>

                    <Stack direction="row" spacing={1} sx={{ color: 'text.secondary' }}>
                        <IconButton size="small" href="https://github.com/soloriop">
                            <GitHubIcon />
                        </IconButton>
                        <IconButton size="small" href="https://x.com">
                            <TwitterIcon />
                        </IconButton>
                        <IconButton size="small" href="https://www.linkedin.com/in/carlos-solorio-99716819b/">
                            <LinkedInIcon />
                        </IconButton>
                    </Stack>
                </Box>
            </Container>
        </React.Fragment>
    );
}
