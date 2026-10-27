import {
  Box,
  Typography,
  Avatar,
} from "@mui/material";

const testimonios = [
  {
    nombre: "Laura Martínez",
    puesto: "Directora de Marketing, Startup",
    texto:
      "El equipo de DevNova entendió perfectamente nuestras necesidades y entregó un producto de gran valor. ¡Altamente recomendados!",
    inicial: "L",
  },
  {
    nombre: "Carlos Ramírez",
    puesto: "CTO, Empresa de Retail",
    texto:
      "Soluciones creativas, comunicación efectiva y un gran equipo técnico. Sin duda los volveríamos a contratar para futuros proyectos.",
    inicial: "C",
  },
];

const estadisticas = [
  { numero: "5+", texto: "Años de experiencia", icono: "▣" },
  { numero: "50+", texto: "Clientes atendidos", icono: "⬡" },
  { numero: "30+", texto: "Casos de éxito", icono: "♙" },
  { numero: "98%", texto: "Satisfacción", icono: "♥" },
];

const clientes = [
  "BBVA",
  "Cinépolis",
  "BIMBO",
  "Telcel",
  "AWS",
  "Microsoft",
];

function Testimonios() {
  return (
    <Box
      component="section"
      sx={{
        bgcolor: "#f8f9ff",
        p: { xs: 2, md: 4 },
        borderRadius: 3,
        maxWidth: 1200,
        mx: "auto",
        my: 4,
      }}
    >
      {/* Encabezado */}
      <Typography
        sx={{
          color: "#6045e8",
          fontWeight: "bold",
          fontSize: 14,
        }}
      >
        ━ Experiencia y clientes
      </Typography>

      <Typography
        variant="h5"
        sx={{
          fontWeight: "bold",
          color: "#172554",
          mt: 0.5,
        }}
      >
        La confianza de nuestros clientes nos impulsa
      </Typography>

      <Typography color="text.secondary" sx={{ mb: 3, mt: 1 }}>
        Resultados que hablan y relaciones construidas con la calidad y la
        innovación.
      </Typography>

      {/* Estadísticas */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "repeat(2, minmax(0, 1fr))",
            md: "repeat(4, minmax(0, 1fr))",
          },
          gap: 2,
          mb: 5,
        }}
      >
        {estadisticas.map((dato) => (
          <Box
            key={dato.texto}
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1.5,
            }}
          >
            <Typography sx={{ color: "#6045e8", fontSize: 25 }}>
              {dato.icono}
            </Typography>

            <Box>
              <Typography
                sx={{ fontWeight: "bold", color: "#172554" }}
              >
                {dato.numero}
              </Typography>

              <Typography variant="caption" color="text.secondary">
                {dato.texto}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>

      {/* Testimonios y clientes */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            md: "2fr 1fr",
          },
          gap: 4,
        }}
      >
        {/* Tarjetas de testimonios */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, minmax(0, 1fr))",
            },
            gap: 3,
          }}
        >
            <Box
              sx={{
                display: "flex",
                gap: 1.5,
                alignItems: "flex-start",
                p: 2,
                bgcolor: "#ffffff",
                borderRadius: 2,
                border: "1px solid #eeeeF7",
              }}
            >
              <Avatar
                sx={{
                  bgcolor: "#dcd5ff",
                  color: "#6045e8",
                  fontWeight: "bold",
                }}
              >
                {persona.inicial}
              </Avatar>

              <Box>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ lineHeight: 1.7 }}
                >
                  "{persona.texto}"
                </Typography>

                <Typography
                  variant="body2"
                  sx={{
                    fontWeight: "bold",
                    mt: 1.5,
                    color: "#172554",
                  }}
                >
                  {persona.nombre}
                </Typography>

                <Typography variant="caption" color="text.secondary">
                  {persona.puesto}
                </Typography>

                <Typography sx={{ color: "#f5a623", mt: 0.5 }}>
                  ★★★★★
                </Typography>
              </Box>
            </Box>

        </Box>

        {/* Empresas */}
        <Box>
          <Typography
            variant="subtitle2"
            sx={{
              color: "#172554",
              fontWeight: "bold",
              mb: 2,
            }}
          >
            Empresas que confían en nosotros
          </Typography>

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
              gap: 2,
              alignItems: "center",
            }}
          >
            {clientes.map((cliente) => (
              <Box
                key={cliente}
                sx={{
                  bgcolor: "#ffffff",
                  borderRadius: 1,
                  p: 1,
                  minHeight: 42,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  border: "1px solid #eeeeF7",
                }}
              >
                <Typography
                  sx={{
                    fontWeight: "bold",
                    color: "#64748b",
                    textAlign: "center",
                    fontSize: 13,
                  }}
                >
                  {cliente}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Testimonios;