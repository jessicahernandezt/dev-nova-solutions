import { ArrowForward, Bolt, Opacity, PeopleAltRounded } from '@mui/icons-material'
import { StarPurple500 } from '@mui/icons-material'

import {
    Box,
    Button,
    Container,
    ImageListItem,
    Typography
} from '@mui/material'

function Quienessomos() {
    return (
        <Box sx={{
            minHeight: '520px',
            display: 'flex',
            alignItems: 'center',
            backgroundColor: '#f7f7ff',
            py: 6
        }}>
            <Container maxWidth='lg'>
                <Box sx={{
                    display:"flex",
                    alignItems:"center",
                    gap:6
                }}>
                    <Box alt="texto">
                        <Typography variant='overline'>
                            Quiénes somos
                        </Typography>

                        <Typography>
                            Un equipo que convierte ideas en impacto
                        </Typography>

                        <Typography variant='subtittle'>
                            en Dev Nova Solutions somos un equipo de profesionales apasionados por la tecnologia y la innovación. Ayudamos a empresas y emprendedores a transformar sus ideas en soluciones digitales que generan valor real
                        </Typography>
                        <Button>
                            conoce mas sobre nosotros <ArrowForward></ArrowForward>
                        </Button>
                    </Box>
                    <Box alt="imagen"></Box>
                    <Box alt="iconos"></Box>

                </Box>

            </Container>
        </Box>
    )
}

export default QuienesSomos