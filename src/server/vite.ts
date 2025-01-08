import express, { type Express } from "express";
import fs from "fs";
import path, { dirname } from "path";
import { fileURLToPath } from "url";
import { createServer as createViteServer, createLogger } from "vite";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
import { type Server } from "http";
import viteConfig from "../vite.config";

const viteLogger = createLogger();

export function log(message: string, source = "express") {
  const formattedTime = new Date().toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });

  console.log(`${formattedTime} [${source}] ${message}`);
}

export async function setupVite(app: Express, server: Server) {
  const vite = await createViteServer({
    ...viteConfig,
    configFile: false,
    customLogger: {
      ...viteLogger,
      error: (msg, options) => {
        if (msg.includes("[TypeScript] Found 0 errors. Watching for file changes")) {
          log("no errors found", "tsc");
          return;
        }

        if (msg.includes("[TypeScript] ")) {
          const [errors, summary] = msg.split("[TypeScript] ", 2);
          log(`${summary} ${errors}\u001b[0m`, "tsc");
          return;
        } else {
          viteLogger.error(msg, options);
          process.exit(1);
        }
      },
    },
    server: {
      middlewareMode: true,
      hmr: { server },
    },
    appType: "custom",
  });

  // Serve static files from public directory first
  app.use('/assets', express.static(path.resolve(__dirname, '../../public/assets')));
  app.use('/attached_assets', express.static(path.resolve(__dirname, '../../public/attached_assets')));

  app.use(vite.middlewares);

  // Handle all non-API routes
  app.use("*", async (req, res, next) => {
    const url = req.originalUrl;

    // Skip API routes
    if (url.startsWith('/api')) {
      return next();
    }

    try {
      const template = fs.readFileSync(
        path.resolve(__dirname, '../../index.html'),
        'utf-8'
      );
      const html = await vite.transformIndexHtml(url, template);
      res.status(200).set({ "Content-Type": "text/html" }).end(html);
    } catch (e) {
      vite.ssrFixStacktrace(e as Error);
      next(e);
    }
  });
}

export function serveStatic(app: Express) {
  const distDir = path.resolve(__dirname, '../../dist');
  const publicDir = path.resolve(__dirname, '../../public');

  if (!fs.existsSync(distDir)) {
    throw new Error(
      `Could not find the build directory: ${distDir}, make sure to build the client first`,
    );
  }

  // Serve static assets first
  app.use('/assets', express.static(path.join(publicDir, 'assets')));
  app.use('/attached_assets', express.static(path.join(publicDir, 'attached_assets')));

  // Then serve built assets
  app.use(express.static(distDir));

  // Handle all non-API routes
  app.use("*", (req, res, next) => {
    const url = req.originalUrl;

    // Skip API routes
    if (url.startsWith('/api')) {
      return next();
    }

    res.sendFile(path.resolve(distDir, "index.html"));
  });
}