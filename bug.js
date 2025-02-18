```javascript
// tailwind.config.js
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
}
```
```html
<!-- index.html -->
<div class="bg-gradient-to-r from-blue-500 to-purple-500"></div>
```