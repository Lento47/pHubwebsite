# 02 — Diccionario de Typos y Normalizacion

## Regla general
Si el mensaje contiene una palabra que se parece fonética o visualmente a un termino conocido de PymeHub, interpretarlo directamente y responder. Solo pedir aclaracion si hay ambiguedad real entre dos modulos distintos. Nunca corregir al usuario publicamente.

---

## Modulos y funciones
| El usuario escribe | Interpretar como |
|-------------------|------------------|
| inbok, imbox, imbok, inbx | Inbox Unificado |
| tarea, taera, tares, taraea | Gestion de Tareas |
| contacto, contato, cntacto | CRM de Contactos |
| documento, documeto, docs | Gestion de Documentos |
| automatizacion, automacion, autom | Automatizaciones |
| automatizaciones, automatisaciones | Automatizaciones |
| pipeline, pipe line, pipelne, pypeline | Pipeline de Ventas |
| insight, insite, insigth, insigths | Insights con IA |
| factura, facutra, fatura | Modulo de Facturacion |
| facturacion electronica, facturasion | Facturacion / Hacienda |
| hacienda, hacinda, hcienda | Integracion Hacienda CR |
| resumen, reumen, resmuen, resumenes | Resumenes IA Diarios |
| notificacion, notifcacion, notif | Notificaciones |
| workspace, worskpace, worspace, ws | Workspace |
| canal, cnal, cnaal | Canal de comunicacion |
| rol, role, roles | Roles y Permisos |
| permiso, permios, permisos | Permisos / Roles |
| departamento, depto, dpto, dept | Departamentos |
| configuracion, configracion, config | Configuracion |
| integracion, integrasion | Integracion |
| plan, planes, pricing, pricin | Planes y Precios |
| ocr, reconocimiento, texto del doc | OCR Automatico |
| deal, dael, dil, deals, oportunidad | Deal (Pipeline) |
| kanban, kamban, canban, tablero | Vista Kanban del Pipeline |

## Canales
| El usuario escribe | Interpretar como |
|-------------------|------------------|
| wsp, wpp, whats, whatsap, whatsaap, wasap | WhatsApp Business |
| correo, email, e-mail, emal, gmail, mail | Canal de Email |
| formulario, form, fromulario | Canal de Formulario |
| api, API | Canal API / REST |

## Acciones
| El usuario escribe | Interpretar como |
|-------------------|------------------|
| conectar, conektar, conecatar | Conectar / Configurar canal |
| configurar, confgiurar, configrar | Configurar |
| subir, sbir, cargar, upload, uplad | Subir archivo |
| exportar, expotrar, bajar, descargar | Exportar datos |
| importar, impotar | Importar contactos |
| activar, acticar | Activar canal/funcion |
| desactivar, desacticar, deshabilitar | Desactivar |
| actualizar, actulizar, update | Actualizar |
| emitir, emitr, emtir | Emitir factura |

## Roles
| El usuario escribe | Interpretar como |
|-------------------|------------------|
| dueno, dueño, owner, propietario | Rol OWNER |
| admin, adminitrador, administrador, admn | Rol ADMIN |
| agente, agent, agenet | Rol AGENT |
| viewer, viwer, lector, solo lectura | Rol VIEWER |

## Billing y planes
| El usuario escribe | Interpretar como |
|-------------------|------------------|
| gratis, free, gratuito, sin costo | Plan FREE |
| starter, stater, basico | Plan STARTER |
| growth, groth, crecimiento | Plan GROWTH |
| enterprise, entrprise, empresarial | Plan ENTERPRISE |
| mensual, al mes, por mes | Ciclo mensual |
| anual, al ano, yearly | Ciclo anual |
| upgrade, mejorar plan, subir plan | Upgrade de plan |
| downgrade, bajar plan, reducir plan | Downgrade de plan |
| cancelar, darme de baja | Cancelacion |
| reactivar, volver a activar | Reactivacion |

## Terminos tecnicos
| El usuario escribe | Interpretar como |
|-------------------|------------------|
| token, tocken, jwt, JWT | Token JWT |
| refresh token, token de refresco | Refresh token |
| webhook, web hook, webhoock, hook | Webhook |
| api key, apikey, clave api, llave api | Clave API |
| endpoint, endpont, ruta, url | Endpoint |
| bearer, beaer, auth token | Bearer Token |
| payload, paylod, body, cuerpo | Payload / Body |
| header, herader, encabezado | Header HTTP |

## Terminos de IA
| El usuario escribe | Interpretar como |
|-------------------|------------------|
| ia, IA, ai, AI, inteligencia | Funciones de IA |
| openai, open ai, chatgpt, gpt, gpt4 | Proveedor OpenAI |
| anthropic, claude, claud | Proveedor Anthropic |
| resumen diario, resumen de ayer | Resumenes IA Diarios |

## WhatsApp / Meta
| El usuario escribe | Interpretar como |
|-------------------|------------------|
| meta, meta business, meta devs | Meta for Business |
| token de meta, access token | Token de acceso Meta |
| numero de telefono id, phone id | Phone Number ID (Meta) |
| plantilla, template, templte | Plantilla WhatsApp |
| ventana 24, ventana de 24 horas | Ventana 24h WhatsApp |
| cabys, CABYS, codigo cabys | Codigo CABYS (Hacienda CR) |
| cedula juridica, cedula de empresa | Cedula juridica (Hacienda CR) |

## Frases informales completas
| El usuario escribe | Interpretar como |
|-------------------|------------------|
| no me llega el wsp / no llegan los wasap | Troubleshooting canal WhatsApp |
| el correo no funciona / los mails no llegan | Troubleshooting canal Email |
| se cayo todo / no entra la plataforma | Incidente P1 - escalar soporte |
| quiero mas usuarios / somos mas ahora | Upgrade de plan / limite usuarios |
| no me deja subir archivos | Limite de almacenamiento o error upload |
| no entiendo los insights / que significa el rojo | Explicar severidad de Insights |
| quiero conectar mi numero | Configurar canal WhatsApp |
| quiero poner mi correo / conectar mi email | Configurar canal Email |
| factura electronica / hacienda / tributacion | Integracion Hacienda CR |
| mis clientes / la base de datos | CRM de Contactos |
| las reglas / que haga algo solo | Automatizaciones |
| ver mis ventas / seguimiento de ventas | Pipeline de Ventas |
| quiero un bot / respuesta automatica | Automatizaciones / IA |

## Abreviaciones y emojis frecuentes
| El usuario escribe | Interpretar como |
|-------------------|------------------|
| x favor, xfa, porfas, porfa | Por favor (tono, ignorar) |
| tmb, tb, tambien | Tambien |
| pq, pk, porq | Porque / Por que |
| grax, ty, thx | Gracias (cerrar con cortesia) |

## Comportamiento ante typos
1. Si hay typo claro y una sola interpretacion posible -> responder directamente sin mencionar el error.
2. Si hay typo + ambiguedad entre 2 modulos -> confirmar brevemente: ¿Me estas preguntando sobre [A] o sobre [B]?
3. Si el mensaje es completamente incomprensible -> preguntar: No estoy seguro de entender bien. ¿Puedes contarme que estas intentando hacer en PymeHub?
4. Nunca corregir al usuario publicamente.
5. En WhatsApp los mensajes son mas cortos e informales. Adaptarse sin perder precision tecnica.
