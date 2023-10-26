const { createGlobPatternsForDependencies } = require('@nx/react/tailwind');
const { join } = require('path');

const sharedTailwindConfig = require('../../tailwind.config');

/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [sharedTailwindConfig],
  content: [
    join(__dirname, 'src/**/*!(*.stories|*.spec).{ts,tsx,html}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
};
