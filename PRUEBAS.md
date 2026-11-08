# Registro de pruebas de la etapa básica

Comprobación técnica. Para P01–P05 se usaron temporalmente los tres registros iniciales; para P06 uno, para P07 ninguno; al terminar se restauraron los ocho.

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
| P01 | Aprobado | Validación de primer registro (Ana) y contador en 1/8 | Leonardo Rodríguez |
| P02 | Aprobado | Navegación al siguiente registro mediante botón Siguiente | Oscar Uriel |
| P03 | Aprobado | Salto circular desde el último elemento hacia el primero | Leonardo Rodríguez |
| P04 | Aprobado | Retroceso circular desde el primer elemento hacia el último | Oscar Uriel |
| P05 | Aprobado | Generación de índice aleatorio sin repetición consecutiva | Leonardo Rodríguez |
| P06 | Aprobado | Comprobación de estabilidad con un único registro en base | Oscar Uriel |
| P07 | Aprobado | Manejo correcto de estado vacío (0 registros) | Leonardo Rodríguez |
| P08 | Aprobado | Recorrido completo de los 8 testimonios y retorno | Oscar Uriel |
| P09 | Aprobado | Pruebas de responsividad (320px, 768px, 1280px) y accesibilidad por teclado | Leonardo Rodríguez |
| P10 | Aprobado | Compilación exitosa con `npm run build` sin errores en consola | Oscar Uriel |


