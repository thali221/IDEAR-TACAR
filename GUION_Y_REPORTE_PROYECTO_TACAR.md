# 📄 INFORME MAESTRO & GUION DE EXPOSICIÓN OFICIAL
## PROYECTO: "IDEAR TACAR"
### *Ecosistema Tecnológico de Supra-reciclaje (Upcycling), Diagnóstico con IA y Economía Circular*

---

## 📌 ÍNDICE GENERAL DEL DOCUMENTO
1. **Ficha Técnica & Resumen Ejecutivo**
2. **Propósito del Proyecto & Planteamiento del Problema**
3. **Arquitectura Tecnológica & Funcionamiento Interno**
4. **Guion Completo de Exposición Paso a Paso (Para la Competencia)**
5. **Glosario de Términos Técnicos en Lenguaje Sencillo**
6. **Desafíos Técnicos Superados & Soluciones de Ingeniería**
7. **Simulador de Preguntas del Jurado & Respuestas Estratégicas**
8. **Métricas de Impacto Ambiental, Económico y Social**

---

## 1. FICHA TÉCNICA & RESUMEN EJECUTIVO

* **Nombre del Proyecto:** IDEAR TACAR
* **Tipo de Plataforma:** Aplicación Multiplataforma Web / PWA / Android APK
* **Área de Aplicación:** Sostenibilidad Ambiental, Economía Circular, Inteligencia Artificial Aplicada e Innovación Social.
* **Público Objetivo:** Hogares, instituciones educativas, talleres de artesanía, emprendedores de eco-diseño y comunidades vecinales.
* **Propuesta de Valor:** Democratizar y profesionalizar el supra-reciclaje (*upcycling*) mediante visión computacional e Inteligencia Artificial Generativa, permitiendo que cualquier persona transforme sus residuos en objetos duraderos, útiles y con valor comercial comprobado.

---

## 2. PROPÓSITO DEL PROYECTO & PLANTEAMIENTO DEL PROBLEMA

### El Problema:
Diariamente se desechan millones de toneladas de residuos sólidos (botellas PET, frascos de vidrio, cajas de cartón, latas de conserva, retazos textiles y chatarra electrónica). Aunque existe un creciente interés de la población por reciclar, existen tres barreras fundamentales:
1. **Falta de ideas viables y personalizadas:** Las personas no saben qué hacer exactamente con los residuos específicos que tienen a la mano.
2. **Falta de criterios técnicos y de seguridad:** Muchas iniciativas terminan en manualidades frágiles que rápidamente vuelven a ser basura por falta de orientación sobre adhesivos, cortes o resistencia.
3. **Aislamiento comunitario:** No existe un canal directo para intercambiar materiales sobrantes entre vecinos o emprendedores.

### La Solución "IDEAR TACAR":
IDEAR TACAR no solo dice *"recicla"*, sino que empodera al usuario para **hacer Upcycling con respaldo técnico**:
* Analiza el residuo con Inteligencia Artificial.
* Genera una terna graduada de 3 ideas originales (Práctica, Creativa e Innovadora).
* Evalúa la viabilidad técnica antes de empezar (calculando resistencia, costos de insumos vs. valor comercial y riesgos).
* Guía el proceso paso a paso en un Taller cronometrado con asistente virtual.
* Conecta a los creadores a través de una Comunidad y una Bolsa de Trueque de materiales.

---

## 3. ARQUITECTURA TECNOLÓGICA & FUNCIONAMIENTO INTERNO

La plataforma opera bajo una arquitectura desacoplada y de alta resiliencia:

```
[ Usuario en Móvil / PC ]
        │
        ▼ (Interfaz Visual Reactiva - HTML5 / Tailwind / JS)
[ FRONTEND & PWA ] ──── Guardado Local ────► [ LocalStorage del Dispositivo ]
        │
        ▼ (Peticiones seguras HTTP / REST API)
[ SERVIDOR BACKEND (Node.js + Express) ]
        │
        ▼ (Despachador con Respaldo en Cascada)
┌──────────────────────────────────────────────────────────┐
│  1º Intento: Google Gemini 3.7 Flash                     │
│  2º Intento: Google Gemini 3.1 Flash Lite (Respaldo)     │
│  3º Intento: Gemini Flash Latest                         │
│  4º Respaldo de Emergencia: Generador Contextual Local    │
└──────────────────────────────────────────────────────────┘
```

1. **Frontend (Interfaz de Usuario):** Desarrollado con tecnologías estándar de alto rendimiento (HTML5, Tailwind CSS y JavaScript Vanilla sin dependencias pesadas). Optimizado para interacción táctil en pantallas móviles y monitores de escritorio.
2. **Backend (Servidor API):** Construido en Node.js con Express. Gestiona las comunicaciones seguras con las APIs de Inteligencia Artificial (Google GenAI SDK) ocultando las credenciales del cliente.
3. **Persistencia Local (Almacenamiento Desconectado):** Guarda el progreso de proyectos, estados del taller y configuraciones en el `localStorage` del navegador para operar fluidamente incluso ante pérdida de señal.

---

## 4. GUION COMPLETO DE EXPOSICIÓN PASO A PASO

> **Recomendación para el Expositor:** Utiliza este guion como una guía cronológica. No intentes memorizar cada palabra; comprende las ideas principales de cada bloque.

---

### 🎙️ BLOQUE 1: Introducción, Impacto del Problema y Propósito (Tiempo: ~1 minuto)

> *"Buenos días / tardes, señores miembros del jurado y público presente. Junto a mi equipo, hoy tenemos el agrado de presentarles **IDEAR TACAR**.*
>
> *Todos los días, en nuestros hogares y comunidades, generamos toneladas de residuos: botellas de plástico, frascos de vidrio, cajas de cartón, latas o ropa en desuso. Aunque la gran mayoría de ciudadanos tiene la intención de cuidar el planeta, casi siempre nos encontramos con la misma barrera: **no sabemos qué hacer exactamente con lo que tenemos a la mano**, nos faltan ideas prácticas o terminamos haciendo manualidades improvisadas que se rompen al poco tiempo.*
>
> *Nuestra aplicación nace para cambiar esa realidad a través del **Upcycling** o supra-reciclaje. A diferencia del reciclaje convencional que destruye los materiales para fundirlos, nosotros enseñamos al usuario a transformar sus residuos en objetos de mayor calidad, diseño estético y valor económico, guiándolo paso a paso con Inteligencia Artificial."*

---

### 🎙️ BLOQUE 2: Arquitectura del Software y Desarrollo (Tiempo: ~1.5 minutos)

> *"Desde el primer día de desarrollo, nuestro desafío fue crear una herramienta universal que pudiera ejecutarse tanto en una computadora como en cualquier celular Android, incluso en formato de aplicación móvil instalable (PWA / APK).*
>
> *Estructuramos la aplicación en tres capas fundamentales:*
> 1. *Un **Frontend reactivo y liviano**, que carga de forma instantánea y ofrece controles táctiles intuitivos.*
> 2. *Un **Backend servidor en Node.js y Express**, que procesa de manera segura las peticiones y se comunica con los modelos de visión y lenguaje de **Google Gemini**.*
> 3. *Un **Sistema de persistencia local**, que garantiza que el usuario pueda consultar sus proyectos guardados, el catálogo de ideas y el taller interactivo incluso si se queda sin internet en su taller o casa.*
>
> *Todo el código fue diseñado bajo estrictos estándares de accesibilidad, modularidad y alta velocidad de respuesta."*

---

### 🎙️ BLOQUE 3: Demostración en Vivo de las Funcionalidades Clave (Tiempo: ~2.5 a 3 minutos)

*(Pasa a la pantalla de la aplicación y ve interactuando con los módulos)*

> *"Veamos ahora cómo funciona la experiencia de un usuario en IDEAR TACAR:*
>
> 1. ***Módulo Transformar (Escaneo y Reconocimiento):***
>    *El usuario puede encender su cámara en vivo, subir una foto de su residuo o seleccionar múltiples materiales a la vez (por ejemplo, plástico y cartón juntos). El sistema analiza la imagen e identifica el tipo de material y su estado.*
>
> 2. ***Terna de 3 Ideas Dinámicas:***
>    *La Inteligencia Artificial no entrega una sugerencia genérica, sino tres alternativas graduadas:*
>    - *Una idea **Práctica**: Fácil, rápida y de utilidad directa para ordenar el hogar o el trabajo.*
>    - *Una idea **Creativa**: Enfocada en estética, lámparas ambientales o arte decorativo.*
>    - *Una idea **Innovadora**: Con diseño modular, sistemas de autorriego o principios de física aplicada.*
>    *Además, calibramos el motor con 'creatividad dinámica' para que dos personas con la misma botella plástica no reciban las mismas ideas repetidas, sino opciones frescas y variadas.*
>
> 3. ***El Evaluador y Simulador de Viabilidad Técnica:***
>    *Antes de que el usuario gaste tiempo, pegamento o corte un material, creamos el botón **🔍 Diagnóstico / Evaluar**. Este evaluador realiza un análisis integral:*
>    - *Calcula el **Puntaje de viabilidad técnica** (si el material soportará el uso diario).*
>    - *Genera la **Simulación del aspecto final** y sugiere una paleta de colores armónica.*
>    - *Realiza la **Estimación financiera**: calcula el costo de insumos vs. el valor comercial estimado en el mercado, mostrando el ahorro neto generado.*
>    - *Advierte sobre **Riesgos de fabricación** y entrega consejos de seguridad para evitar accidentes.*
>
> 4. ***Visor Interactivo Antes ➔ Después (Slider ↔):***
>    *Contamos con una herramienta interactiva donde el usuario desliza una barra central para comparar el material descartado inicial frente a la pieza final terminada, pudiendo registrar fotográficamente su resultado real.*
>
> 5. ***Modo Taller, Eco-Puntos y Comunidad de Trueque:***
>    *El modo Taller desglosa el ensamblaje en fases con temporizadores y un asistente virtual para resolver dudas. Al finalizar, el usuario gana 'Eco-Puntos' en su pasaporte ecológico, puede publicar su logro en la Comunidad o intercambiar sobrantes en la **Bolsa de Trueque**."*

---

### 🎙️ BLOQUE 4: Desafíos Técnicos, Errores Superados y Resiliencia (Tiempo: ~1.5 minutos)

> *"Como en todo proyecto de ingeniería, enfrentamos retos técnicos significativos que resolvimos con buenas prácticas:*
>
> 1. ***Saturación en servidores de IA (Errores de Alta Demanda / Error 503):***
>    *En momentos de congestión de servidores de IA, las peticiones externas podían fallar. Para solucionar esto, implementamos un **despachador de respaldo multi-modelo en cascada**. Si el modelo principal experimenta saturación, el sistema conmuta automáticamente a modelos secundarios ligeros o activa un generador de respaldo algorítmico contextual, garantizando que la app **nunca** se congele ni arroje errores.*
>
> 2. ***Sincronización Cliente-Servidor en el Diagnóstico:***
>    *Detectamos que los esquemas de datos del evaluador debían coincidir exactamente entre la interfaz y el backend. Estandarizamos el formato JSON para que el análisis de resistencia, ahorro y acabado sea 100% específico al material real del usuario.*
>
> 3. ***Optimización para Teléfonos Móviles:***
>    *Optimizamos el procesamiento de imágenes en el cliente para que el escaneo sea ágil incluso en celulares con cámaras de alta resolución y conexiones móviles moderadas."*

---

### 🎙️ BLOQUE 5: Conclusión y Cierre Contundente (Tiempo: ~45 segundos)

> *"En conclusión, **IDEAR TACAR** demuestra cómo la tecnología, la Inteligencia Artificial y el diseño sostenible pueden converger para empoderar a la ciudadanía.*
>
> *No solo ayudamos a limpiar nuestro entorno y reducir la huella de carbono, sino que generamos ahorro económico directo para las familias y fomentamos una cultura de creadores conscientes.*
>
> *Muchísimas gracias por su atención. Quedamos a su entera disposición para responder sus preguntas o realizar cualquier demostración que deseen ver."*

---

## 5. GLOSARIO DE TÉRMINOS TÉCNICOS EN LENGUAJE SENCILLO

| Término Técnico | ¿Qué significa en lenguaje cotidiano? | Ejemplo o Analogía |
| :--- | :--- | :--- |
| **Upcycling / Supra-reciclaje** | Transformar un residuo en un objeto de mayor valor y utilidad sin destruirlo ni fundirlo. | Convertir una botella de vidrio descartada en una lámpara de diseño nórdico. |
| **Economía Circular** | Modelo donde nada se tira a la basura; todo residuo se reincorpora como recurso útil. | En lugar de botar una caja de cartón, se transforma en un soporte ergonómico para laptop. |
| **PWA (Progressive Web App)** | Una página web moderna que se puede instalar en el celular como si fuera una app nativa. | Funciona directo desde el navegador, sin descargas pesadas desde tiendas de apps. |
| **Fallback en Cascada** | Un sistema de relevo automático: si la primera opción falla, salta a la segunda de inmediato. | Como tener una llanta de repuesto lista por si se pincha la principal. |
| **Error 503 (High Demand)** | Código de internet que indica que el servidor remoto estaba temporalmente lleno de usuarios. | Como una línea telefónica que suena ocupada durante unos segundos por exceso de llamadas. |
| **Payload / Esquema JSON** | La estructura ordenada con la que viajan los datos entre la pantalla y el servidor. | La "hoja de pedido" que incluye el nombre del residuo, los pasos y la dificultad. |
| **Temperatura (en IA)** | Parámetro que regula qué tan creativa u original es la respuesta de la Inteligencia Artificial. | Si la temperatura es baja, responde lo obvio; si es alta, propone ideas novedosas y originales. |
| **Persistencia Local (LocalStorage)** | La memoria interna del navegador que guarda los datos del usuario. | Un bloc de notas digital que no se borra aunque cierres la app o apagues el celular. |

---

## 6. DESAFÍOS TÉCNICOS SUPERADOS & SOLUCIONES DE INGENIERÍA

1. **Problema: Saturación de peticiones en la API de IA (Error 503)**
   * *Diagnóstico:* Picos de tráfico en los servidores de IA provocaban respuestas fallidas si se dependía de un único modelo.
   * *Solución:* Se programó la función `generateWithFallback()` en el servidor, orquestando una cadena de respaldo que prueba secuencialmente `gemini-3.7-flash`, `gemini-3.1-flash-lite` y `gemini-flash-latest`, con una pausa preventiva y un generador contextual inteligente en caso extremo.
2. **Problema: Respuestas genéricas y repetitivas para un mismo material**
   * *Diagnóstico:* Dos usuarios escaneando una botella PET recibían casi siempre la misma idea de "Macetero".
   * *Solución:* Se inyectaron vectores de inspiración aleatoria (iluminación ambiental, domótica casera, huertos verticales, ergonomía nórdica, acústica) y se ajustó la temperatura a `0.95`, forzando a la IA a concebir diseños originales.
3. **Problema: Desfase en el Diagnóstico de Viabilidad**
   * *Diagnóstico:* El frontend enviaba propiedades distintas a las que requería el esquema del servidor.
   * *Solución:* Se unificó el contrato de datos JSON, permitiendo que el evaluador devuelva puntajes reales de viabilidad, paletas de color personalizadas y cálculos de ahorro en moneda local.

---

## 7. SIMULADOR DE PREGUNTAS DEL JURADO & RESPUESTAS GANADORAS

### ❓ Pregunta 1: "¿Por qué un usuario usaría su app en lugar de buscar un video en YouTube o TikTok?"
* **Respuesta Ganadora:** *"En YouTube o TikTok los tutoriales son genéricos y asumen que tienes exactamente los mismos materiales del video. IDEAR TACAR hace un **diagnóstico personalizado en tiempo real**: analiza las propiedades de TU residuo específico, evalúa si resistirá el peso, calcula cuánto dinero ahorrarás en materiales y te acompaña paso a paso con temporizadores y un asistente interactivo."*

### ❓ Pregunta 2: "¿Qué garantiza que la aplicación funcione si el usuario no tiene buena conexión a internet?"
* **Respuesta Ganadora:** *"Diseñamos la app con arquitectura 'Offline-First' y soporte PWA. Toda la información clave, proyectos iniciados, historial del taller y catálogo de contingencia se almacenan localmente en el dispositivo. Si la conexión se interrumpe, el usuario puede continuar su taller y registrar sus avances sin problemas."*

### ❓ Pregunta 3: "¿Cómo proyectan la sostenibilidad o monetización del proyecto?"
* **Respuesta Ganadora:** *"Proyectamos tres modelos de escalabilidad:
  1. **Alianzas Municipales y Educativas:** Licenciamiento de la plataforma para programas de segregación en la fuente y educación ambiental escolar.
  2. **Mercado de Insumos y Kits Eco-Design:** Venta de herramientas domésticas seguras y selladores ecológicos dentro de la plataforma.
  3. **Patrocinios Verdes:** Espacios para empresas sostenibles en la Bolsa de Trueque y Comunidad."*

---

## 8. MÉTRICAS DE IMPACTO AMBIENTAL, ECONÓMICO Y SOCIAL

* **Impacto Económico Directo:** Ahorro familiar estimado entre **S/. 15.00 y S/. 50.00 por proyecto**, al sustituir compras comerciales por manufactura propia con residuos.
* **Aprovechamiento de Materiales:** Reducción de hasta un **85% en volumen de residuos domésticos descartables** (plásticos PET/HDPE, cartones y latas).
* **Eficiencia de Fabricación:** Proyectos diseñados para completarse en un rango de **20 a 45 minutos**, sin necesidad de herramientas industriales costosas.
* **Fomento de la Economía Colaborativa:** Intercambio activo de materiales sobrantes a través de la Bolsa de Trueque, evitando que piezas reutilizables terminen en la basura.

---
*Documento oficial generado para el equipo de desarrollo de **IDEAR TACAR**. Listo para revisión, impresión o exportación a formato digital.*
