Rails
1. bundle install
2. Rails s

React
1. npx create-react-app client
2. cd client
3. npm install -D tailwindcss
4. npx tailwindcss init
5. In Tailwind.config.js
    /** @type {import('tailwindcss').Config} */
    module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {},
    },
    plugins: [],
    }
6. In Index.css
    @tailwind base;
    @tailwind components;
    @tailwind utilities;