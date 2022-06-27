# TDo's Strawbs

## Table of Contents

- [Overview](#overview)
- [Screenshot](#screenshot)
- [Built with](#-built-with)
- [Install](#install) (How it works)
- [Development mode](#development-mode)
- [Production  mode](#production-mode)
- [The Project Structure](#the-project-structure)
- [Author](#author)

## Overview

This website was created to model that of a custom strawberry business. The purpose of this challenge is to improve my coding skills by building realistic projects.

## Screenshot

![Suite landing page](https://github.com/Bayoumi-dev/Suite-landing-page/blob/master/src/assets/suite-preview.jpg)


## ⚙ Built with
#### Languages & Dependencies
- HTML5
- CSS3
- TailwindCSS
- JavaScript

## Install

### How it works
Clone the project or download ZIP
```bash
git clone https://github.com/Bayoumi-dev/Suite-landing-page.git
```
You must install `Node js` on the local machine, then install the [`dependencies`](package.json) used in this project. Run the command in the root
```bash
npm install
```
## Development mode
Start webpack dev server with:
```bash
npm run dev
```
The webpack dev server listening on `port: 3000`

## Production mode
Run the following command to generate the `dist` folder
 ```bash
npm run dev
```
## The Project Structure
```bash
├── .browserslistrc
├── babel.config.json
├── package-lock.json
├── package.json
├── postcss.config.js
├── README.md
├── webpack.dev.js
├── webpack.prod.js
└── src     
    ├── assets
    ├── js
    │   └── app.js
    ├── style
    │   ├── abstracts
    │   │   ├── breakpoints.scss
    │   │   ├── colors.var.scss
    │   │   ├── fonts.var.scss
    │   │   ├── functions.scss
    │   │   ├── index.scss
    │   │   └── mixins.scss
    │   ├── base 
    │   │   ├── index.scss
    │   │   ├── reset.scss
    │   │   └── typography.scss
    │   ├── components
    │   │   ├── buttons.scss
    │   │   └── index.scss
    │   ├── layout
    │   │   ├── animations.scss
    │   │   ├── container.scss
    │   │   ├── footer.scss
    │   │   ├── global.scss
    │   │   ├── header.scss
    │   │   └── index.scss
    │   ├── pages
    │   │   └── index.scss
    │   └── index.scss
    ├── views
    │   ├── favicon.ico
    │   └── index.html
    └── index.js
```

## Author
- Dylan Tran
