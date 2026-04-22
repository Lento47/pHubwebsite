# Mapa de Servicios de Terceros de PymeHub

## 1. Propósito

Este mapa resume los servicios de terceros utilizados o previstos por PymeHub y la función que cumplen dentro de la arquitectura. Sirve como vista rápida de dependencias críticas para arquitectura, privacidad y revisión de proveedores (vendor review).

## 2. Mapa Operativo

| Servicio | Función dentro de PymeHub | Tipo de datos implicados | Criticidad | Documento relacionado |
| --- | --- | --- | --- | --- |
| **OpenAI** | Insights, resúmenes, funciones IA | Contexto, prompts, outputs | Alta | `product-compliance/product-compliance-requirements.md` |
| **Resend** | Correo transaccional | Correos, metadatos | Media/Alta | `security/data-retention-subprocessors-risk.md` |
| **S3 / MinIO** | Documentos y adjuntos | Archivos y metadatos | Alta | `security/data-retention-subprocessors-risk.md` |
| **Redis / BullMQ** | Jobs y automatizaciones | IDs, metadatos operativos | Media | `security/data-retention-subprocessors-risk.md` |
| **AWS / Azure** | Hosting, API, Postgres | Datos operativos | Alta | `security/security-policy.md` |
| **Sentry / Logtail** | Alertas y errores | Logs y eventos | Media | `security/data-retention-subprocessors-risk.md` |
| **Stripe / PayPal** | Cobro de suscripciones | Datos de cobro del cliente | Alta | `business/tax-invoicing-cabys-guide.md` |

## 3. Regla Interna

Ningún servicio de terceros debe incorporarse a producción sin quedar reflejado también en nuestro inventario de subprocesadores y el registro de riesgos de proveedores.
