import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Caminho para os arquivos estáticos do frontend
// O Vite build gera em dist/ (raiz) ou client/dist?
// Vamos usar o caminho que seu build atual gera
const staticPath = path.resolve(__dirname, "..", "dist", "public");

console.log("📁 Serving static files from:", staticPath);

// Servir arquivos estáticos
app.use(express.static(staticPath));

// Rota de health check
app.get("/api/health", (_req, res) => {
  res.json({ 
    status: "ok", 
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV 
  });
});

// Rota catch-all para SPA
app.get("*", (_req, res) => {
  res.sendFile(path.join(staticPath, "index.html"));
});

// Exportar para o Vercel
export default app;