# AngularStructure

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.0.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Tree Structure
.
├── e2e
│   └── src
└── src
    ├── app
    │   ├── core (@app)
    │   ├── data
    │   ├── layout
    │   ├── modules
    │   └── shared (@shared)
    ├── assets
    ├── environments ([@env] -> dev,uat,prod)
    └── styles
        └── fonts
        └── button   

## Install
Angular cli 
```bash
npm install -g @angular/cli #(fix version => npm install @angular/cli@9.1.9)
ng new my-name-project
```
Directory
```bash
ng generate module Core
ng generate module Shared
ng generate module Data
mkdir src/app/layout
mkdir src/app/modules
mkdir src/styles && mkdir src/styles/fonts && mkdir src/styles/button
```
