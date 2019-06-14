# Dapp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.9.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Install Truffle globally

Run `npm install -g truffle`.

## Create Truffle module truffle-config.js

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545, 
      network_id: "*"
    }
  },
  compilers: {
    solc: {
      version: '0.5.0',
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
};


## Truffle Commands

Run `truffle compile` to compile solidity 
Run `truffle migrate` to migrate solidity 

## Install Web3

Run `npm install web3`.
