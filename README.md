# Frontend Poli - Gestión de Equipos y Autenticación

## Descripción

**Frontend Poli** es una aplicación web de gestión de equipos, autenticación de usuarios y notificaciones, desarrollada como parte del proyecto de desarrollo frontend para el grupo 16 del Politécnico Grancolombiano. El objetivo de este proyecto es implementar una interfaz de usuario interactiva, utilizando tecnologías modernas de desarrollo web, integrando funcionalidades como login, gestión de equipos y un sistema de notificaciones.

El proyecto está compuesto por varias funcionalidades clave que permiten administrar la información de equipos, manejar la autenticación del usuario mediante un login simulado y mostrar notificaciones visualmente atractivas utilizando **SweetAlert2**.

## Características Principales

1. **Autenticación de Usuario (Login)**:
   - Los usuarios pueden iniciar sesión con credenciales predefinidas.
   - Se implementa almacenamiento de sesión mediante `sessionStorage` para persistir la sesión del usuario.
   - Se utiliza la librería **SweetAlert2** para mostrar alertas interactivas y amigables al usuario.

2. **Gestión de Equipos (Teams)**:
   - Permite a los administradores agregar y gestionar equipos con información como los miembros y la universidad.
   - Los datos son almacenados y gestionados a través de la aplicación en el frontend.

3. **Notificaciones**:
   - Las notificaciones se muestran mediante un sistema interactivo que utiliza **SweetAlert2**, permitiendo a los usuarios recibir alertas visuales sobre eventos importantes.

4. **Estilo y Diseño**:
   - La aplicación está diseñada para ser completamente **responsive**, adaptándose a dispositivos móviles, tabletas y escritorios.
   - Utiliza una paleta de colores definida para mantener un diseño consistente y profesional.
   - Se emplea **CSS** modularizado y clases específicas para los diferentes componentes de la interfaz.

5. **Almacenamiento Local (localStorage)**:
   - Los datos de los equipos y usuarios se guardan en el almacenamiento local para persistir entre sesiones y facilitar la recuperación rápida de datos.

6. **Control de Sesiones**:
   - La autenticación de usuario se maneja con `sessionStorage`, asegurando que solo los usuarios autenticados puedan acceder a ciertas funcionalidades.

## Tecnologías Utilizadas

Este proyecto utiliza las siguientes tecnologías:

- **HTML5**: Estructura semántica y accesible de la aplicación.
- **CSS3**: Estilos visuales utilizando un enfoque modular.
- **JavaScript**: Lógica de interacción y manipulación del DOM.
- **SweetAlert2**: Librería para crear alertas visualmente atractivas.
- **localStorage**: Almacenamiento de datos del usuario en el navegador.
- **Git**: Control de versiones y gestión del código fuente.

## Estructura del Proyecto

El proyecto está organizado en las siguientes carpetas y archivos:
/modules /header - Contiene la cabecera de la interfaz de usuario, como el logo, nombre de usuario, y el botón de logout. /footer - Contiene la parte inferior de la interfaz, con información adicional. /login - Módulo encargado de la autenticación de usuario. /teams - Módulo para gestionar equipos, donde se pueden agregar miembros y asignarles universidades. /notification - Módulo que gestiona el sistema de notificaciones visuales utilizando SweetAlert2.

/scripts - Funciones JavaScript que manejan la lógica de la aplicación, como control de sesión y eventos de usuario.

/styles - Archivos CSS que definen los estilos de la aplicación, incluyendo diseño responsive y personalizado.
