# Tailwind CSS Gradient Not Working
This repository demonstrates a bug where a Tailwind CSS linear gradient is not applied correctly to a div element.

## Bug Description
The gradient is defined using the `bg-gradient-to-r` class, but it's not rendering in the browser. The expected behavior is that the div element will have a smooth color transition from blue to purple. 

## Solution
The issue is that the `content` option in `tailwind.config.js` was not correctly configured to include the file containing the gradient class.  The solution involves correctly configuring the `content` array in the `tailwind.config.js` file to include the path to your HTML file (if your HTML is not in the `src` directory).