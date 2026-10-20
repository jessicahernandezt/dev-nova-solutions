import {Box, Button, Container, Typography, Card, CardActions, CardContent, CardMedia} from '@mui/material'

function Proyectos() {
    return(
        <Box sx={{minHeight: '520px', display: 'flex', alignItems: 'center', backgroundColor: '#f7f7ff', py: 1}}>
            <Container maxWidth='lg'>
                <Box sx={{/*display: 'flex', alignItems: 'center', gap: 3, backgroundImage: 'url("/img (8).png")', objectFit: 'contain', minHeight:'500px'*/}}>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            sx={{ height: 140 }}
                            image="/img (8).png"
                            title="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                            Lizard
                            </Typography>
                            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            Lizards are a widespread group of squamate reptiles, with over 6,000
                            species, ranging across all continents except Antarctica
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small" sx={{backgroundColor:'gray', borderRadius:'50px'}}>Share</Button>
                            <Button size="small">Learn More</Button>
                        </CardActions>
                        <CardActions>
                            <Button size="small">Share</Button>
                            <Button size="small">Learn More</Button>
                        </CardActions>
                    </Card>
                </Box>
            </Container>
        </Box>
    )
}

export default Proyectos