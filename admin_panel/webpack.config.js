{
  "name": "admin_panel",
  "version": "1.0.0",
  "scripts": {
    "build": "webpack --mode production",
    "build:dev": "webpack --mode development",
    "build:start": "cd dist && PORT=8080 npx serve",
    "start": "webpack serve --open --mode development",
    "start:live": "webpack serve --open --mode development --live-reload --hot"
  },
  "license": "MIT",
  "author": {
    "name": "Jack Herrington",
    "email": "jherr@pobox.com"
  },
  "devDependencies": {
    "@babel/core": "^7.15.8",
    "@babel/plugin-transform-runtime": "^7.15.8",
    "@babel/preset-env": "^7.15.8",
    "@babel/preset-react": "^7.14.5",
    "autoprefixer": "^10.1.0",
    "babel-loader": "^8.2.2",
    "css-loader": "^6.3.0",
    "dotenv-webpack": "^8.0.1",
    "file-loader": "^6.2.0",
    "html-webpack-plugin": "^5.3.2",
    "postcss": "^8.2.1",
    "postcss-loader": "^4.1.0",
    "style-loader": "^3.3.0",
    "tailwindcss": "^3.4.1",
    "webpack": "^5.57.1",
    "webpack-cli": "^4.10.0",
    "webpack-dev-server": "^4.3.1"
  },
  "dependencies": {
    "@babel/runtime": "^7.13.10",
    "chart.js": "^4.4.2",
    "react": "^18.2.0",
    "react-chartjs-2": "^5.2.0",
    "react-dom": "^18.2.0",
    "react-router-dom": "^6.23.0"
  }
}
