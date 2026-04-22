# Arquitectura y mapa de cumplimiento de PymeHub

**Estructura de Base de Datos Recomendada para Cumplimiento:**
- `legal_document_versions`: Historial de T&C y Privacidad.
- `workspace_acceptances`: Quién aceptó qué y cuándo.
- `tax_profiles`: Datos para facturación electrónica.
- `cabys_catalog_internal`: Mapeo de productos a códigos oficiales.
- `invoice_events`: Trazabilidad de facturación.
- `privacy_requests`: Registro de solicitudes ARCO.
- `security_incidents`: Bitácora de incidentes.
- `vendor_registry`: Lista de subprocesadores.
- `retention_rules`: Configuración de borrado automático.

**Puntos de control arquitectónico:**
1. Aislamiento lógico (Tenant Isolation) en cada endpoint.
2. Anonimización de datos en ambientes que no sean de producción.
3. Almacenamiento seguro de secretos (Vault/Secrets Manager).
4. Exportación nativa por workspace para portabilidad de datos.
5. Inmutabilidad de registros contables y fiscales.
