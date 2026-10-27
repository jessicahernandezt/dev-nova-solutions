import { ArrowForward } from '@mui/icons-material'
import AdUnitsIcon from '@mui/icons-material/AdUnits'
import TvIcon from '@mui/icons-material/Tv'
import CardContent from '@mui/material/CardContent';
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
                    <Box>

                    </Box>
                    <Box sx={{width:"50%"}}>
                        <Typography sx={{padding:'2px',fontStyle:"italic",fontWeight:"bold", }}>
                                Nuestros servicios                                
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
                        <Box sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1}}>
                            <Card sx={{width: '270%', height: 150}}>
                                <Box>
                                    <TvIcon sx={{width: 100, height:100}}></TvIcon>
                                </Box>
                            </Card>
                            <Card sx={{width: 270, height: 150}}>
                                <Box>
                                    <AdUnitsIcon sx={{width: 100, height:100}}></AdUnitsIcon>
                                </Box>
                            </Card>
                            <Card><AdUnitsIcon></AdUnitsIcon></Card>

                        </Box>
                        <Box sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1}}>
                            <Card><Typography>HOLA</Typography></Card>
                            <Card><Typography>HOLA</Typography></Card>
                            <Card><Typography>HOLA</Typography></Card>

                        </Box>
                        
                    </Box>

                </Box>
            </Container>
            <Box sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 6}}>
                

                
            </Box>

        </Box>
    )
}
export default Servicios