/* Include assets */
import webpacksvg from './assets/images/webpack.svg';

/* Include CSS modules*/
import '../src/style.css';

/* Include SCSS modules */
import './styles/scss/main.scss';

/* Include JS modules */
import { Example } from './app/example';
import { ExampleTypescript } from './app/example-typescript';

/* Vanilla ES6 */
let example = new Example();

console.log('example.exampleFunction - ', example.exampleFunction());
console.log('example.exampleMethod - ', example.exampleMethod);

example.exampleMethod = 'Webpack boilerplate is awesome';

console.log('example.exampleFunction (updated) - ', example.exampleMethod);

/* Typescript ES6 */
let exampleTs = new ExampleTypescript();

console.log('exampleTs.exampleFunction - ', exampleTs.exampleFunction());
console.log('exampleTs.exampleMethod - ', exampleTs.exampleMethod);

exampleTs.exampleMethod = 'Webpack boilerplate with Typescript is awesome';

console.log('exampleTs.exampleMethod (updated) - ', exampleTs.exampleMethod);

/* Set the src on the image */
document.getElementById('webpack-svg').setAttribute('src', webpacksvg);