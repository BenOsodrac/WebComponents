# OutSystems UI Web Components

The core concept of a Web Component is similar to that of components in frameworks such as React, Angular or Vue. It is a reusable UI building block that encapsulates all the HTML, CSS and any JavaScript-based logic required to render it. The big difference is that instead of relying on a specific JavaScript framework it leverages technologies natively provided by the browser so that your Web Components are framework agnostic. The technologies that Web Components leverage from the browser are features such as Custom Elements, Shadow DOM, ES Modules and HTML Templates.

The Custom Element API allows you to define new HTML tags with associated templates, styling and logic. The styling can be encapsulated using the Shadow DOM which makes your component ignore any styles applied outside of it.

## Install dependencies
Run `npm i` to install all dependencies.

## Development server
Run `npm start` for a dev server. Navigate to http://localhost:8080/. 

## Build
Run `npm run build-wc:webpack` to build the web component. The build artifacts will be stored in the dist/ directory.
