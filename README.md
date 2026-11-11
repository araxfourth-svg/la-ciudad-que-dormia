# La Ciudad que Dormía — versión 2

## Instalación en GitHub Pages
1. **Borrá el ZIP anterior** del repositorio (no es necesario para la web).
2. Subí **todos los archivos y la carpeta `imagenes`** a la raíz del repositorio. `index.html` debe quedar visible en la lista principal.
3. En Settings → Pages elegí Deploy from a branch → `principal` → `/(root)` → Save.
4. Esperá la publicación y probá la web desde una ventana privada.

## Qué incluye
- Logo local corregido, 22 ilustraciones SVG locales (una por escena), letras grandes y modo proyector.
- Efectos sonoros simples activables, narración y diálogo Kai/VERA con voces del navegador (Web Speech API); dependen de las voces instaladas y del navegador. No son voces Gemini.
- Chat VERA con respuestas guiadas que funciona **sin API**.
- Integración **opcional** con Gemini para respuestas en vivo mediante Cloudflare Worker y clave secreta.

## Cómo activar Gemini (opcional, no necesario para la demostración)
1. Crear una API key en https://aistudio.google.com/apikey y consultar límites gratuitos actuales.
2. Crear un Cloudflare Worker con el contenido de `worker-gemini.js` (este archivo es de referencia; no se usa en GitHub Pages).
3. En Settings → Variables and Secrets del Worker, guardar `GEMINI_API_KEY` como **Secret** y `ALLOWED_ORIGIN` como texto con la URL exacta de la página, sin barra final, p.ej. `https://araxfourth-svg.github.io`.
4. Publicar el Worker. En `config.js`, escribir la URL HTTPS del Worker entre las comillas de `window.VERA_API_URL` y subir ese archivo a GitHub.
5. Verificar que el chat indique «Gemini conectado» tras responder. Si falla, se conserva el modo demostración.

**Seguridad:** GitHub Pages es estático. Nunca escribir la API key en `config.js`, HTML, JS del navegador o el repositorio. Para un sitio público, agregar protección adicional al Worker (rate limiting / Turnstile) para evitar abuso de cuota. El control de origen por sí solo no impide solicitudes desde otros clientes.

**Voces:** el modo incluido usa síntesis de voz gratuita del dispositivo. Gemini TTS es un servicio diferente y no está conectado en esta versión. Si quieren voces Gemini, generen audios previamente y guárdenlos en `audios/`, o desarrollen un servicio de audio seguro; el nivel gratuito y límites pueden variar.

**Presentación 3D:** este sitio contiene ilustraciones y efectos visuales, pero **no reemplaza** el recorrido o presentación tridimensional obligatoria del coloquio.
