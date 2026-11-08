# Registro de pruebas de la etapa básica

Comprobación técnica realizada el 4 de noviembre de 2026 en Chrome automatizado. Para P01–P05 se usaron temporalmente los tres registros iniciales; para P06 uno, para P07 ninguno; al terminar se restauraron los ocho. Estas pruebas no sustituyen la participación de los integrantes ni la revisión por otra pareja.

| Caso | Resultado | Resultado obtenido |
|---|---|---|
| P01 | Aprobado | Ana; 1 de 3 |
| P02 | Aprobado | Luis; 2 de 3 |
| P03 | Aprobado | Último a primero |
| P04 | Aprobado | Primero a último |
| P05 | Aprobado | Diez cambios sin repetición; salto entre 1 y total-1 revisado |
| P06 | Aprobado | Un registro permanece estable |
| P07 | Aprobado | Vacío: mensaje y cero controles |
| P08 | Aprobado | Ocho registros recorridos y retorno al primero |
| P09 | Aprobado | 320/768/1280 sin desbordamiento; Tab, Enter, Espacio y texto largo correctos |
| P10 | Aprobado | Sin errores de aplicación en navegador; compilación comprobada por separado |

## Evidencias
- evidencias/pantalla-320.png
- evidencias/pantalla-768.png
- evidencias/pantalla-1280.png

La compilación `npm run build` terminó sin errores con Vite 5.4.21. Se capturaron errores de aplicación con el evento pageerror del navegador: cero durante el recorrido. Esto no garantiza disponibilidad permanente del servicio remoto de fotos ni reemplaza una auditoría completa de accesibilidad.

## Revisión realizada
Se revisó la selección aleatoria: salto = 1 + floor(random * (total − 1)). Para total > 1 siempre está entre 1 y total − 1, por lo que al aplicar módulo no conserva el índice. Para total < 2 retorna sin cambiarlo. Se añadieron guardas explícitas en next y prev para evitar módulo cero incluso si se invocaran fuera de los controles. Se comprobó el caso vacío, el caso unitario y el recorrido completo.

## Repetición por el equipo
| Caso | Resultado propio | Evidencia o corrección | Responsable |
|---|---|---|---|
| P01 | Pendiente | Completar | Completar |
| P02 | Pendiente | Completar | Completar |
| P03 | Pendiente | Completar | Completar |
| P04 | Pendiente | Completar | Completar |
| P05 | Pendiente | Completar | Completar |
| P06 | Pendiente | Completar | Completar |
| P07 | Pendiente | Completar | Completar |
| P08 | Pendiente | Completar | Completar |
| P09 | Pendiente | Completar | Completar |
| P10 | Pendiente | Completar | Completar |

Autoplay A01–A07: no implementado ni evaluado en esta versión básica.
