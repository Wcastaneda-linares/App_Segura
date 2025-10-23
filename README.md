# 🛡️ App_Segura

![CI](https://github.com/Wcastaneda-linares/App_Segura/actions/workflows/ci.yml/badge.svg)

API segura desarrollada con **Node.js** y **Express**, implementando buenas prácticas de seguridad en el desarrollo de software.  
Proyecto práctico del curso **Seguridad en Aplicaciones** – Maestría en Seguridad Informática, **Universidad Mariano Gálvez de Guatemala**.

---

## 🔒 Características principales
- Autenticación y autorización con **JWT**  
- Roles (usuario / administrador)  
- Validación y sanitización de entradas (**express-validator**)  
- Cabeceras seguras con **helmet**  
- Comunicación **HTTPS** local con certificados (**mkcert**)  
- Límite de peticiones (**express-rate-limit**)  
- Registro de auditorías (**morgan**)  
- Escaneo de vulnerabilidades (**npm audit**)  
- Análisis estático (**ESLint + plugin security**)  
- **CI/CD automatizado** con GitHub Actions  

---

## ⚙️ Instalación

# Clonar el repositorio
git clone https://github.com/Wcastaneda-linares/App_Segura.git
cd App_Segura

# Instalar dependencias
npm install

# Crear archivo de entorno
copy .env.example .env
