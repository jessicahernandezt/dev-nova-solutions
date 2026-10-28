import React from 'react';
import {
    Box,
    Typography,
} from '@mui/material';

const proyectos = [
  {
    tipo: 'Web',
    titulo: 'Plataforma de gestión empresarial',
    descripcion: 'Sistema completo para la administración de procesos internos.',
    tags: ['React', 'Node.js', 'PostgreSQL'],
  },
  {
    tipo: 'Móvil',
    titulo: 'App de reservas',
    descripcion: 'Aplicación móvil para reservas de servicios y control de estado.',
    tags: ['Flutter', 'Firebase', 'Node.js'],
  },
  {
    tipo: 'Web',
    titulo: 'Sistema de inventario',
    descripcion: 'Control de productos, entradas y reportes en tiempo real.',
    tags: ['React', 'Express', 'MongoDB'],
  },
  {
    tipo: 'E-commerce',
    titulo: 'Tienda en línea',
    descripcion: 'Plataforma de comercio electrónico con pagos en línea.',
    tags: ['Next.js', 'Stripe', 'AWS'],
  },
];

export default function ProyectosDestacados() {
  return (
    <Box sx={{ width: '99%', margin: '2% 1%' }}>
      
      <Box sx={{ padding: '0% 1%', mb: 3, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap' }}>
        <Box>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Box sx={{ width: '40px', height: '3px', backgroundColor: '#7c4dff', marginRight: '10px' }} />
            <Typography sx={{ fontWeight: 'bold', color: '#7c4dff' }}>
              Proyectos destacados
            </Typography>
          </Box>
          <Typography variant="h5" sx={{ fontWeight: 'bold', mt: 1, color: '#172554' }}>
            Soluciones reales para negocios reales
          </Typography>
          <Typography sx={{ color: '#888691', fontSize: '0.9rem', mt: 0.5 }}>
            Conoce algunos de nuestros proyectos más recientes y cómo ayudamos a nuestros clientes a alcanzar sus objetivos.
          </Typography>
        </Box>

        <Typography sx={{ color: '#7c4dff', fontWeight: 'bold', fontSize: '0.85rem', cursor: 'pointer', mt: { xs: 1, md: 0 } }}>
          Ver todos los proyectos →
        </Typography>
      </Box>

      <Box sx={{
        height: 'auto',
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: 2,
      }}>

        {proyectos.map((proyecto, index) => (
          <Box 
            key={index}
            sx={{
              marginTop: '10px',
              borderRadius: '10px',
              padding: '16px',
              width: { xs: '100%', sm: '48%', md: '23%' },
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              boxShadow: '0px 5px 15px rgba(0,0,0,0.08)',
              bgcolor: '#fff',
            }}
          >
            <Box>
              <Box 
                sx={{ 
                  bgcolor: '#f1f5f9', 
                  height: '130px', 
                  borderRadius: '8px', 
                  mb: 2, 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  color: '#94a3b8',
                  fontSize: '0.85rem'
                }}
              >
                [ Vista previa proyecto ]
              </Box>

              <Box 
                component="span" 
                sx={{ 
                  bgcolor: '#ede7f6', 
                  color: '#7c4dff', 
                  px: 1.5, 
                  py: 0.5, 
                  borderRadius: '4px', 
                  fontSize: '0.7rem', 
                  fontWeight: 'bold',
                  display: 'inline-block',
                  mb: 1 
                }}
              >
                {proyecto.tipo}
              </Box>

              <Typography variant="subtitle1" sx={{ fontWeight: 'bold', color: '#172554', fontSize: '0.95rem', mb: 0.5 }}>
                {proyecto.titulo}
              </Typography>
              <Typography sx={{ color: '#888691', fontSize: '0.8rem', mb: 2, minHeight: '35px' }}>
                {proyecto.descripcion}
              </Typography>

              <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', mb: 2 }}>
                {proyecto.tags.map((tag, tIndex) => (
                  <Box 
                    key={tIndex}
                    sx={{ 
                      bgcolor: '#f8fafc', 
                      color: '#475569', 
                      border: '1px solid #e2e8f0', 
                      px: 1, 
                      py: '2px', 
                      borderRadius: '4px', 
                      fontSize: '0.7rem', 
                      fontWeight: 600 
                    }}
                  >
                    {tag}
                  </Box>
                ))}
              </Box>
            </Box>

            <Typography sx={{ color: '#7c4dff', fontWeight: 'bold', fontSize: '0.8rem', cursor: 'pointer', mt: 1 }}>
              Ver proyecto →
            </Typography>
          </Box>
        ))}

      </Box>
    </Box>
  );
}