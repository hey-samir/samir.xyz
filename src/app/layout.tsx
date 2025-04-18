import { inter, alexandria } from "../config/fonts";
import "./globals.css";
import { metadata, viewport } from "./metadata";
import Layout from "../components/layout/layout";
import ClientCompatWrapper from "../components/compat/client-wrapper";

/**
 * Root layout that supports both server-side metadata and client interactivity
 * 
 * This component stays as a server component to support next/metadata exports
 * but delegates interactive rendering to the ClientLayout component
 */
export { metadata, viewport };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html 
      lang="en" 
      className={`${inter.className} ${alexandria.className} ${inter.variable} ${alexandria.variable}`}
      suppressHydrationWarning
    >
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover, maximum-scale=1" />
        <meta name="theme-color" content="#ffffff" media="(prefers-color-scheme: light)" />
        <meta name="theme-color" content="#2a3bff" media="(prefers-color-scheme: dark)" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="mobile-web-app-capable" content="yes" />
        
        <link rel="icon" href="/attached_assets/favicon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/attached_assets/favicon.png" />
        
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&icon_names=dark_mode,menu,light_mode" />
        
        {/* Inline CSS to prevent FOUC (Flash of Unstyled Content) */}
        <style dangerouslySetInnerHTML={{ __html: `
          html, body { 
            margin: 0 !important; 
            padding: 0 !important; 
            width: 100vw !important; 
            max-width: 100vw !important; 
            overflow-x: hidden !important;
            opacity: 1 !important; 
            visibility: visible !important;
          }
          
          /* Fix for white borders */
          body > div, #__next, div[data-nextjs-root] {
            max-width: 100vw !important;
            margin: 0 !important;
            padding: 0 !important;
            overflow-x: hidden !important;
          }
          
          /* Full width nav and footer */
          nav, header, .emergency-navbar, .purple-navbar-direct, footer, .emergency-footer, .sync-emergency-footer {
            width: 100vw !important;
            margin: 0 !important;
            padding: 0 !important;
            left: 0 !important;
            right: 0 !important;
            border: none !important;
            box-sizing: border-box !important;
          }
          
          /* Navigation styling */
          header, nav {
            background-color: #5239cc !important;
            position: fixed !important;
            top: 0 !important;
            height: 80px !important;
            z-index: 1000 !important;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15) !important;
          }
          
          /* Footer styling */
          footer {
            background-color: #5239cc !important;
            color: white !important;
            position: relative !important;
            z-index: 900 !important;
          }
          
          /* WebView-specific optimizations that need to be applied early */
          .webview body {
            -webkit-transform: translateZ(0);
            transform: translateZ(0);
            -webkit-overflow-scrolling: touch;
            opacity: 1 !important;
            visibility: visible !important;
          }
        `}} />
        
        {/* Enhanced theme detection with WebView compatibility */}
        <script dangerouslySetInnerHTML={{ __html: `
          // Initial theme and WebView detection
          (function() {
            try {
              // Theme detection
              if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
                document.documentElement.classList.add('dark');
              }
              
              // Basic WebView detection for early optimization
              const userAgent = navigator.userAgent.toLowerCase();
              if (
                userAgent.includes('wv') || 
                (/(iphone|ipod|ipad)/.test(userAgent) && !userAgent.includes('safari')) ||
                userAgent.includes('electron') ||
                window.webkit?.messageHandlers ||
                window.Android ||
                window.MSApp ||
                window.ReactNativeWebView
              ) {
                document.documentElement.classList.add('webview');
              }
            } catch(e) {
              // Silent fallback for older browsers
              console.error('Early detection error:', e);
            }
          })();
        ` }} />
        
        {/* Synchronous page loading script */}
        <script src="/page-sync-loader.js" defer></script>
      </head>
      <body 
        className="antialiased"
      >
        {/* WebView compatibility provider - cleanly handles WebView-specific optimizations */}
        <ClientCompatWrapper>
          <Layout>
            {children}
          </Layout>
        </ClientCompatWrapper>
        
        {/* Fail-safe script to show content if it seems hidden after load */}
        <script dangerouslySetInnerHTML={{ __html: `
          // Fail-safe to ensure content is visible, run after everything else
          setTimeout(function() {
            try {
              // If main content area seems empty, try to force visibility
              const main = document.querySelector('main');
              if (main && (!main.children.length || main.offsetHeight < 10)) {
                console.log('Applying fail-safe visibility fixes');
                main.style.opacity = '1';
                main.style.visibility = 'visible';
                main.style.display = 'block';
                document.body.style.opacity = '1';
                document.body.style.visibility = 'visible';
              }
            } catch(e) {
              console.error('Fail-safe error:', e);
            }
          }, 1000);
        `}} />
      </body>
    </html>
  );
}