# Electron-React-Typescript-Webpack Boilerplate

## Introduction

So I wanted to learn how to write Electron apps and use React for presentation. There were quite a few boilerplates already out there that do a good job, but I couldn't find any that had Electron and React, and that used the TypeScript language and Webpack. So I created my own basic boilerplate.

## Getting Started

I am using versions 8.x of NodeJS and 5.x of NPM in my development environment. You will get an error in `renderer.tsx` if you don't, where the `Greeting` component is used. You can use a tool called ['node version manager'](https://github.com/creationix/nvm) if you want to keep older versions of node/npm installed, but have a play with this.

1. Clone this repo
2. npm install
3. npm run start

## Building

Webpack is used to build and compile the project. It runs through the linter before compiling the TypeScript. I have used Babel to get fully compatible JavaScript for Node. 
All required files are published to the `dist` folder.

To build the project run the command `npm run build`.


## Testing

Jest is used for the testing. Jest is written by the same people that wrote React and it provides some really nice tools to help test React components. You can read more on their GitHub page.

You can create `.test.ts(x)` or `.spec.ts(x)` to write your tests in. There is a sample one included but it is pretty basic, and uses the snapshot ability of Jest. Jest will pick up any of these files in the `src` directory.

Tests and snapshots are published to the `__tests__` folder. Obsolete snapshots are set to be removed each test run.

To run the tests run the command `npm run test`.

## Linting

There is a tslint configuration included which extends StandardJS standards. Each time the project is built or started, the linter is run.

## Dist Folder Notes

`main.js` is the main entry point for the Electron app to be loaded. The Electron process loads this in, which in turn loads the `index.html` file. The index page contains a script reference to the `renderer.js` file.

This is where React steps in to load the 'Greeting' component, defined in the `components` directory.


## Technologies Used

* [Electron](https://electron.atom.io/)
* [React](https://reactjs.org/)
* [Jest](https://facebook.github.io/jest/)
* [Webpack](https://webpack.js.org/)
* [Babel](https://babeljs.io/)
* [TypeScript](https://www.typescriptlang.org/)
* [StandardJS](https://standardjs.com/)
