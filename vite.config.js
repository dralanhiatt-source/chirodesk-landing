import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    tailwindcss(),
    react(),
  ],
  // Served at the domain root (chirodesk.pro via Cloudflare Pages), so assets
  // must resolve from '/', not the old GitHub Pages subfolder.
  base: '/',
})
