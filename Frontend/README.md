# SentimentAPI Analytics - UI Proposal

Este repositorio contiene la propuesta de diseño frontend para **SentimentAPI Analytics**, una plataforma web dedicada al procesamiento masivo de Análisis de Sentimientos de Feedbacks.

**SentimentAPI** es una solución integral de Data Science y Backend diseñada para automatizar el análisis de feedback de clientes. Permite a las empresas procesar grandes volúmenes de reseñas y comentarios para identificar rápidamente la satisfacción del usuario, priorizar la atención de quejas y monitorear la reputación de marca.

El proyecto se centra en ofrecer una experiencia de usuario (UX) fluida para la carga de datasets (.csv) y la visualización clara de resultados predictivos.

##  Características Principales

* **Diseño Responsivo:** Adaptabilidad total a dispositivos móviles y escritorio utilizando **Bootstrap 5**.
* **Gestión de Archivos:** Interfaz intuitiva "Drag & Drop" para la carga de archivos CSV.
* **Dashboard Interactivo:** Visualización de métricas y distribución de sentimientos mediante **Chart.js**.
* **Feedback Visual:** Indicadores de estado, barras de progreso y clasificación por colores (Semáforo de sentimientos).
* **Estética Profesional:** Interfaz limpia (Clean UI) con tipografía legible y paleta de colores corporativa.

##  Stack Tecnológico

* **HTML5** - Estructura semántica.
* **CSS3** - Estilos personalizados y diseño adaptativo.
* **Bootstrap 5.3** - Framework de componentes UI y sistema de grillas.
* **JavaScript (ES6)** - Lógica de interacción y manipulación del DOM.
* **Chart.js** - Librería para la generación de gráficos dinámicos.

##  Estructura del Proyecto

* `index.html`: Landing page y módulo de carga de archivos.
* `dashboard.html`: Tablero de resultados y visualización de datos.
* `style.css`: Hoja de estilos personalizada.
* `script.js`: Lógica de frontend y simulación de datos.

##  Propuesta de Valor

En un entorno donde las empresas reciben miles de comentarios diarios, la lectura manual es inviable. Este proyecto ofrece:
* **Detección automática de urgencias:** Clasifica comentarios negativos para atención prioritaria.
* **Insights accionables:** Transforma texto no estructurado en métricas medibles.
* **Visión histórica:** Permite medir la evolución de la satisfacción del cliente.

## 🛠️ Arquitectura Técnica

El proyecto demuestra la integración funcional entre un modelo de Machine Learning y una API robusta.

###  Data Science (Python)
Utilizamos técnicas clásicas de **Procesamiento de Lenguaje Natural (NLP)** supervisado:
* **Limpieza de Datos (EDA):** Preprocesamiento de tweets y reviews (eliminación de stopwords, normalización).
* **Vectorización:** Transformación de texto a representación numérica mediante **TF-IDF**.
* **Modelo Predictivo:** Implementación de **Regresión Logística** (Logistic Regression) / Naive Bayes para clasificación de sentimientos.
* **Serialización:** Exportación del pipeline entrenado mediante `joblib`.

###  Back-End (Java & Spring Boot)
* **API RESTful:** Exposición de endpoints para consumo externo.
* **Integración:** Carga y ejecución del modelo predictivo para inferencia en tiempo real.
* **Validación:** Manejo de errores y respuestas JSON estandarizadas.

### 🎨 Front-End (Dashboard MVP)
* **Interfaz Web:** Panel para carga masiva de datos (Batch Processing) vía CSV.
* **Visualización:** Gráficos interactivos con **Chart.js** para distribución de sentimientos.
* **Bootstrap 5:** Diseño responsivo y profesional.

##  Funcionalidades (MVP)

### 1. Análisis en Tiempo Real
Endpoint para clasificar un comentario individual.
* **Input:** JSON con el texto a analizar.
* **Output:** Clasificación (Positivo/Neutro/Negativo) + Score de probabilidad (Confianza).

### 2. Batch Processing (Procesamiento por Lotes)
Capacidad de subir un archivo `.csv` con múltiples comentarios y recibir un reporte estadístico completo y visualizaciones en el Dashboard.

### 3. Soporte Multilingüe 🌍
El modelo ha sido entrenado para interpretar y clasificar textos tanto en **Español** como en **Portugués**, permitiendo escalabilidad regional.

## 📷 Vista Previa  

<img width="1920" height="1040" alt="00001_" src="https://github.com/user-attachments/assets/0a50e368-bf10-4842-a586-bc3b1b50152b" />
https://rominarg.github.io/DemoSentimentAPI/index.html
<img width="1920" height="1747" alt="00002_" src="https://github.com/user-attachments/assets/16f722df-429f-4990-8e38-ab188d36a16f" />
https://rominarg.github.io/DemoSentimentAPI/report
<img width="1771" height="258" alt="image" src="https://github.com/user-attachments/assets/0255f874-a569-4816-a612-5a8944bbccd0" />

