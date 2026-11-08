import SettingsIcon from '@mui/icons-material/Settings';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule'
import TaskIcon from '@mui/icons-material/Task';
import GroupsIcon from '@mui/icons-material/Groups';
import StarIcon from '@mui/icons-material/Star';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import {Box, 
    Button, 
    Container,
    Typography,
    Card} from '@mui/material'

function Proyectos_destacados() {   
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
                                <Card sx={{width: '29%', height: 100, display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 1,}}>
                                        <Box sx={{
                                                width: '25%',
                                                display: 'flex',
                                                alignItems: 'flex-start',
                                                justifyContent: 'center'}}>
                                            <Box sx={{
                                                    width: '65px',
                                                    height: '65px',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    backgroundColor: '#e7e7e7',
                                                    borderRadius: '10px'}}>
                                                    <EqualizerIcon sx={{
                                                        fontSize: '35px',
                                                        color: '#7c4dff'}}/>
                                                </Box>
                                            </Box>

                                            <Box sx={{width:'70%', alignItems:'flex-start'}}>
                                                <Typography sx={{fontWeight:700, fontSize:'15px'}}>150% en ventajas digitales</Typography>
                                                <Typography sx={{fontSize:'11px', color:'gray'}}>implementamos una plataforma de e-comerce que incrementó las ventas en un 150% en solo 6 meses</Typography>
                                                
                                            </Box>
                                </Card>
                                <Card sx={{width: '29%', height: 100, display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 1,}}>
                                        <Box sx={{
                                                width: '25%',
                                                display: 'flex',
                                                alignItems: 'flex-start',
                                                justifyContent: 'center'}}>
                                            <Box sx={{
                                                    width: '65px',
                                                    height: '65px',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    backgroundColor: '#e7e7e7',
                                                    borderRadius: '10px'}}>
                                                    <EqualizerIcon sx={{
                                                        fontSize: '35px',
                                                        color: '#7c4dff'}}/>
                                                </Box>
                                            </Box>

                                            <Box sx={{width:'70%', alignItems:'flex-start'}}>
                                                <Typography sx={{fontWeight:700, fontSize:'15px'}}>150% en ventajas digitales</Typography>
                                                <Typography sx={{fontSize:'11px', color:'gray'}}>implementamos una plataforma de e-comerce que incrementó las ventas en un 150% en solo 6 meses</Typography>
                                                
                                            </Box>
                                </Card>
                                <Card sx={{width: '29%', height: 100, display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 1,}}>
                                        <Box sx={{
                                                width: '25%',
                                                display: 'flex',
                                                alignItems: 'flex-start',
                                                justifyContent: 'center'}}>
                                            <Box sx={{
                                                    width: '65px',
                                                    height: '65px',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    backgroundColor: '#e7e7e7',
                                                    borderRadius: '10px'}}>
                                                    <EqualizerIcon sx={{
                                                        fontSize: '35px',
                                                        color: '#7c4dff'}}/>
                                                </Box>
                                            </Box>

                                            <Box sx={{width:'70%', alignItems:'flex-start'}}>
                                                <Typography sx={{fontWeight:700, fontSize:'15px'}}>150% en ventajas digitales</Typography>
                                                <Typography sx={{fontSize:'11px', color:'gray'}}>implementamos una plataforma de e-comerce que incrementó las ventas en un 150% en solo 6 meses</Typography>
                                                
                                            </Box>
                                </Card>
                                <Card sx={{width: '29%', height: 100, display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 1,}}>
                                        <Box sx={{
                                                width: '25%',
                                                display: 'flex',
                                                alignItems: 'flex-start',
                                                justifyContent: 'center'}}>
                                            <Box sx={{
                                                    width: '65px',
                                                    height: '65px',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    backgroundColor: '#e7e7e7',
                                                    borderRadius: '10px'}}>
                                                    <EqualizerIcon sx={{
                                                        fontSize: '35px',
                                                        color: '#7c4dff'}}/>
                                                </Box>
                                            </Box>

                                            <Box sx={{width:'70%', alignItems:'flex-start'}}>
                                                <Typography sx={{fontWeight:700, fontSize:'15px'}}>150% en ventajas digitales</Typography>
                                                <Typography sx={{fontSize:'11px', color:'gray'}}>implementamos una plataforma de e-comerce que incrementó las ventas en un 150% en solo 6 meses</Typography>
                                                
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
export default Proyectos_destacados