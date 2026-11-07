import { ArrowForward } from '@mui/icons-material'
import AdUnitsIcon from '@mui/icons-material/AdUnits'
import TvIcon from '@mui/icons-material/Tv'
import CodeOffIcon from '@mui/icons-material/CodeOff'
import CardContent from '@mui/material/CardContent';
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule'
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
                                <Card sx={{width: '33%', height: 150, display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 1,}}>
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
                                                    <TvIcon sx={{
                                                        fontSize: '35px',
                                                        color: '#7c4dff'}}/>
                                                </Box>
                                            </Box>

                                            <Box sx={{width:'70%'}}>
                                                <Typography sx={{fontWeight:'bold', fontSize:'15px'}}>Desarrollo Web</Typography>
                                                <Typography sx={{fontSize:'14px', color:'gray'}}>Sitios y plataformas web modernas, seguras y estables</Typography>
                                                <Button sx={{color:'#7c4dff', py:1}}>
                                                    <Typography sx={{fontSize: "12px"}}>Ver proyecto</Typography>
                                                    <ArrowRightAltIcon />
                                                </Button>
                                            </Box>
                                </Card>
                                <Card sx={{width: '33%', height: 150, display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 1,}}>
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
                                                    <TvIcon sx={{
                                                        fontSize: '35px',
                                                        color: '#7c4dff'}}/>
                                                </Box>
                                            </Box>

                                            <Box sx={{width:'70%'}}>
                                                <Typography sx={{fontWeight:'bold', fontSize:'15px'}}>Desarrollo Web</Typography>
                                                <Typography sx={{fontSize:'14px', color:'gray'}}>Sitios y plataformas web modernas, seguras y estables</Typography>
                                                <Button sx={{color:'#7c4dff', py:1}}>
                                                    <Typography sx={{fontSize: "12px"}}>Ver proyecto</Typography>
                                                    <ArrowRightAltIcon />
                                                </Button>
                                            </Box>
                                </Card>
                                <Card sx={{width: '33%', height: 150, display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 1,}}>
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
                                                    <TvIcon sx={{
                                                        fontSize: '35px',
                                                        color: '#7c4dff'}}/>
                                                </Box>
                                            </Box>

                                            <Box sx={{width:'70%'}}>
                                                <Typography sx={{fontWeight:'bold', fontSize:'15px'}}>Desarrollo Web</Typography>
                                                <Typography sx={{fontSize:'14px', color:'gray'}}>Sitios y plataformas web modernas, seguras y estables</Typography>
                                                <Button sx={{color:'#7c4dff', py:1}}>
                                                    <Typography sx={{fontSize: "12px"}}>Ver proyecto</Typography>
                                                    <ArrowRightAltIcon />
                                                </Button>
                                            </Box>
                                </Card>

                            </Box>
                            <Box sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 1,
                                    py:2}}>
                                <Card sx={{width: '33%', height: 150, display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 1,}}>
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
                                                    <TvIcon sx={{
                                                        fontSize: '35px',
                                                        color: '#7c4dff'}}/>
                                                </Box>
                                            </Box>

                                            <Box sx={{width:'70%'}}>
                                                <Typography sx={{fontWeight:'bold', fontSize:'15px'}}>Desarrollo Web</Typography>
                                                <Typography sx={{fontSize:'14px', color:'gray'}}>Sitios y plataformas web modernas, seguras y estables</Typography>
                                                <Button sx={{color:'#7c4dff', py:1}}>
                                                    <Typography sx={{fontSize: "12px"}}>Ver proyecto</Typography>
                                                    <ArrowRightAltIcon />
                                                </Button>
                                            </Box>
                                </Card>
                                <Card sx={{width: '33%', height: 150, display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 1,}}>
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
                                                    <TvIcon sx={{
                                                        fontSize: '35px',
                                                        color: '#7c4dff'}}/>
                                                </Box>
                                            </Box>

                                            <Box sx={{width:'70%'}}>
                                                <Typography sx={{fontWeight:'bold', fontSize:'15px'}}>Desarrollo Web</Typography>
                                                <Typography sx={{fontSize:'14px', color:'gray'}}>Sitios y plataformas web modernas, seguras y estables</Typography>
                                                <Button sx={{color:'#7c4dff', py:1}}>
                                                    <Typography sx={{fontSize: "12px"}}>Ver proyecto</Typography>
                                                    <ArrowRightAltIcon />
                                                </Button>
                                            </Box>
                                </Card>
                                <Card sx={{width: '33%', height: 150, display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 1,}}>
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
                                                    <TvIcon sx={{
                                                        fontSize: '35px',
                                                        color: '#7c4dff'}}/>
                                                </Box>
                                            </Box>

                                            <Box sx={{width:'70%'}}>
                                                <Typography sx={{fontWeight:'bold', fontSize:'15px'}}>Desarrollo Web</Typography>
                                                <Typography sx={{fontSize:'14px', color:'gray'}}>Sitios y plataformas web modernas, seguras y estables</Typography>
                                                <Button sx={{color:'#7c4dff', py:1}}>
                                                    <Typography sx={{fontSize: "12px"}}>Ver proyecto</Typography>
                                                    <ArrowRightAltIcon />
                                                </Button>
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