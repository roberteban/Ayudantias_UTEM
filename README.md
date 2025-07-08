# Sistema de Postulación para Ayudantías - UTEM

## 📌 Descripción
Sistema web diseñado para **automatizar y optimizar** el proceso de postulación a ayudantías en la Escuela de Informática de la UTEM. Desarrollado como trabajo de titulación para Ingeniería Civil en Computación.

## ✨ Características principales

### Para estudiantes
- Postulación en línea con validación de datos  
- Consulta del estado de postulación (Postulando/Asignado/Evaluado)  
- Notificaciones por correo electrónico  

### Para profesores
- Evaluación de ayudantes (Aprobado/Reprobado)  
- Visualización de estudiantes asignados  
- Comentarios justificativos  

### Para administradores
- Gestión completa del proceso:
  - Registro de profesores y asignaturas  
  - Asignación de ayudantes  
  - Generación de reportes CSV  
  - Configuración de periodos académicos  
- Automatización:
  - Envío de correos electrónicos y actualización de estados  

## 🛠 Tecnologías utilizadas

### Frontend
- React.js (v18.2.0)  
- HTML5 / CSS3 / JavaScript  
- Bootstrap 5  

### Backend
- NestJS (v10.3.3)  
- PostgreSQL (v15.0)  
- JWT para autenticación  

### DevOps
- AWS EC2 / S3 (despliegue)  
- SendGrid (notificaciones por email)  

## 🚀 Instalación

### Requisitos previos
- Node.js v16+  
- PostgreSQL 15+  
- Cuenta en SendGrid  

## 📂 Estructura del proyecto

```
/backend
  ├── src/
  │   ├── modules/       # Microservicios (Auth, Admin, Apps)
  │   ├── models/        # Entidades de PostgreSQL
  │   └── main.ts        # Configuración principal

/frontend
  ├── public/            # Assets estáticos
  ├── src/
  │   ├── components/    # Componentes React
  │   ├── pages/         # Vistas principales (Home, Postulación, Administrador)
  │   └── App.js         # Configuración principal
```

## ✉️ Contacto
- **Autor**: Roberto Castillo Riquelme  
- **Correo**: [rcastillor@utem.cl](mailto:rcastillor@utem.cl)  
- **Escuela de Informática UTEM**
