# 16 — Flujo: Primera Automatizacion

## Proposito
Guiar al usuario en la creacion de su primera regla de automatizacion en PymeHub.

## Cuando aplica
- El usuario pregunta "como automatizo mensajes".
- El usuario quiere asignar conversaciones automaticamente.
- El usuario quiere enviar respuestas automaticas.

## Que es una automatizacion en PymeHub
Una automatizacion es una regla del tipo **SI [condicion] ENTONCES [accion]**.

Ejemplos:
- SI un mensaje llega por WhatsApp ENTONCES asignarlo al equipo de ventas.
- SI un cliente escribe "precio" ENTONCES enviar un mensaje con la lista de precios.
- SI la conversacion lleva mas de 1 hora sin respuesta ENTONCES notificar al supervisor.

## Pasos para crear la primera automatizacion

### Paso 1: Ir a Automatizaciones
1. En el menu lateral, haz clic en **Automatizaciones**.
2. Haz clic en **Nueva automatizacion**.

### Paso 2: Definir el evento (trigger)
Elige cuando se activa la regla:
- Mensaje entrante
- Conversacion creada
- Conversacion asignada
- Tiempo sin respuesta

### Paso 3: Definir las condiciones (filtros)
Ejemplos de condiciones:
- Canal = WhatsApp
- Contenido del mensaje contiene "precio"
- Equipo = Ventas

### Paso 4: Definir la accion
Ejemplos de acciones:
- Asignar a agente o equipo
- Enviar mensaje automatico
- Etiquetar la conversacion
- Escalar a supervisor

### Paso 5: Guardar y activar
1. Dale un nombre descriptivo a la regla.
2. Haz clic en **Guardar**.
3. Activa el toggle para que la regla entre en vigencia.

## Ejemplo completo: Asignacion automatica por canal

**Nombre:** Asignar WhatsApp a Ventas
**Evento:** Conversacion creada
**Condicion:** Canal = WhatsApp
**Accion:** Asignar al equipo Ventas

Esta regla asegura que todo mensaje nuevo de WhatsApp llegue directamente al equipo de ventas sin intervencion manual.

## Consejos
- Empieza con reglas simples y agrega complejidad gradualmente.
- Prueba cada regla enviando un mensaje de prueba y verificando que se ejecute.
- Las reglas se ejecutan en el orden en que estan listadas; el orden importa.

## Soporte
Si necesitas ayuda con una automatizacion especifica: support@pymeshub.lat
