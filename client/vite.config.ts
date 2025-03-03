import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import themePlugin from "@replit/vite-plugin-shadcn-theme-json";
import path from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

// Custom plugin for asset and 404 logging
const assetLoggingPlugin = () => ({
  name: 'asset-logging',
  configureServer(server) {
    server.middlewares.use((req, res, next) => {
      console.log(`[Request] ${req.url}`);
      const handleResponse = () => {
        if (res.statusCode === 404) {
          console.warn(`[Asset Not Found] ${req.url}`);
        }
      };
      res.on('finish', handleResponse);
      next();
    });
  }
});

export default defineConfig({
  // Add explicit base URL
  base: '/',

  plugins: [
    react(), 
    runtimeErrorOverlay(), 
    themePlugin(),
    assetLoggingPlugin()
  ],

  resolve: {
    alias: {
      "@": path.resolve(__dirname),
      "@components": path.resolve(__dirname, "components"),
      "@pages": path.resolve(__dirname, "pages"),
      "@lib": path.resolve(__dirname, "lib"),
      "@assets": path.resolve(rootDir, "public/assets")
    },
  },

  // Set explicitly to root dir and not client dir for proper file resolution
  root: rootDir,
  publicDir: path.resolve(rootDir, 'public'),

  // Add this CSS configuration to explicitly point to our PostCSS config
  css: {
    postcss: path.resolve(rootDir, "postcss.config.js")
  },

  build: {
    outDir: path.resolve(rootDir, "build"),
    emptyOutDir: true,
    sourcemap: true,
    rollupOptions: {
      input: {
        main: path.resolve(rootDir, "index.html"),
      },
      output: {
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name?.split('.');
          const extType = info?.[info.length - 1];
          if (/png|jpe?g|svg|gif|tiff|bmp|ico|webp/i.test(extType || '')) {
            return `assets/images/[name][extname]`;
          }
          if (/css/i.test(extType || '')) {
            return `assets/css/[name][extname]`;
          }
          return `assets/[name][extname]`;
        },
        chunkFileNames: 'assets/js/[name].js',
        entryFileNames: 'assets/js/[name].js',
      },
    },
  },

  server: {
    host: '0.0.0.0',
    port: 5000,
    // Add allowedHosts configuration to include Replit domains
    hmr: {
      clientPort: 443,
      host: 'localhost',
    },
    cors: true,
    strictPort: true,
    // Configure to allow Replit domains - explicitly adding the current domain
    allowedHosts: [
      'localhost',
      '127.0.0.1',
      'd2193f08-b592-45ce-b730-8dc2c7ef133c-00-1f1txs3yeigba.janeway.replit.dev',
      '.replit.dev',
      '.repl.co',
      '.repl.run',
      'all', // This ensures all hosts are allowed as a fallback
    ],
    fs: {
      strict: false,
      allow: ['.']
    },
    watch: {
      usePolling: true,
      interval: 100
    }
  }
});