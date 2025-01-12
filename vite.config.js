import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

process.env.LANG = 'en_US';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
})
