import {AppBar, Box, Button, Toolbar, Typography, Container} from "@mui/material"

function Navbar(){
    return(
        <>
            <AppBar position="static" elevation={0} sx={{backgroundColor:'#ffffff', color: '#1f2440'}}>
                <Container maxWidth='lg'>
                    <Toolbar disableGutters>
                        <Box sx={{display: "flex", alignItems: 'center', flexGrow: 1, gap: 1}}>{/* logo */}
                            <Typography variant="h4" sx={{fontWeight: 'bold', color: '#7c4dff'}}>
                                N
                            </Typography>
                            <Typography variant="h6" sx={{fontWeight: 'bold', lineHeight: 1}}>
                                DevNova
                                <br/>
                                Solutions
                            </Typography>
                        </Box>
                        {/* navegacion */}
                        <Box sx={{display: 'flex', alignItems: 'center', gap: 1}}>
                            <Button sx={{color: '#1f2440'}}>Inicio</Button>
                            <Button sx={{color: '#1f2440'}}>Servicios</Button>
                            <Button sx={{color: '#1f2440'}}>Quiénes somos</Button>
                            <Button sx={{color: '#1f2440'}}>Proyectos</Button>
                            <Button sx={{color: '#1f2440'}}>Tecnologías</Button>
                            <Button sx={{color: '#1f2440'}}>Contacto</Button>

                            <Button variant="contained" sx={{ml: 2, backgroundColor: '#7c4dff', textTransform: 'none', borderRadius: 2}}>
                                Solicitar cotizacíon →
                            </Button>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </>
    )
}

export default Navbar