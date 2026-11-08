
import TvIcon from '@mui/icons-material/Tv'
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule'
import TaskIcon from '@mui/icons-material/Task';
import GroupsIcon from '@mui/icons-material/Groups';
import StarIcon from '@mui/icons-material/Star';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt'
import {Box, 
    Button, 
    Container,
    Typography,
    Card} from '@mui/material'

function Servicios() {
    return(
        <Box sx={{
            minHeight: '1px',
            display: 'flex',
            alignItems: 'center',
            backgroundColor: '#fcfcfc',
            py: 6

        }}>
            <Container>
                <Box>
                    
                    <Box sx={{width:"100%"}}>
                        <Box sx={{width: "50%"}}>
                            <Typography sx={{padding:'2px',fontStyle:"italic",fontWeight:"bold", }}>
                                <HorizontalRuleIcon sx={{color:'#7c4dff', fontWeight:"bold"}}></HorizontalRuleIcon>Nuestros servicios                                
                        </Typography>
                        <Typography sx={{
                            color:'#7c4dff',
                            fontWeight:'bold',
                            fontSize:'25px',
                            
                        }}>
                            Soluciones tecnologicas para cada necesidad
                        </Typography>
                        <Typography sx={{color:"grey", padding:"2"}}>
                            Ofrecemos servicios de desarrollo de software, aplicaciones web y moviles, consultoria y transporte, para ayudarte a optimizar tus procesos y alcanzar tus objetivos
                        </Typography>
                        </Box>
                        <Box >
                            <Box sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 1}}>
                                <Card sx={{width: '25%', height: 100, display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 1,}}>
                                        <Box sx={{
                                                width: '30%',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center'}}>
                                            <Box sx={{
                                                    width: '65px',
                                                    height: '65px',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    backgroundColor: '#e7e7e7',
                                                    borderRadius: '10px'}}>
                                                    <CalendarTodayIcon sx={{
                                                        fontSize: '35px',
                                                        color: '#7c4dff'}}/>
                                                </Box>
                                            </Box>

                                            <Box sx={{width:'70%'}}>
                                                <Typography sx={{fontWeight:700, fontSize:'25px'}}>5+</Typography>
                                                <Typography sx={{fontSize:'14px', color:'gray'}}>Años de experiencia</Typography>
                                                
                                            </Box>
                                </Card>
                                <Card sx={{width: '25%', height: 100, display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 1,}}>
                                        <Box sx={{
                                                width: '30%',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center'}}>
                                            <Box sx={{
                                                    width: '65px',
                                                    height: '65px',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    backgroundColor: '#e7e7e7',
                                                    borderRadius: '10px'}}>
                                                    <TaskIcon sx={{
                                                        fontSize: '35px',
                                                        color: '#7c4dff'}}/>
                                                </Box>
                                            </Box>

                                            <Box sx={{width:'70%'}}>
                                                <Typography sx={{fontWeight:700, fontSize:'25px'}}>50+</Typography>
                                                <Typography sx={{fontSize:'14px', color:'gray'}}>Proyectos destacados</Typography>
                                                
                                            </Box>
                                </Card>
                                <Card sx={{width: '25%', height: 100, display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 1,}}>
                                        <Box sx={{
                                                width: '30%',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center'}}>
                                            <Box sx={{
                                                    width: '65px',
                                                    height: '65px',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    backgroundColor: '#e7e7e7',
                                                    borderRadius: '10px'}}>
                                                    <GroupsIcon sx={{
                                                        fontSize: '35px',
                                                        color: '#7c4dff'}}/>
                                                </Box>
                                            </Box>

                                            <Box sx={{width:'70%'}}>
                                                <Typography sx={{fontWeight:700, fontSize:'25px'}}>30+</Typography>
                                                <Typography sx={{fontSize:'14px', color:'gray'}}>Empresas que an confiado</Typography>
                                                
                                            </Box>
                                </Card>
                                <Card sx={{width: '25%', height: 100, display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 1,}}>
                                        <Box sx={{
                                                width: '30%',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center'}}>
                                            <Box sx={{
                                                    width: '65px',
                                                    height: '65px',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    backgroundColor: '#e7e7e7',
                                                    borderRadius: '10px'}}>
                                                    <StarIcon sx={{
                                                        fontSize: '35px',
                                                        color: '#7c4dff'}}/>
                                                </Box>
                                            </Box>

                                            <Box sx={{width:'70%'}}>
                                                <Typography sx={{fontWeight:700, fontSize:'25px'}}>98%</Typography>
                                                <Typography sx={{fontSize:'14px', color:'gray'}}>Clientes satisfechos</Typography>
                                                
                                            </Box>
                                </Card>

                            </Box>
                            
                        </Box>
                        
                    </Box>

                </Box>
            </Container>
           

        </Box>
    )
}
export default Servicios