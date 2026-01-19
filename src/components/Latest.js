import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Pagination from '@mui/material/Pagination';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';

export default function Latest() {
    const Authors = [
        [
            { name: 'Carlos Solorio', avatar: '/pikachu.jpg' },
            { name: 'Remy Sharp', avatar: 'https://i.pravatar.cc/24?img=2' },
        ],
        [
            { name: 'Travis Howard', avatar: 'https://i.pravatar.cc/24?img=3' },
        ],
        [
            { name: 'Kate Morrison', avatar: 'https://i.pravatar.cc/24?img=4' },
            { name: 'Erica Johns', avatar: 'https://i.pravatar.cc/24?img=5' },
        ],
        [
            { name: 'Cindy Baker', avatar: 'https://i.pravatar.cc/24?img=6' },
        ],
    ];

    return (
        <Box>
            <Typography variant="h2" gutterBottom sx={{ mt: 12 }}>
                Las Últimas Publicaciones
            </Typography>
            <Grid container spacing={4} columns={12} sx={{ my: 4 }}>
                {[...Array(4)].map((_, index) => (
                    <Grid item xs={12} sm={6} md={6} key={index}>
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center',
                                height: 320,
                                p: 2,
                                borderRadius: 2,
                                boxShadow: 3,
                                bgcolor: 'background.paper',
                                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                                '&:hover': {
                                    transform: 'translateY(-4px)',
                                    boxShadow: 6,
                                },
                            }}
                        >
                            <img
                                src={`https://picsum.photos/400/200?random=${index}`}
                                alt="random"
                                style={{
                                    width: '100%',
                                    height: '200px',
                                    objectFit: 'cover',
                                    borderRadius: '8px',
                                    marginBottom: '12px',
                                }}
                            />
                            <Typography variant="body2" color="text.secondary" align="center" gutterBottom>
                                Placeholder de contenido #{index + 1}
                            </Typography>
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                    width: '100%',
                                    mt: 1,
                                }}
                            >
                                <AvatarGroup max={3}>
                                    {Authors[index].map((author, i) => (
                                        <Avatar
                                            key={i}
                                            alt={author.name}
                                            src={author.avatar}
                                            sx={{ width: 24, height: 24 }}
                                        />
                                    ))}
                                </AvatarGroup>
                                <Typography variant="caption" color="text.secondary">
                                    {Authors[index].map((a) => a.name).join(', ')}
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>
                ))}
            </Grid>
            <Box sx={{ display: 'flex', justifyContent: 'center', pt: 4 }}>
                <Pagination hidePrevButton hideNextButton count={10} boundaryCount={10} />
            </Box>
        </Box>
    );
}
