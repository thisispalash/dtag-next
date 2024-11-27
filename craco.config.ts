import path from 'path';

const config = {
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  style: {
    postcss: {
      // mode: 'extends',
      // plugins: [
      //   require('tailwindcss'),
      //   require('autoprefixer'),
      // ],
      mode: 'file',
    },
  },
};

export default config;