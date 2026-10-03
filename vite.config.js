import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
// VITE_BASE is set by the GitHub Pages workflow (e.g. "/Minus-Madurai-Landing/"); locally it is "/".
export default defineConfig({
  base: process.env.VITE_BASE || '/',
  plugins: [react()],
})
