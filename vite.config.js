// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'
// import tailwindcss from '@tailwindcss/vite'  // ye line nayi

// export default defineConfig({
//   plugins: [
//     react(),
//     tailwindcss(),  // ye bhi nayi
//   ],
// })


import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' // ye line add

export default defineConfig({
  plugins: [react(), tailwindcss()], // ye bhi add
})