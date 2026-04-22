# Guía de Despliegue en Cloudflare Pages - PymeHub

Sí, el proyecto está 100% listo para ser desplegado en **Cloudflare Pages**, ya que consiste en archivos estáticos (HTML, CSS, JS) optimizados.

## 1. Preparación del Despliegue
Cloudflare Pages puede conectarse directamente a tu repositorio de GitHub o puedes subir los archivos manualmente.

**Pasos recomendados:**
1. Sube este código a un repositorio en GitHub (ej. `SaaS-PymeHub`).
2. En el dashboard de Cloudflare, ve a **Workers & Pages** > **Create application** > **Pages** > **Connect to Git**.
3. Selecciona el repositorio.
4. **Configuración de Build:**
   - Framework preset: `None`
   - Build command: (Dejar vacío)
   - Build output directory: `./` (o la raíz del proyecto)

## 2. Gestión de Cuentas (lejzerv@gmail.com)
Para no interferir con tu perfil de **GoBeyond**, tienes dos opciones en Cloudflare:
- **Cuentas Separadas:** Puedes cerrar sesión e iniciar con el correo específico de PymeHub si tienes uno diferente.
- **Selector de Cuentas:** Si usas el mismo email (`lejzerv@gmail.com`), Cloudflare permite crear múltiples "Cuentas" u Organizaciones. Puedes crear una nueva llamada "Otnel S.A." o "PymeHub" para mantener los proyectos de GoBeyond totalmente aislados de PymeHub. 
- **Seguridad:** Esto no afectará tus accesos anteriores; simplemente aparecerá un selector en la parte superior izquierda del dashboard de Cloudflare para cambiar entre contextos.

## 3. Configuración de Subdominios
Cloudflare Pages facilita la creación de los subdominios que planeamos:
- **Principal:** `pymeshub.lat` -> Apunta al proyecto raíz.
- **Documentación:** `docs.pymeshub.lat` -> Puedes crear otro proyecto en Pages que apunte a la carpeta `/docs` o usar una herramienta de generación de sitios (como Docusaurus) conectada a esa carpeta.

## 4. URLs Limpias (SEO)
Para que las páginas carguen como `pymeshub.lat/terminos` en lugar de `terminos.html`, crea un archivo llamado `_redirects` en la raíz con el siguiente contenido:

```text
/privacidad /privacidad.html 200
/terminos /terminos.html 200
/seguridad /seguridad.html 200
/uso-aceptable /uso-aceptable.html 200
/reembolsos /reembolsos.html 200
```

## 5. Headers de Seguridad
Recomendamos añadir un archivo `_headers` para mejorar la calificación de seguridad:

```text
/*
  X-Frame-Options: DENY
  X-Content-Type-Options: nosniff
  Referrer-Policy: strict-origin-when-cross-origin
  Strict-Transport-Security: max-age=31536000; includeSubDomains; preload
```
