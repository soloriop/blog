import Container from '@mui/material/Container';

import AppTheme from '../shared-theme/AppTheme';
import MainContent from '../components/MainContent';
import Latest from '../components/Latest';
import Footer from '../components/Footer';
import AppAppBar from '../components/AppAppBar';



function Blog(props) {
    return (
        <AppTheme {...props}>
            <AppAppBar />
            <Container
                maxWidth="lg"
                component="main"
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    mt: 12,
                    mb: 8,
                    gap: 4,
                }}
            >
                <MainContent />
                <Latest />
            </Container>
            <Footer />
        </AppTheme>
    );
}

export default Blog;
