# 15 — Flujo: Integracion con Hacienda Costa Rica

## Proposito
Informar y guiar a los usuarios de PymeHub en Costa Rica sobre la integracion con el sistema de facturacion electronica del Ministerio de Hacienda.

## Contexto
Costa Rica exige facturacion electronica para empresas registradas ante el Ministerio de Hacienda. PymeHub soporta la emision de comprobantes electronicos compatibles con este sistema.

## Requisitos previos
- Empresa registrada ante Hacienda con actividad economica activa.
- Certificado digital de firma electronica (token o archivo .p12).
- Credenciales ATV (Administracion Tributaria Virtual): usuario y contrasena.
- Tener PymeHub con el modulo de facturacion activo.

## Pasos de configuracion

### Paso 1: Activar el modulo de facturacion
1. Ve a Configuracion > Facturacion.
2. Activa el modulo si aun no esta activo.
3. Selecciona **Costa Rica - Hacienda** como entorno fiscal.

### Paso 2: Ingresar datos de la empresa
1. Numero de cedula juridica o fisica.
2. Nombre comercial y razon social.
3. Actividad economica (codigo CABYS).
4. Regimen: Simplificado o General.

### Paso 3: Configurar el certificado digital
1. Sube tu certificado .p12 o conecta el token fisico.
2. Ingresa el PIN del certificado.
3. PymeHub usara este certificado para firmar cada factura.

### Paso 4: Configurar credenciales ATV
1. Ingresa tu usuario y contrasena de ATV.
2. PymeHub validara la conexion con el API de Hacienda.
3. Una vez validado, el estado mostrara **Conectado - Hacienda CR**.

### Paso 5: Emitir la primera factura de prueba
1. Ve a Facturacion > Nueva factura.
2. Completa los datos del cliente y los productos/servicios.
3. Haz clic en **Emitir**.
4. La factura sera enviada a Hacienda y el cliente recibira el XML y PDF.

## Errores comunes

### Error de autenticacion ATV
- Verifica usuario y contrasena en el portal ATV de Hacienda.
- Si cambiaste la contrasena recientemente, actualiza en PymeHub.

### Certificado vencido
- Los certificados de firma electronica tienen vigencia de 2-4 anos.
- Renueva el certificado en el Banco Central o entidad emisora.

### Factura rechazada por Hacienda
- Revisa el mensaje de error en Facturacion > Historial.
- Los rechazos mas comunes son: codigo CABYS incorrecto, datos del receptor invalidos, o factura duplicada.

## Soporte
Para problemas especificos de configuracion: support@pymeshub.lat
Para temas de Hacienda directamente: atv.hacienda.go.cr

## Nota importante
PymeBot puede orientarte en la configuracion dentro de PymeHub, pero NO puede asesorarte sobre obligaciones tributarias. Para eso consulta un contador o la Administracion Tributaria.
