# React + Vite

npm create vite@latest my-project -- --template react
cd my-project
npm run dev

# Tailwind + Vite

npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

tailwind.config.js

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}


index.css

@tailwind base;
@tailwind components;
@tailwind utilities;

# json-server

npm install -g json-server
json-server --watch db.json --port 8000