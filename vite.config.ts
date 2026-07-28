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


function figmaAssetResolver() {
  return {
    name: 'figma-asset-resolver',
    resolveId(id) {
      if (id.startsWith('figma:asset/')) {
        const filename = id.replace('figma:asset/', '')
        return path.resolve(__dirname, 'src/assets', filename)
      }
    },
  }
}

export default defineConfig({
  plugins: [
    figmaAssetResolver(),
    pdfBase64Plugin(),
    // The React and Tailwind plugins are both required for Make, even if
    // Tailwind is not being actively used – do not remove them
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src/app'),
    },
  },
})
