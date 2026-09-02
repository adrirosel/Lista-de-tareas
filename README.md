# 📝 Gestor de Tareas (Productividad y Hábitos)

Bienvenido. Este no es un gestor de tareas normal. Es un sistema integral diseñado para organizar tu vida entera: desde los apuntes del instituto, pasando por las rutinas de gimnasio, hasta los turnos de trabajo. Todo centralizado para que tu única preocupación sea actuar, no recordar.

## 🎯 ¿Qué te vas a encontrar?

Una interfaz atractiva y moderna que evoluciona contigo. Lo que empieza como una simple lista en blanco, se convierte en un centro de mando personal donde tus obligaciones se transforman en retos a superar, y tu esfuerzo se mide mediante una racha de constancia.

## 🚀 Funcionalidades Principales

*   **Categorías y Prioridades:** Clasifica tus tareas por ámbito (Estudios, Deporte, Hostelería, Ocio) y define qué es urgente y qué puede esperar.
*   **Fechas de Ejecución:** Asigna un día de inicio y una fecha de finalización a tus entregas. El sistema valida automáticamente que las fechas sean coherentes antes de registrar la tarea.
*   **Buscador Inteligente:** Si tienes decenas de notas acumuladas, usa la barra de búsqueda en tiempo real para filtrar tus tareas al instante.
*   **Modo Oscuro / Claro:** Trabaja cómodamente a cualquier hora. Cambia la apariencia de toda la aplicación con un solo clic para adaptarla a la luz de tu entorno.

## 🎮 Gamificación (Tu vida como un RPG)

*   **Sistema de Racha Diaria:** Completar tareas no solo tacha un texto, sino que alimenta tu constancia. El sistema detecta tu actividad y aumenta tu contador diario (🔥) cada vez que añades o completas una tarea. ¡No rompas la cadena!

---

## ✅ Estado Actual del Proyecto (v1.0)

El proyecto es funcional, persistente y cuenta con la siguiente arquitectura técnica:

*   **Maquetación y Diseño Responsive:** Interfaz estructurada semánticamente y adaptable a cualquier tamaño de pantalla mediante el uso de CSS Grid y Flexbox.
*   **Creación de Tareas:** Captura de datos a través de un formulario que incluye nombre de la tarea, prioridad, categoría y un rango de fechas, asignando un ID único a cada entrada.
*   **Validación de Entradas:** Sistema de seguridad integrado que bloquea la creación de tareas si existen campos vacíos o si la fecha de inicio es posterior a la de finalización.
*   **Manipulación Dinámica del DOM:** Generación de elementos en tiempo real en la lista de "Tareas pendientes".
*   **Flujo de Estados:** Lógica implementada para mover dinámicamente las tareas a la sección de "Tareas completadas" con su correspondiente cambio de estilo, así como la opción de eliminarlas definitivamente de la interfaz.
*   **Interactividad del Modo Oscuro:** Botón que altera las variables CSS globales para adaptar la experiencia de usuario.
*   **Persistencia de Datos:** Integración total con `localStorage` para guardar el array de tareas, el tema visual elegido y el estado del contador de racha.
*   **Sistema de Racha Diaria:** Algoritmo que calcula los días transcurridos mediante el objeto `Date` para evaluar, mantener o reiniciar el progreso del usuario.

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