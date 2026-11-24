# Cuentas D'talles Any

App de contabilidad e inventario de **D'talles Any** (bolsos) y **Makeup by D'talles Any**.

- Ventas con su costo y comisión, gastos, ganancia neta por mes y por negocio, clientas que deben.
- Inventario: vender un producto lo saca del inventario; canjes y regalos se anotan como gasto.
- Córdobas o dólares con tasa de cambio editable.
- Varios usuarios con perfiles (Administrador / Vendedor/a). Los datos se comparten en tiempo real con Firebase y funcionan sin internet.

## Archivos
- `index.html` — la app completa.
- `config.js` — configuración de Firebase y administradores iniciales (huella de su correo).
- `firestore.rules` — reglas de seguridad (los correos reales se ponen en la consola de Firebase, no aquí).
- `sw.js`, `manifest.webmanifest`, `icons/` — para instalarla como app y abrirla sin internet.

Los datos del negocio **no** están en este repositorio: viven en Firebase y solo los ven los perfiles autorizados.
