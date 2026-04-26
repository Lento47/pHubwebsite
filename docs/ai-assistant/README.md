# PymeBot — AI Assistant Docs

Este directorio contiene todos los prompts, flujos y documentacion del asistente de IA de PymeHub (PymeBot).

## Estructura

| Archivo | Contenido |
|--------|----------|
| 01-system-prompt-principal.md | Prompt principal del sistema |
| 02-typos-normalization.md | Diccionario de typos y normalizacion |
| 03-support-triage.md | Protocolo de triaje bug vs error de usuario |
| 04-contact-directory.md | Directorio de contacto oficial con enrutamiento |
| 05-context-authenticated.md | Prompt contexto usuario autenticado (dinamico) |
| 06-context-unauthenticated.md | Prompt contexto usuario no autenticado (publico) |
| 07-language-detection.md | Deteccion de idioma y manejo de saludos |
| 08-upsell-limits.md | Prompt de limites y upsell natural |
| 09-tone-by-situation.md | Tonos por situacion |
| 10-conversation-closing.md | Cierre de conversacion |
| 11-anti-hallucination.md | Prompt anti-alucinacion |
| 12-onboarding-guided.md | Onboarding guiado para nuevos usuarios |
| 13-flow-whatsapp-setup.md | Flujo configuracion WhatsApp |
| 14-flow-email-setup.md | Flujo configuracion Email / Resend |
| 15-flow-hacienda-cr.md | Flujo configuracion Hacienda CR |
| 16-flow-first-automation.md | Flujo primera automatizacion |
| 17-flow-no-messages-debug.md | Flujo diagnostico mensajes que no llegan |
| 18-data-protection-in-chat.md | Proteccion de datos sensibles en el chat |
| 19-angry-user-handling.md | Manejo de usuarios enojados |
| 20-test-suite.md | Suite de pruebas del asistente (50 casos) |
| 21-scope-out-of-bounds.md | Temas fuera del scope del asistente |

## Como usar

Cada archivo es un bloque independiente. Se combinan en este orden al construir el prompt final:

```
[01] System Prompt Principal
[07] Language Detection
[05 o 06] Context Block (segun si el usuario esta autenticado)
[Historial de conversacion]
[Mensaje del usuario]
```

Los archivos 08 al 21 son instrucciones embebidas dentro del prompt principal o se inyectan segun el flujo activo.

## Contacto

- Soporte: support@pymeshub.lat
- Ventas: sales@pymeshub.lat
- Fundador: ltranav@pymeshub.lat
