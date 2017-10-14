<h1>Electron-React-Typescript-Webpack Boilerplate</h1>

<h2>Introduction</h2>

So I wanted to learn how to write Electron apps and use React for presentation. There were quite a few boilerplates already out there that do a good job, but I couldn't find any that had Electron and React, and that used the TypeScript language and Webpack. So I created my own basic boilerplate.

<h2>Getting Started</h2>

I am using versions 8.x of NodeJS and 5.x of NPM in my development environment. 

<ul>
<li>Clone this repo</li>
<li>npm install</li>
<li>npm run start</li>
</ul>

<h2>Building</h2>
<p>
Webpack is used to build and compile the project. It runs through the linter before compiling the TypeScript. I have used Babel to get fully compatible JavaScript for Node. 
All required files are published to the <code>dist</code> folder.

To build the project run the command <code>npm run build</code>.
</p>

<h2>Testing</h2>
<p>
Jest is used for the testing. Jest is written by the same people that wrote React and it provides some really nice tools to help test React components. You can read more on their GitHub page.

You can create <code>.test.ts(x)</code> or <code>.spec.ts(x)</code> to write your tests in. There is a sample one included but it is pretty basic, and uses the snapshot ability of Jest. Jest will pick up any of these files in the <code>src</code> directory.

Tests and snapshots are published to the <code>__tests__</code> folder. Obsolete snapshots are set to be removed each test run.

To run the tests run the command <code>npm run test</code>.
</p>
<h2>Linting</h2>
<p>
There is a tslint configuration included which extends StandardJS standards. Each time the project is built or started, the linter is run.
</p>
<h2>Dist Folder Notes</h2>
<p>
<code>main.js</code> is the main entry point for the Electron app to be loaded. The Electron process loads this in, which in turn loads the <code>index.html</code> file. The index page contains a script reference to the <code>renderer.js</code> file.

This is where React steps in to load the 'Greeting' component, defined in the <code>components</code> directory.
</p>

<h2>Technologies Used</h2>
<ul>
<li><a href="https://electron.atom.io/">Electron</a></li>
<li><a href="https://reactjs.org/">React</a></li>
<li><a href="https://facebook.github.io/jest/">Jest</a></li>
<li><a href="https://webpack.js.org/">Webpack</a></li>
<li><a href="https://babeljs.io/">Babel</a></li>
<li><a href="https://www.typescriptlang.org/">TypeScript</a></li>
<li><a href="https://standardjs.com/">StandardJS</a></li>
</ul>
