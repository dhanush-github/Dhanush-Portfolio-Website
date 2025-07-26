import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/Dhanush-Portfolio-Website/',  // <--- this must match your repo name!
})
