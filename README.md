# 📝 Gestor de Tareas (Productividad y Hábitos)

Bienvenido. Este no es un gestor de tareas normal. Es un sistema integral diseñado para organizar tu vida entera: desde los apuntes del instituto, pasando por las rutinas de gimnasio, hasta los turnos de trabajo. Todo centralizado para que tu única preocupación sea actuar, no recordar.

## 🎯 ¿Qué te vas a encontrar?

Una interfaz atractiva y moderna que evoluciona contigo. Lo que empieza como una simple lista en blanco, se convierte en un centro de mando personal donde tus obligaciones se transforman en retos a superar, y tu esfuerzo se mide en estadísticas reales.

## 🚀 Funcionalidades (Visión del Proyecto)

*   **Categorías y Prioridades:** Clasifica tus tareas por ámbito (Estudios, Deporte, Hostelería, Ocio) y define qué es urgente y qué puede esperar.
*   **Rutinas Automáticas (Recurrencia):** ¿Tienes "Día de pierna" todos los jueves o "Turno de tarde" los fines de semana? Configura tareas para que reaparezcan solas cuando las necesites.
*   **Subtareas (Desglose):** Divide problemas grandes en pasos pequeños. Una tarea como "Estudiar JavaScript" puede desplegarse en mini-retos (Tema 1, Tema 2, Ejercicios) para que avanzar sea menos abrumador.
*   **Fechas Límite (Deadlines):** Asigna un día y una hora a tus entregas. El sistema te avisará visualmente cuando el tiempo se esté agotando.
*   **Buscador Inteligente:** Si tienes decenas de notas acumuladas, usa la barra de búsqueda en tiempo real para encontrar cualquier palabra al instante.
*   **Modo Oscuro / Claro:** Trabaja cómodamente a cualquier hora. Cambia la apariencia de toda la aplicación con un solo clic para adaptarla a la luz de tu entorno.

## 🎮 Gamificación y Métricas (Tu vida como un RPG)

*   **Sube de Nivel:** Completar tareas no solo tacha un texto, sino que te otorga puntos de experiencia (XP). Mantén tu racha diaria, acumula puntos y sube de nivel tu productividad.
*   **Panel de Estadísticas:** Visualiza tu esfuerzo. Accede a un resumen con gráficos de cuántas tareas has completado esta semana, qué categorías dominas más y dónde estás invirtiendo tu tiempo.

---

## 🚧 Estado Actual del Proyecto (Roadmap)

Actualmente, el proyecto se encuentra en su fase MVP (Producto Mínimo Viable). A continuación se detalla lo que ya está implementado y lo que está en desarrollo:

### ✅ Funcionalidades Completadas
*   **Maquetación y Diseño Responsive:** Interfaz estructurada semánticamente y adaptable a cualquier tamaño de pantalla mediante el uso de CSS Grid y Flexbox.
*   **Creación de Tareas:** Captura de datos a través de un formulario que incluye nombre de la tarea, prioridad, categoría y un rango de fechas.
*   **Validación de Entradas:** Sistema de seguridad integrado que bloquea la creación de tareas si existen campos vacíos o si la fecha de inicio es posterior a la de finalización.
*   **Manipulación Dinámica del DOM:** Generación de elementos en tiempo real en la lista de "Tareas pendientes".
*   **Flujo de Estados:** Lógica implementada para mover dinámicamente las tareas a la sección de "Tareas completadas" con su correspondiente cambio de estilo, así como la opción de eliminarlas definitivamente de la interfaz.

### ⏳ Pendiente de Implementación
*   **Persistencia de Datos:** Integración con `localStorage` (o base de datos futura) para evitar que las tareas se borren al recargar la página.
*   **Interactividad del Modo Oscuro:** Activación de la lógica JavaScript para el botón de "Modo Claro/Oscuro" ya existente en la interfaz.
*   **Sistema de Gamificación y XP:** Implementación de las métricas y suma de puntos al completar tareas.
*   **Buscador y Filtros:** Barra de búsqueda funcional para navegar entre las tareas acumuladas.
*   **Desglose de Subtareas y Alertas Visuales:** Para fechas límite próximas.

---

## 💻 Tecnologías Utilizadas

*   **HTML5:** Estructura semántica.
*   **CSS3:** Variables nativas, Flexbox, Grid Layout y Media Queries para el diseño *Mobile First*.
*   **JavaScript (ES6):** Manipulación del DOM, delegación de eventos y validación lógica sin frameworks.

## 🔄 Flujo de Uso

1.  Captura tu idea y añádele el contexto necesario en el formulario de la izquierda.
2.  Valida la prioridad, categoría y fechas.
3.  Presiona "Enviar" para inyectarla en tu panel principal.
4.  Actúa y utiliza los controles interactivos para completarla o eliminarla.