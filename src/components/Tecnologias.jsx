const tecnologias = [
  { nombre: "React", color: "#61DAFB", logo: "⚛" },
  { nombre: "Vite", color: "#646CFF", logo: "⚡" },
  { nombre: "Node.js", color: "#339933", logo: "⬡" },
  { nombre: "Express", color: "#555555", logo: "ex" },
  { nombre: "MongoDB", color: "#47A248", logo: "🍃" },
  { nombre: "PostgreSQL", color: "#336791", logo: "🐘" },
  { nombre: "Git", color: "#F05032", logo: "◆" },
  { nombre: "AWS", color: "#FF9900", logo: "aws" },
  { nombre: "Flutter", color: "#54C5F8", logo: "◆" },
  { nombre: "Python", color: "#3776AB", logo: "🐍" },
];

import {
    Box,
    Button,
    Container,
    Typography
} from '@mui/material'



function Tecnologias() {
  return (
    <Box sx={{ bgcolor: "#ededfc", p: 4 }}>
      <Typography variant="subtitle2" color="#6045e8">
        ━ Tecnologías
      </Typography>

      <Typography
        variant="h5"
        sx={{ fontWeight: "bold", color: "#172554", mb: 1 }}
      >
        Herramientas que hacen posibles grandes ideas
      </Typography>

      <Typography color="text.secondary" sx={{ mb: 3 }}>
        Utilizamos tecnologías modernas y confiables para
        desarrollar soluciones escalables, seguras y de alto rendimiento.
      </Typography>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "repeat(2, 1fr)",
            sm: "repeat(5, 1fr)",
          },
          gap: 2,
        }}
      >

          <Box
            sx={{
              bgcolor: "white",
              borderRadius: 2,
              p: 2,
              textAlign: "center",
              boxShadow: "0 2px 8px #0000000a",
              transition: "0.2s",
              "&:hover": {
                transform: "translateY(-4px)",
                boxShadow: "0 5px 15px #00000015",
              },
            }}>
            <Typography
              sx={{
                color: tec.color,
                fontSize: 32,
                fontWeight: "bold",
                mb: 1,
              }}
            >
            </Typography>

            <Typography
              variant="body2"
              sx={{ fontWeight: "bold", color: "#334155" }}
            >

            </Typography>
          </Box>
      </Box>
    </Box>
  );
}
export default Tecnologias