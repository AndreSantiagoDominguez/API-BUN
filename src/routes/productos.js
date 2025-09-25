import { productos } from "../data/productos.js";

export function handleProductos(req) {
  const url = new URL(req.url);

  // GET /productos -> lista todos los productos
  if (url.pathname === "/productos" && req.method === "GET") {
    return new Response(JSON.stringify(productos), {
      headers: { "Content-Type": "application/json" },
    });
  }

  // GET /productos/:id -> obtiene un producto por id
  if (url.pathname.startsWith("/productos/") && req.method === "GET") {
    const id = parseInt(url.pathname.split("/")[2]);
    const producto = productos.find((p) => p.id === id);

    if (!producto) {
      return new Response(JSON.stringify({ error: "Producto no encontrado" }), {
        status: 404,
        headers: { "Content-Type": "application/json" },
      });
    }

    return new Response(JSON.stringify(producto), {
      headers: { "Content-Type": "application/json" },
    });
  }

  return null; // No coincide con esta ruta
}
