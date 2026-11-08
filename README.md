# Práctica inicial de React — Testimonios

Ingeniería de Software · Unidad 3 · AGO–DIC 2026

## Integrantes
- Integrante 1: **Leonardo Rodríguez Gutiérrez.**
- Integrante 2: **Oscar Uriel Montalvo Cano**.

## Alcance
Etapa básica implementada. Ocho testimonios ficticios, navegación circular, aleatorio distinto, contador, manejo de cero y un registro, teclado y diseño adaptable. Autoplay no está integrado

Se añadieron cinco ficticios. Las fotos son URLs de demostración de Pravatar y dependen de Internet. Si fallan, aparece una silueta local. Los retratos remotos son ilustrativos y no identifican a las personas nombradas.

## Entorno comprobado
- Node.js: 20.16.0
- npm: 10.8.1
- React / React DOM: 18.3.1
- Vite: 5.4.21; plugin React: 4.7.0


## Abrir y ejecutar


```sh
npm ci
npm run dev
```



```sh
npm run build
npm run preview
```

`build` genera dist; `preview` permite revisar esa compilación localmente. 

## Organización
```text
index.html
src/
  main.jsx
  App.jsx
  data.js
  styles.css
  components/
    Testimonial.jsx
    Controls.jsx
public/avatar.svg
evidencias/
README.md
PRUEBAS.md
GUIA_ESTUDIO.md
TRABAJO_EN_PAREJA.md
```

- index.html contiene #root y carga main.jsx.
- main.jsx conecta React al HTML, mantiene StrictMode e importa estilos.
- App conserva index, calcula el registro y actualiza el estado.
- Testimonial recibe item; presenta la tarjeta sin importar los datos.
- Controls recibe callbacks y los ejecuta al pulsar botones.
- data.js contiene datos separados de la interfaz.

## Decisiones
Se usa estado en el padre para coordinar tarjeta y contador. La actualización funcional calcula desde el estado pendiente. El módulo envuelve los extremos; el salto aleatorio entre 1 y total − 1 evita repetir el actual. Con cero registros no se renderizan tarjeta ni controles; con uno los controles mantienen el índice. Los botones nativos admiten teclado y muestran foco. El contador anuncia los cambios mediante aria-live.

## Entrega
Incluye el código fuente, package.json, package-lock.json, .gitignore y los registros correspondientes. No se incluye node_modules ni dist. Las pruebas P01–P10 fueron ejecutadas y aprobadas exitosamente (ver PRUEBAS.md). Trabajo desarrollado en modalidad de parejas mediante técnicas de Pair Programming y control de versiones con Git.
