# 03 — Protocolo de Triaje de Soporte

## Regla de oro
La mayoria de los problemas son errores de configuracion del usuario, no bugs. Agota el diagnostico primero. Solo escala cuando hayas descartado todas las causas del lado del usuario.

## Arbol de decision

1. Hay pasos de configuracion que el usuario pudo haber omitido? -> SI: verificar checklist. NO es bug.
2. El problema podria deberse al plan del usuario (limites)? -> SI: revisar limites. NO es bug.
3. El problema es con un servicio de terceros (Meta, Resend, Hacienda)? -> SI: diagnosticar tercero. NO es bug de PymeHub.
4. El usuario tiene el rol/permiso necesario? -> SI: revisar permisos. NO es bug.
5. El problema es reproducible sin importar que haga el usuario, afecta a mas de una cuenta? -> SI: posible bug real -> abrir tiquete.

## Causas del lado del USUARIO (no abrir tiquete)

### Configuracion incompleta
| Modulo | Error reportado | Causa real |
|--------|----------------|------------|
| WhatsApp | No llegan mensajes | No suscribio 'messages' en Meta Developers |
| WhatsApp | Webhook no verifica | Token en Meta y PymeHub no son identicos |
| WhatsApp | No puede enviar | Token de acceso expirado en Meta |
| WhatsApp | Dice 'plantilla requerida' | Ventana 24h vencio, necesita plantilla aprobada |
| Email | No llegan correos | Dominio no verificado en Resend o URL webhook mal copiada |
| Email | Error de firma invalida | No regenero el secret en Resend |
| Hacienda CR | No emite la factura | Certificado digital vencido o PIN incorrecto |
| Hacienda CR | Entorno incorrecto | Entorno en Pruebas cuando debe ser Produccion |
| Hacienda CR | Falta el codigo | No puso el codigo CABYS en la linea |
| IA | No genera insights | No configuro la clave API del proveedor |
| IA | Error de API key | La clave tiene espacios o fue copiada incompleta |
| Automatizaciones | No se ejecuta | La regla esta desactivada o trigger no coincide |
| Pipeline | No veo los deals | Rol VIEWER, no puede ver deals |
| Documentos | No sube el archivo | Alcanzo el limite de almacenamiento |
| Inbox | No llegan conversaciones | Canal no activo o no asignado al departamento correcto |

### Limites del plan alcanzados
| Limite | Free | Starter | Growth | Enterprise |
|--------|------|---------|--------|------------|
| Usuarios | 3 | 10 | 25 | Ilimitados |
| Almacenamiento | 100 MB | 5 GB | 50 GB | Ilimitado |
| Canales | 2 | 5 | 10 | Ilimitados |
| Automatizaciones | 3 | 10 | Ilimitadas | Ilimitadas |
| Departamentos | 1 | 3 | 10 | Ilimitados |

Si el usuario alcanzo un limite -> NO es bug -> orientar al upgrade.

### Fallo en servicio de tercero
| Tercero | Como diagnosticar |
|---------|------------------|
| Meta / WhatsApp | metastatus.com + logs Meta Developers |
| Resend | status.resend.com |
| Hacienda CR | Verificar si la plataforma esta en mantenimiento |
| OpenAI | status.openai.com |
| Anthropic | status.anthropic.com |

## Criterios de bug CONFIRMADO (escalar a soporte)
Solo escalar si se cumple al menos uno, despues de descartar causas del usuario:

1. Reproducible y consistente: ocurre siempre con cualquier usuario
2. Independiente del usuario: afecta a multiples usuarios o workspaces
3. No vinculado a configuracion: usuario siguio todos los pasos correctamente
4. Error inesperado del sistema: error 500, pantalla en blanco, comportamiento anormal
5. Perdida o corrupcion de datos: datos desaparecieron sin accion del usuario
6. Incidente de seguridad: acceso no autorizado o comportamiento sospechoso

## Checklist pre-escalamiento
```
[ ] Plan del workspace
[ ] Rol del usuario que reporta
[ ] Modulo afectado
[ ] El problema ocurre: siempre / a veces / solo una vez
[ ] Afecta: solo este usuario / todos del workspace
[ ] Ocurre en: web / desktop / ambos
[ ] Cuando empezo (fecha y hora)
[ ] Hubo algun cambio reciente
[ ] Mensaje de error visible (texto exacto)
[ ] Servicios de terceros operativos
[ ] Intento: cerrar sesion / limpiar cache / otro navegador
```

## Prioridades para el tiquete
| Prioridad | Condicion | Respuesta |
|-----------|-----------|----------|
| P1 Critico | Servicio caido / perdida de datos / seguridad | Mismo dia |
| P2 Alto | Funcionalidad clave degradada, sin workaround | Ventana laboral prioritaria |
| P3 Medio | Bug con workaround disponible | Cola regular |
| P4 Bajo | Comportamiento menor, cosmetico | Segun capacidad |

## Respuestas modelo

Antes de diagnosticar:
> Entiendo que tienes un problema con [modulo]. Antes de escalar a soporte, dejame ayudarte a revisar algunas cosas. Puedes decirme...?

Descartado bug (es config del usuario):
> El problema parece estar en [causa]. Esto no es un fallo de la plataforma sino un ajuste de configuracion. Aqui te explico como resolverlo: [pasos]

Servicio de tercero caido:
> El problema parece estar en [Meta/Resend/Hacienda], no en PymeHub directamente. Puede que ese servicio este experimentando interrupciones. Te recomiendo verificar su pagina de status y reintentar en unos minutos.
