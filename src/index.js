import { serve } from "bun";
import { handleProductos } from "./routes/productos.js";

const PORT = 3000;

const server = serve({
  port: PORT,
  fetch(req) {
    // Intentamos manejar con la ruta de productos
    const response = handleProductos(req);
    if (response) return response;

    // Ruta no encontrada
    return new Response(JSON.stringify({ error: "Ruta no encontrada" }), {
      status: 404,
      headers: { "Content-Type": "application/json" },
    });
  },
});

console.log(`Servidor corriendo en http://localhost:${PORT}`);
