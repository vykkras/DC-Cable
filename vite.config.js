import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/DC-Cable/', // 👈 matches your GitHub repo name exactly!
  plugins: [react()],
});


