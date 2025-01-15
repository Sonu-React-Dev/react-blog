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

# create a new repository on the command line

echo "# e-com" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/Sonu-React-Dev/e-com.git
git push -u origin main

# push an existing repository from the command line

git remote add origin https://github.com/Sonu-React-Dev/e-com.git
git branch -M main
git push -u origin main