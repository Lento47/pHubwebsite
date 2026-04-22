# Recursos, Licencias y Cumplimiento Ético Open Source de PymeHub

PymeHub combina tres tipos de recursos en su arquitectura técnica:
1. Software open source embebido o desplegado por el equipo.
2. Infraestructura self-hosted o de terceros con obligaciones de licencia específicas.
3. APIs y servicios propietarios integrados.

## 1. Inventario de Dependencias
El proyecto cuenta con 143 dependencias directas, predominando licencias permisivas:
- **MIT**: 114 paquetes.
- **Apache-2.0**: 18 paquetes.
- **Dual/Otras**: BSD-2-Clause, ISC, Unlicense.

## 2. Recursos Core Open Source

| Recurso | Uso en PymeHub | Licencia |
| --- | --- | --- |
| **NestJS / React / Vite** | Core Frameworks | MIT |
| **TailwindCSS / Framer Motion** | UI & Styling | MIT |
| **Prisma / TypeScript** | ORM & Development | Apache-2.0 |
| **Tauri 2** | Desktop App Shell | MIT / Apache-2.0 |
| **PostgreSQL** | Base de Datos | PostgreSQL License |
| **MinIO** | Object Storage (Self-hosted) | GNU AGPLv3 |

## 3. Puntos Críticos de Cumplimiento

### A. Gestión de Redis
- **Estado:** PymeHub utiliza Redis para BullMQ.
- **Riesgo:** Versiones >= 7.4 usan licencias restrictivas (RSALv2 o SSPLv1).
- **Acción:** Se recomienda fijar el despliegue en **Redis 7.2.x** (BSD-3-Clause) o migrar a **Valkey** para mantener una postura 100% OSI-compliant.

### B. Uso de MinIO (AGPLv3)
- El uso de MinIO en entornos comerciales requiere una revisión cuidadosa para asegurar el cumplimiento de la licencia AGPLv3, especialmente en distribuciones auto-alojadas.

### C. Proveedores de IA y APIs
- Servicios como **OpenAI**, **Gemini** o **Anthropic** son propietarios.
- **Regla:** Deben declararse como terceros en el mapa de subprocesadores, con advertencias claras al usuario sobre la generación de contenido por IA.

## 4. Compromisos Éticos
1. **Transparencia en IA:** Disclosure obligatorio al cliente sobre cuándo se están utilizando modelos de lenguaje.
2. **Minimización de Datos:** No se envían datos sensibles a APIs externas sin procesamiento previo o consentimiento.
3. **Atribución:** Mantener todos los avisos de copyright de las librerías open source utilizadas.

## 5. Próximos Pasos de Cumplimiento
- [ ] Publicar archivo `LICENSE` maestro para el código propio.
- [ ] Generar `THIRD_PARTY_NOTICES.md` para las compilaciones de escritorio (Tauri).
- [ ] Auditar versiones de dependencias anualmente para detectar cambios de licencia (como el caso de Redis).
