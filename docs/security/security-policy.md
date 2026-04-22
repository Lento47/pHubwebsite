# Política de Seguridad de la Información de PymeHub

Otnel S.A. adopta medidas administrativas, lógicas y organizativas para proteger la información tratada por PymeHub.

**1. Gobernanza.** El founder o la persona designada como Responsable de Seguridad aprobará esta política, llevará un inventario de activos y revisará riesgos al menos una vez al año.

**2. Accesos.** Todo acceso debe operar bajo principio de mínimo privilegio. Los accesos administrativos y de producción deben usar MFA, cuentas individuales y registro de auditoría.

**3. Segregación de tenants.** PymeHub deberá mantener aislamiento lógico por workspace en base de datos, almacenamiento y autorización de API.

**4. Credenciales y secretos.** Los secretos no se almacenarán en repositorio. Se administrarán mediante variables seguras o secret manager.

**5. Ciclo de desarrollo.** Todo cambio relevante deberá pasar por revisión de código, ambientes separados, control de dependencias y pruebas antes de producción.

**6. Backups y continuidad.** Se mantendrán copias de respaldo razonables de base de datos y configuraciones críticas, con prueba periódica de restauración.

**7. Proveedores.** Todo proveedor que trate datos o provea infraestructura crítica deberá quedar inventariado y sujeto a revisión básica de seguridad y privacidad.

**8. Logs.** Los eventos de acceso, cambios administrativos, exportaciones, borrados, integraciones y errores críticos deberán poder auditarse.
