# 17 — Flujo: Debug de Mensajes que No Llegan

## Proposito
Ayudar al usuario a diagnosticar por que los mensajes no estan llegando al inbox de PymeHub.

## IMPORTANTE: Antes de escalar a soporte
Seguir este flujo de diagnostico completo. El 80% de los casos se resuelven sin necesidad de soporte.

## Preguntas de diagnostico inicial

Pregunta al usuario:
1. Cual canal no esta recibiendo mensajes? (WhatsApp, Email, otro)
2. Desde cuando ocurre el problema?
3. Los mensajes dejaron de llegar de golpe o gradualmente?
4. Hubo algun cambio reciente? (nuevo dispositivo, cambio de contrasena, reinstalacion)

## Checklist de diagnostico por canal

### WhatsApp

**1. Verificar estado del canal**
- Ve a Canales > WhatsApp.
- El estado debe decir "Conectado". Si dice "Desconectado" o "Error":
  - Haz clic en Reconectar.
  - Escanea el QR nuevamente.

**2. Verificar que el telefono tiene internet**
- El numero de WhatsApp debe estar activo y con conexion a internet permanente.
- Si el telefono se apago, perdio internet o fue reiniciado, el canal se desconecta.

**3. Verificar que no hay sesion duplicada**
- Si alguien abrio WhatsApp Web en otro lugar con el mismo numero, esto puede cerrar la sesion en PymeHub.

**4. Enviar un mensaje de prueba**
- Envia un mensaje desde otro numero al numero conectado.
- Espera 30 segundos y verifica si aparece en el inbox.

### Email

**1. Verificar estado del canal de email**
- Ve a Canales > Email.
- Confirma que el estado sea "Activo".

**2. Verificar que el email no este en spam**
- Revisa si los mensajes de prueba llegan a la carpeta de spam del email conectado.

**3. Para SMTP: verificar credenciales**
- Si cambiaste la contrasena del email recientemente, actualiza las credenciales SMTP en PymeHub.

**4. Para Gmail: verificar permisos OAuth**
- Ve a tu cuenta Google > Seguridad > Aplicaciones con acceso.
- Verifica que PymeHub tenga acceso activo.

## Causas comunes y soluciones

| Causa | Solucion |
|-------|----------|
| Canal desconectado | Reconectar y escanear QR |
| Telefono sin internet | Restaurar conexion del telefono |
| Sesion duplicada de WhatsApp | Cerrar otras sesiones y reconectar |
| Contrasena cambiada | Actualizar credenciales en PymeHub |
| Canal asignado a inbox incorrecto | Verificar asignacion de bandejas |
| Filtro de automatizacion bloqueando | Revisar reglas de automatizacion |

## Cuando escalar a soporte
Si despues de seguir todos los pasos el problema persiste:
- Escribe a support@pymeshub.lat con:
  - El canal afectado
  - Desde cuando ocurre
  - Capturas de pantalla del estado del canal
  - Lo que ya intentaste
