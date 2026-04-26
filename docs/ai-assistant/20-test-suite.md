# 20 — Suite de Pruebas del Asistente

## Proposito
Casos de prueba para validar que PymeBot se comporta correctamente en distintos escenarios antes de publicarlo en produccion.

## Como usar esta suite
Simula cada caso enviando el mensaje de prueba al asistente y verifica que la respuesta esperada se cumple.

---

## GRUPO 1: Deteccion de idioma y saludos

### T01 - Saludo en espanol
**Input:** `hola`
**Esperado:** Saludo calido en espanol + oferta de ayuda. NO busqueda documental.

### T02 - Saludo en ingles
**Input:** `hi`
**Esperado:** Saludo calido en ingles + oferta de ayuda.

### T03 - Saludo informal
**Input:** `buenas`
**Esperado:** Respuesta en espanol con tono informal y amistoso.

### T04 - Cambio de idioma en conversacion
**Input:** Primera pregunta en espanol, segunda en ingles.
**Esperado:** El asistente cambia su idioma para adaptarse.

---

## GRUPO 2: Soporte tecnico y triage

### T05 - Problema de plataforma real
**Input:** `mis mensajes de WhatsApp no llegan al inbox desde ayer`
**Esperado:** Diagnostico guiado. Checklist de verificacion. NO escalada inmediata a soporte.

### T06 - Error de usuario
**Input:** `no puedo agregar un cuarto usuario` (plan Free)
**Esperado:** Explicar que el limite del plan Free es 3 usuarios y ofrecer upgrade, NO abrir ticket.

### T07 - Escalada legitima a soporte
**Input:** Usuario que completo el diagnostico de T05 y sigue con el problema.
**Esperado:** Derivar a support@pymeshub.lat con instrucciones claras.

---

## GRUPO 3: Anti-alucinacion

### T08 - Precio inexistente
**Input:** `cuanto cuesta el plan Diamond de PymeHub?`
**Esperado:** El asistente indica que no existe ese plan y redirecciona a la pagina de precios.

### T09 - Funcion inventada
**Input:** `puedo hacer videollamadas desde PymeHub?`
**Esperado:** El asistente indica que no tiene informacion de esa funcion y sugiere contactar soporte.

---

## GRUPO 4: Contexto de usuario

### T10 - Usuario no autenticado pregunta por su cuenta
**Input:** `cuantos contactos tengo en mi workspace?`
**Esperado:** El asistente indica que necesita estar autenticado para acceder a esa informacion.

### T11 - Usuario autenticado recibe contexto de su cuenta
**Input:** Simulacion de sesion autenticada + pregunta sobre el plan.
**Esperado:** El asistente responde con datos del contexto inyectado (nombre del workspace, plan).

---

## GRUPO 5: Tono y cierre

### T12 - Usuario molesto
**Input:** `ESTO NO FUNCIONA, QUE PLATAFORMA TAN MALA`
**Esperado:** Empatia primero, sin defensiva, luego oferta de ayuda concreta.

### T13 - Cierre de conversacion
**Input:** `gracias, eso era todo`
**Esperado:** Cierre calido, corto, sin repetir todo lo hablado.

---

## GRUPO 6: Flujos guiados

### T14 - Usuario nuevo pregunta por donde empezar
**Input:** `acabo de crear mi cuenta, que hago ahora?`
**Esperado:** Inicio del flujo de onboarding guiado (12-onboarding-guided).

### T15 - Configuracion de WhatsApp
**Input:** `como conecto whatsapp?`
**Esperado:** Inicio del flujo 13-flow-whatsapp-setup con pasos claros.

### T16 - Configuracion de Hacienda CR
**Input:** `como configuro la factura electronica?`
**Esperado:** Inicio del flujo 15-flow-hacienda-cr con requisitos previos y pasos.

---

## Criterios de aprobacion
Cada caso debe:
- Responder en el idioma correcto.
- No inventar informacion.
- No escalar a soporte antes del diagnostico.
- Mantener tono apropiado para la situacion.
- No solicitar datos sensibles innecesarios.
