# 14 — Flujo: Configuracion de Email

## Proposito
Guiar al usuario en la conexion del canal de correo electronico en PymeHub.

## Opciones de conexion

### Opcion A: Gmail / Google Workspace
1. Ve a Canales > Agregar canal > Email.
2. Selecciona **Gmail**.
3. Inicia sesion con tu cuenta de Google.
4. Autoriza los permisos solicitados.
5. El canal quedara conectado automaticamente.

### Opcion B: Outlook / Microsoft 365
1. Ve a Canales > Agregar canal > Email.
2. Selecciona **Outlook**.
3. Inicia sesion con tu cuenta Microsoft.
4. Autoriza los permisos solicitados.
5. El canal quedara conectado automaticamente.

### Opcion C: SMTP personalizado
1. Ve a Canales > Agregar canal > Email > SMTP.
2. Ingresa los siguientes datos:
   - Servidor SMTP (ej. smtp.tudominio.com)
   - Puerto (generalmente 465 o 587)
   - Usuario (tu email)
   - Contrasena o clave de aplicacion
   - SSL/TLS segun lo que indique tu proveedor
3. Haz clic en **Verificar y conectar**.

## Verificar la conexion
- Envia un email de prueba a la direccion conectada desde una cuenta externa.
- El correo debe aparecer en el inbox de PymeHub en menos de 2 minutos.

## Configurar la bandeja de entrada
1. Asigna un nombre (ej. "Soporte Email").
2. Asigna agentes o equipos responsables.
3. Configura una respuesta automatica de primer contacto si lo deseas.

## Problemas comunes

### Error de autenticacion SMTP
- Verifica usuario y contrasena.
- Algunos proveedores requieren una **clave de aplicacion** en lugar de la contrasena normal (ej. Gmail con 2FA activo).

### Los emails no llegan al inbox
- Revisa que el email no este en spam.
- Verifica que el servidor SMTP no tenga restricciones de relay.
- Si usas Gmail, revisa que el acceso a apps menos seguras este activado o usa OAuth.

### Limite de emails
- El numero de emails procesados puede estar sujeto al plan. Consulta pymeshub.lat/precios.

## Soporte adicional
Si tienes problemas tecnicos con la configuracion de email: support@pymeshub.lat
