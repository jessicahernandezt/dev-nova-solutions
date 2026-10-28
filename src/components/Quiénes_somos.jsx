import { ArrowForward } from '@mui/icons-material'
import AdUnitsIcon from '@mui/icons-material/AdUnits'
import CakeIcon from '@mui/icons-material/Cake'
import GroupsIcon from '@mui/icons-material/Groups'
import EditDocumentIcon from '@mui/icons-material/EditDocument'
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt'
import CodeOffIcon from '@mui/icons-material/CodeOff'
import CardContent from '@mui/material/CardContent';
import {Box, 
    Button, 
    Container,
    Typography,
    Card} from '@mui/material'

function Quiénes_somos() {   
    return(
        <Box>
            <Container>
                <Box sx={{display: "flex",
                    flexDirection: "row",
                    gap: "20px",
                    alignItems: "center"}}>
                    <Box sx={{width:'60%'}}>
                        <Typography sx={{display: "flex",
                                    flexDirection: "row",
                                    gap: "20px",
                                    alignItems: "center"}}>Quiénes somos</Typography>
                        <Typography sx={{
                            fontWeight:'bold',
                            fontSize:'25px',}}>
                            Un equipo que combierte ideas en impacto
                        </Typography>
                        <Typography sx={{display: "flex",
                                    flexDirection: "row",
                                    gap: "20px",
                                    alignItems: "center"}}>
                            Desarrollamos sofware a la medida para impulsar el crecimiento de tu negocio. Combinamos tecnologia, creatividad y experiencia para convertir tus ideas en productos visuales  
                         </Typography>
                         <Button variant='contained' sx={{
                                                        backgroundColor:'#7c4dff',
                                                        color: 'white',
                                                        gap: 1 }}>
                            Conoce mas sobre nocotros <ArrowRightAltIcon></ArrowRightAltIcon>

                         </Button>
                    
                    </Box>
                    <Box sx={{width:'33%'}}>
                        <Typography>WENAS</Typography>
                    </Box>
                    <Box sx={{width:'33%'}}>
                        <Box sx={{  display: 'flex',
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    
                                    width: '100%',
                                    gap: 1
                                }}>
                            <CakeIcon sx={{width: '14%', height:'14%'}}></CakeIcon>
                            <Box sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    
                                    alignItems: 'flex-start'}}>
                                <Typography sx={{ fontSize: '12px'}}>5+</Typography>
                                <Typography sx={{ fontSize: '12px'}}>Años de experiencia</Typography>

                            </Box>
                        </Box>
                        <Box sx={{  display: 'flex',
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    
                                    width: '100%',
                                    gap: 1
                                }}>
                            <EditDocumentIcon sx={{width: '14%', height:'14%'}}></EditDocumentIcon>
                            <Box sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    
                                    alignItems: 'flex-start'}}>
                                <Typography sx={{ fontSize: '12px'}}>50+</Typography>
                                <Typography sx={{ fontSize: '12px'}}>Proyectos completatos</Typography>

                            </Box>
                        </Box>
                        <Box sx={{  display: 'flex',
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    
                                    width: '100%',
                                    gap: 1
                                }}>
                            <GroupsIcon sx={{width: '14%', height:'14%'}}></GroupsIcon>
                            <Box sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    
                                    alignItems: 'flex-start'}}>
                                <Typography sx={{ fontSize: '12px'}}>30+</Typography>
                                <Typography sx={{ fontSize: '12px'}}>Clientes satisfechos</Typography>

                            </Box>
                        </Box>
                        <Box sx={{  display: 'flex',
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    
                                    width: '100%',
                                    gap: 1
                                }}>
                            <AdminPanelSettingsIcon sx={{width: '14%', height:'14%'}}></AdminPanelSettingsIcon>
                            <Box sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    
                                    alignItems: 'flex-start'}}>
                                <Typography sx={{ fontSize: '12px'}}>Talento multidiciplinario</Typography>
                                <Typography sx={{ fontSize: '12px'}}>Desarrolladores, diseñadores y estrategas</Typography>
                            </Box>

                        </Box>
                    </Box>
                </Box>
            </Container>

        </Box>

    )

}
export default Quiénes_somos