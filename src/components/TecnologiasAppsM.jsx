import {
  SiFlutter,
  SiReact,
  SiFirebase,
  SiNodedotjs,
  SiFigma,
} from "react-icons/si";
import { IoCloudOutline } from "react-icons/io5";
import {
    Box,
    Container,
    Typography
} from '@mui/material';

function TecnologiasAppsM() {
  return (
    <Box
      sx={{
        minHeight: "400px",
        display: "flex",
        alignItems: "center",
        backgroundColor: "#f7f7ff",
        py: 4,
      }}>

      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}>

          <Box sx={{ width: { xs: "100%", md: "40%" } }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <Typography
                sx={{
                  color: "#000000",
                  fontWeight: "bold",
                  letterSpacing: 2,
                }}>
            -- TECNOLOGIAS Y HERRAMIENTAS
              </Typography>
            </Box>

            <Typography
              variant="h4"
              sx={{
                fontWeight: "bold",
                color: "#171b35",
                mt: 1,
                mb: 1,
                lineHeight: 1,
              }}
            >
              Tecnología de vanguardia
            </Typography>

            <Typography sx={{ color: "#666", fontSize: "1rem" }}>
              Utilizamos las mejores herramientas del mercado para desarrollar
              aplicaciones móviles de alto rendimiento.
            </Typography>
          </Box>


          <Box
            sx={{
              width: { xs: "100%", md: "60%" },
              display: "flex",
              flexWrap: { xs: "wrap", md: "nowrap" },
              justifyContent: "space-between",
              gap: 1,
            }}>

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                gap: 1,
                p: 1,
                flex: 1,
                minWidth: 100,
                boxShadow: 2
              }}>

              <Box sx={{ fontSize: 40, color: "#29B6F6", display: "flex" }}>
                <SiFlutter />
              </Box>
              <Typography variant="subtitle1" fontWeight={700}>
                Flutter
              </Typography>
              <Typography variant="caption" color="text.secondary">
                Apps nativas e híbridas
              </Typography>
            </Box>

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                gap: 0.5,
                p: 1,
                flex: 1,
                minWidth: 100,
                boxShadow: 2
              }}>

              <Box sx={{ fontSize: 40, color: "#29B6F6", display: "flex" }}>
                <SiReact />
              </Box>
              <Typography variant="subtitle1" fontWeight={700}>
                React Native
              </Typography>
              <Typography variant="caption" color="text.secondary">
                Desarrollo multiplataforma
              </Typography>
            </Box>

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                gap: 1,
                p: 1,
                flex: 1,
                minWidth: 100,
                boxShadow: 2
              }}>

              <Box sx={{ fontSize: 40, color: "#FFA000", display: "flex" }}>
                <SiFirebase />
              </Box>
              <Typography variant="subtitle1" fontWeight={700}>
                Firebase
              </Typography>
              <Typography variant="caption" color="text.secondary">
                Backend, base de datos y más
              </Typography>
            </Box>

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                gap: 1,
                p: 1,
                flex: 1,
                minWidth: 100,
                boxShadow: 2
              }}>

              <Box sx={{ fontSize: 40, color: "#539E43", display: "flex" }}>
                <SiNodedotjs />
              </Box>
              <Typography variant="subtitle1" fontWeight={700}>
                Node.js
              </Typography>
              <Typography variant="caption" color="text.secondary">
                APIs y servicios
              </Typography>
            </Box>

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                gap: 1,
                p: 1,
                flex: 1,
                minWidth: 100,
                boxShadow: 2
              }}>

              <Box sx={{ fontSize: 40, color: "#F24E1E", display: "flex" }}>
                <SiFigma />
              </Box>
              <Typography variant="subtitle1" fontWeight={700}>
                Figma
              </Typography>
              <Typography variant="caption" color="text.secondary">
                Diseño UI/UX de clase mundial
              </Typography>
            </Box>

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                gap: 1,
                p: 1,
                flex: 1,
                minWidth: 70,
                boxShadow: 2
              }}>
                
              <Box sx={{ fontSize: 48, color: "#3F51B5", display: "flex" }}>
                <IoCloudOutline />
              </Box>
              <Typography variant="subtitle1" fontWeight={100}>
                APIs
              </Typography>
              <Typography variant="caption" color="text.secondary">
                Integraciones con terceros
              </Typography>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default TecnologiasAppsM;