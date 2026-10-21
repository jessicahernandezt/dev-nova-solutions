import {
    Box,
    Button,
    Container,
    Typography
} from '@mui/material'

function Hero() {
    return (

        <Box sx={{
            width: '100%',
            margin: '30px 70px',
            height: 'auto',
        }}>

            <Box sx={{
                display: 'flex',
                alignContent: 'center',
                width: '100%',
            }}>

                <Box sx={{
                    width: '50%',
                }}>

                    <Typography>Proyectos Destacados</Typography>

                    <Typography>Soluciones reales para negocios reales</Typography>

                    <Typography>Conoce alguno de nuestros proyectos mas recientes y como ayudarnos a nuestros clientes a alcanzar sus objetivos</Typography>

                </Box>

                <Box sx={{
                    width: '40%',
                    display: 'flex',
                    justifyContent: 'flex-end',
                    alignItems: 'center',
                }}>
                    <Typography>
                        Ver todos los proyectos ➔
                    </Typography>
                </Box>


            </Box>



            <Box sx={{
                width: '400px',
                height: '600px',
                backgroundColor: '#7c4dff',
                display: 'flex',
                borderRadius: '10px',
                backgroundImage: `url(public/tarjeta1.png)`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                boxShadow: '0px 10px 20px rgba(29, 29, 31, 0.3)',
                margin: '30px 0px'
            }}>

                <Box sx={{
                    display: 'flex',
                    width: '100%',
                    flexDirection: 'column',
                    justifyContent: 'flex-end',
                }}>

                <Box sx={{
                    width: '100%',
                    height: '50%',
                    backgroundColor: '#fff',
                    borderRadius: '10px'
                }}>

                    <Typography sx={{
                        margin: '5px 10px',
                    }}>
                        Plataforma de gestion empresarial
                    </Typography>

                    <Typography>
                        terminar aqui lo que falta
                    </Typography>

                </Box>

                </Box>



            </Box>




        </Box>


    )
}
export default Hero