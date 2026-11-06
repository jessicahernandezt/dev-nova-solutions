import { ArrowForward } from '@mui/icons-material'
import AdUnitsIcon from '@mui/icons-material/AdUnits'
import CardContent from '@mui/material/CardContent';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt'
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule'
import {Box, 
    Button, 
    Container,
    Typography,
    Card,
    CardActions,
    CardMedia,
    Chip} from '@mui/material'

function Tecnologías() {
    return(
        <Box sx={{
            minHeight: '1px',
            display: 'flex',
            alignItems: 'center',
            backgroundColor: '#F8F5FA',
            py: 6}}>
            <Container>
                <Box>
                    <Box sx={{display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                width: '100%'}}>
                        <Box>
                            <Typography sx={{display: "flex",
                                    flexDirection: "row",
                                    fontWeight:'bold',
                                    alignItems: "center",
                                    }}><HorizontalRuleIcon sx={{color:'#7c4dff', fontWeight:"bold"}}></HorizontalRuleIcon>Tecnologías</Typography>
                            <Typography sx={{
                                    fontWeight:'bold',
                                    fontSize:'25px',}}>
                                    Solucines reales para negocios reales
                            </Typography>
                            
                        </Box>
                        <Box sx={{width: '45%'}}>
                            <Typography sx={{fontSize:'13px', color:'gray'}}>
                                Utilizamos tecnologias modernas y confiables para desarrollar soluciones escalables, seguras y de alto rendimineto
                            </Typography>
                        </Box>
                        
                    </Box>
                    <Box sx={{
                            display: 'flex',
                            flexWrap: 'wrap'
                            }}>
                         <Box sx={{width: '10%', }}>
                                <Card sx={{display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                p: 2,
                                flexDirection:'column'}}>
                                    <CardMedia component="img" src='public/react.png' sx={{width:"50%",height:"50%", display:'flex', alignItems:'center'}}></CardMedia>
                                    <CardContent sx={{
                                                    display: 'flex',
                                                    flexDirection: 'column',
                                                    alignItems: 'center',
                                                    textAlign: 'center',
                                                    gap: 1}}>
                                        <Typography>React</Typography>
                                    </CardContent>
                                </Card>
                        </Box>

                        <Box sx={{width: '10%'}}>
                            <Card sx={{display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                p: 2,
                                flexDirection:'column'}}>
                                <CardMedia component="img" src='public/vite.png' sx={{width:"50%",height:"50%", display:'flex', alignItems:'center'}}></CardMedia>
                                <CardContent sx={{
                                                display: 'flex',
                                                flexDirection: 'column',
                                                alignItems: 'center',
                                                textAlign: 'center',
                                                gap: 1}}>
                                    <Typography>Vite</Typography>
                                </CardContent>
                            </Card>
                        </Box>

                        <Box sx={{width: '10%'}}>
                            <Card sx={{display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                p: 2,
                                flexDirection:'column'}}>
                                <CardMedia component="img" src='public/node-js.png' sx={{width:"50%",height:"50%", display:'flex', alignItems:'center'}}></CardMedia>
                                <CardContent sx={{
                                                display: 'flex',
                                                flexDirection: 'column',
                                                alignItems: 'center',
                                                textAlign: 'center',
                                                gap: 1}}>
                                    <Typography>Node.js</Typography>
                                </CardContent>
                            </Card>
                        </Box>

                        <Box sx={{width: '10%'}}>
                            <Card sx={{display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                p: 2,
                                flexDirection:'column'}}>
                                <CardMedia component="img" src='public/express.png' sx={{width:"50%",height:"50%", display:'flex', alignItems:'center'}}></CardMedia>
                                <CardContent sx={{
                                                display: 'flex',
                                                flexDirection: 'column',
                                                alignItems: 'center',
                                                textAlign: 'center',
                                                gap: 1}}>
                                    <Typography>Express</Typography>
                                </CardContent>
                            </Card>
                        </Box>

                        <Box sx={{width: '10%'}}>
                            <Card sx={{display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                p: 2,
                                flexDirection:'column'}}>
                                <CardMedia component="img" src='public/mongodb.png' sx={{width:"50%",height:"50%", display:'flex', alignItems:'center'}}></CardMedia>
                                <CardContent sx={{
                                                display: 'flex',
                                                flexDirection: 'column',
                                                alignItems: 'center',
                                                textAlign: 'center',
                                                gap: 1}}>
                                    <Typography>MongoDB</Typography>
                                </CardContent>
                            </Card>
                        </Box>

                        <Box sx={{width: '10%'}}>
                            <Card sx={{display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                p: 2,
                                flexDirection:'column'}}>
                                <CardMedia component="img" src='public/postgre-sql.png' sx={{width:"50%",height:"50%", display:'flex', alignItems:'center'}}></CardMedia>
                                <CardContent sx={{
                                                display: 'flex',
                                                flexDirection: 'column',
                                                alignItems: 'center',
                                                textAlign: 'center',
                                                gap: 1}}>
                                    <Typography>PostgreSQL</Typography>
                                </CardContent>
                            </Card>
                        </Box>

                        <Box sx={{width: '10%'}}>
                            <Card sx={{display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                p: 2,
                                flexDirection:'column'}}>
                                <CardMedia component="img" src='public/git.png' sx={{width:"50%",height:"50%", display:'flex', alignItems:'center'}}></CardMedia>
                                <CardContent sx={{
                                                display: 'flex',
                                                flexDirection: 'column',
                                                alignItems: 'center',
                                                textAlign: 'center',
                                                gap: 1}}>
                                    <Typography>Git</Typography>
                                </CardContent>
                            </Card>
                        </Box>

                        <Box sx={{width: '10%'}}>
                            <Card sx={{display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                p: 2,
                                flexDirection:'column'}}>
                                <CardMedia component="img" src='public/amazon-web.png' sx={{width:"50%",height:"50%", display:'flex', alignItems:'center'}}></CardMedia>
                                <CardContent sx={{
                                                display: 'flex',
                                                flexDirection: 'column',
                                                alignItems: 'center',
                                                textAlign: 'center',
                                                gap: 1}}>
                                    <Typography>AWS</Typography>
                                </CardContent>
                            </Card>
                        </Box>

                        <Box sx={{width: '10%'}}>
                            <Card sx={{display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                p: 2,
                                flexDirection:'column'}}>
                                <CardMedia component="img" src='public/flutter.png' sx={{width:"50%",height:"50%", display:'flex', alignItems:'center'}}></CardMedia>
                                <CardContent sx={{
                                                display: 'flex',
                                                flexDirection: 'column',
                                                alignItems: 'center',
                                                textAlign: 'center',
                                                gap: 1}}>
                                    <Typography>Flutter</Typography>
                                </CardContent>
                            </Card>
                        </Box>

                        <Box sx={{width: '10%'}}>
                            <Card sx={{display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                p: 2,
                                flexDirection:'column'}}>
                                <CardMedia component="img" src='public/Python.png' sx={{width:"50%",height:"50%", display:'flex', alignItems:'center'}}></CardMedia>
                                <CardContent sx={{
                                                display: 'flex',
                                                flexDirection: 'column',
                                                alignItems: 'center',
                                                textAlign: 'center',
                                                gap: 1}}>
                                    <Typography>Python</Typography>
                                </CardContent>
                            </Card>
                        </Box>
                    
                    </Box>
                    <Box>
                        
                    </Box>
                </Box>

            </Container>
        </Box>

        )
}
export default Tecnologías