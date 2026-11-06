import { ArrowForward } from '@mui/icons-material'
import AdUnitsIcon from '@mui/icons-material/AdUnits'
import CakeIcon from '@mui/icons-material/Cake'
import GroupsIcon from '@mui/icons-material/Groups'
import EditDocumentIcon from '@mui/icons-material/EditDocument'
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt'
import CodeOffIcon from '@mui/icons-material/CodeOff'
import CardContent from '@mui/material/CardContent'
import Avatar from '@mui/material/Avatar'
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule'
import {Box, 
    Button, 
    Container,
    Typography,
    Card} from '@mui/material'

function Quiénes_somos() {   
    return(
        <Box sx={{
            minHeight: '1px',
            display: 'flex',
            alignItems: 'center',
            backgroundColor: '#F8F5FA',
            py: 6

        }}>
            <Container>
                <Box sx={{display: "flex",
                    flexDirection: "row",
                    gap: "20px",
                    alignItems: "center"}}>
                    <Box sx={{width:'60%'}}>
                        <Typography sx={{display: "flex",
                                    flexDirection: "row",
                                    fontWeight:'bold',
                                    alignItems: "center",
                                    }}><HorizontalRuleIcon sx={{color:'#7c4dff', fontWeight:"bold"}}></HorizontalRuleIcon>Quiénes somos</Typography>
                        <Typography sx={{
                            fontWeight:'bold',
                            fontSize:'25px',}}>
                            Un equipo que combierte ideas en impacto
                        </Typography>
                        <Typography sx={{display: "flex",
                                    flexDirection: "row",
                                    gap: "20px",
                                    alignItems: "center",
                                    color:'gray'}}>
                            Desarrollamos sofware a la medida para impulsar el crecimiento de tu negocio. Combinamos tecnologia, creatividad y experiencia para convertir tus ideas en productos visuales  
                         </Typography>
                         
                    
                    </Box>
                    <Box sx={{width:'33%'}}>
                        <Box component="img" sx={{objectFit:'contain', width:"100%",height:"100%", borderRadius:'10px'}} src='public/home-program-equip.jpg'></Box>
                    </Box>
                    <Box sx={{width:'33%',}}>
                        <Box sx={{  display: 'flex',
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    
                                    width: '100%',
                                    gap: 1
                                }}>
                            <Avatar sx={{bgcolor:"lightgray"}}><CakeIcon sx={{color:'#7c4dff'}}></CakeIcon></Avatar>
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
                            <Avatar sx={{bgcolor:"lightgray"}}><EditDocumentIcon sx={{color:'#7c4dff'}}></EditDocumentIcon></Avatar>
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
                            <Avatar sx={{bgcolor:"lightgray"}}><GroupsIcon sx={{color:'#7c4dff'}}></GroupsIcon></Avatar>
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
                            <Avatar sx={{bgcolor:"lightgray"}}><AdminPanelSettingsIcon sx={{color:'#7c4dff'}}></AdminPanelSettingsIcon></Avatar>
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
                <Box sx={{gap: 1}}>
                        <Button variant='contained' sx={{
                                                        backgroundColor:'#7c4dff',
                                                        color: 'white',
                                                        gap: 1 }}>
                            Conoce mas sobre nocotros <ArrowRightAltIcon></ArrowRightAltIcon>

                        </Button>
                </Box>
            </Container>

        </Box>

    )

}
export default Quiénes_somos