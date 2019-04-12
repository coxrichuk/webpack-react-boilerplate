# Webpack minimal boilerplate

## What's included
- Configuration for a production and development environments
- Transpile both ES6+ and .ts to ES5
- Compile SCSS to CSS 
- [PostCSS](https://postcss.org/) autoprefix
- Managed static assets

## Getting started

### Requirements

Check you have the latest versions of `node.js` and `npm` installed

`$ node -v`

`$ npm -v `

To install node go to [Node JS](https://nodejs.org/en/), download and install.

#### Installation

`$ npm install`

#### Build development

`$ npm build:dev`

#### Build production

`$ npm build:prod`

All built files can be found in the `dist/` directory

#### Start local development server

`$ npm start`

Open `http://localhost:8080/` in your preferred browser

Change any file within `/src` and the browser will automatically refresh

### Config

#### Common config

`config/webpack.common.config.js`

This is the base configuration for your Webpack project

#### Development config

`config/webpack.dev.config.js`

This is the development config which extends the Common config

#### Production config

`config/webpack.dev.config.js`

This is the Production config environment which extends the Common config

#### Typescript config

`tsconfig.json`

#### PostCSS config

`postcss.config.js`

PostCSS is included by default for autoprefixing, but can be used along with many of the other plugins available from the [PostCSS](https://postcss.org/) community

<<<<<<< HEAD
=======
`$ npm install`
>>>>>>> 3ee48e58cae92a82834d69c6f940008018c8f6d3
