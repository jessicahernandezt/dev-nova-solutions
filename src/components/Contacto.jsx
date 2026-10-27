
import {Box, Button, Container, Typography, Accordion, AccordionActions, AccordionSummary, AccordionDetails} from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material';

function Proyectos() {
    return(
        <Box sx={{minHeight: '520px', display: 'flex', alignItems: 'center', backgroundColor: '#f7f7ff', py: 1}}>
            <Container maxWidth='lg'>
                <Box sx={{/*display: 'flex', alignItems: 'center', gap: 3, backgroundImage: 'url("/img (8).png")', objectFit: 'contain', minHeight:'500px'*/}}>

                    <Accordion>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography component="span">Accordion 1</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        malesuada lacus ex, sit amet blandit leo lobortis eget.
                        </AccordionDetails>
                    </Accordion>
                    
                </Box>
            </Container>
        </Box>
    )
}

export default Proyectos

