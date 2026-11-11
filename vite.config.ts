import { defineConfig } from 'vite'
import path from 'path'
import fs from 'fs'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

// Embeds .pdf files as base64 data URIs so they work in any hosting environment
function pdfBase64Plugin() {
  return {
    name: 'pdf-base64',
    load(id: string) {
      const cleanId = id.split('?')[0]
      if (!cleanId.endsWith('.pdf')) return
      const base64 = fs.readFileSync(cleanId).toString('base64')
      return `export default "data:application/pdf;base64,${base64}"`
    },
  }
}

export default defineConfig({
  plugins: [
    pdfBase64Plugin(),
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src/app'),
    },
  },
})
