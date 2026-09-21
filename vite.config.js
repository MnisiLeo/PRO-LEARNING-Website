import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { copyFileSync } from 'node:fs';
import { resolve } from 'node:path';

export default defineConfig({
  plugins: [react(), {
    name: 'github-pages-spa-fallback',
    closeBundle() {
      copyFileSync(resolve('dist/index.html'), resolve('dist/404.html'));
    }
  }],

  // Relative asset paths keep the site portable on static hosts and GitHub Pages.
  base: './',

  build: {
    outDir: 'dist',
    emptyOutDir: true
  }
});
