# DESMO-SDK
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
![](https://img.shields.io/badge/eslint-3A33D1?style=flat-square&logo=eslint&logoColor=white)
![](https://img.shields.io/badge/prettier-1A2C34?style=flat-square&logo=prettier&logoColor=F7BA3E)

**Overview**
> In the context of the [DESMO-LD](https://github.com/vaimee/desmo/tree/c763cec12f6c9060a9f1a3335ff4cff60ece3df2) an  important part of the project relay on storing The Thing Description Directories (TDDs) URLs on-chain so that they can be selected to provide the query result and increase its score, thus the DESMO-SDK is a tool that provides all the features required to interact with them.

- [DESMO-SDK](#desmo-sdk)
  - [Features](#features)
  - [Installation](#installation)
  - [Usage Examples](#usage-examples)
    - [DesmoHub contract](#desmohub-contract)
      - [Register your TDD](#register-your-tdd)
      - [Get the user's TDD](#get-the-users-tdd)
    - [Desmo Contract](#desmo-contract)
      - [Buy a query](#buy-a-query)
  - [Documentation](#documentation)
  - [Acknowledgments](#acknowledgments)
  - [Contact](#contact)

## Features
The Desmo-SDK provides an easy way to interact with the contracts defined in [desmo-contracts](https://github.com/vaimee/desmo-contracts). 
The Desmo-SDK provides functions to:
- Sign in your wallet with MetaMask or with a RPC provider
- Interact with the [Desmo-Hub](https://github.com/vaimee/desmo-contracts/blob/main/contracts/DesmoHub.sol) and [Desmo](https://github.com/vaimee/desmo-contracts/blob/main/contracts/DesmoHub.sol) contracts :
  - calling all the public function on the contracts
  - retrieve the results with an event based approach

## Installation

Starting using the Desmo-SDK is really easy, just use the following command in your Node.js project:

` npm i @vaimee/desmold-sdk `

## Usage Examples
#
### DesmoHub contract

#### Register your TDD

```ts
// Sign in with a RPC provider and a private key
const walletSigner: WalletSignerJsonRpc = new WalletSignerJsonRpc(chainURL);
walletSigner.signInWithPrivateKey(privateKEY);
// Otherwise Sign in with MetaMask
// const walletSigner = new WalletSignerMetamask(window.ethereum);
const desmohub: DesmoHub = new DesmoHub(walletSigner);
// state changing methods work with an event based approach
await desmohub.startListeners();
desmoHub.tddCreated$.subscribe(() => console.log('tdd created'));
await desmoHub.registerTDD(TDDUrl)

```

#### Get the user's TDD
```ts
// Sign in with a RPC provider and a private key
const walletSigner: WalletSignerJsonRpc = new WalletSignerJsonRpc(chainURL);
walletSigner.signInWithPrivateKey(privateKEY);
// Otherwise Sign in with MetaMask
// const walletSigner = new WalletSignerMetamask(window.ethereum);
const desmohub: DesmoHub = new DesmoHub(walletSigner);
// no need to listen for events -> not a state changing method
const myTDDObject = await desmohub.getTDD();

```
### Desmo Contract

#### Buy a query
```ts
// Sign in with a RPC provider and a private key
const walletSigner: WalletSignerJsonRpc = new WalletSignerJsonRpc(chainURL);
walletSigner.signInWithPrivateKey(privateKEY);
// Otherwise Sign in with MetaMask
// const walletSigner = new WalletSignerMetamask(window.ethereum);
const desmohub: DesmoHub = new DesmoHub(walletSigner);
const desmoContract = new DesmoContract(walletSigner)
const eventPromise = firstValueFrom(desmoHub.requestID$);
await desmoHub.getNewRequestID();
const event = await eventPromise;
await desmoContract.buyQuery(event.requestID, JSON.stringify(query), iExecDAppAddress);
```
For further usage examples we suggest to go check out our [front-end](https://github.com/vaimee/desmo-front) that make use of the Desmo-SDK

## Documentation 
Our code is well documented, if you have any doubt you can check our [documentation page](docs/modules.html)

## Acknowledgments

![DESMO-LD](https://github.com/vaimee/desmo/blob/c763cec12f6c9060a9f1a3335ff4cff60ece3df2/imgs/desmo-logo.png)

DESMO-SDK is founded by the [DESMO-LD project](https://ontochain.ngi.eu/content/desmo-ld) inside the [ONTOCHAIN](https://ontochain.ngi.eu/) european organization part of the [Next Generation Internet](https://www.ngi.eu/) fund.

## Contact

[VAIMEE](vaimee.com) - [@MaVaimee](https://twitter.com/MaVaimee) - [info@vaimee.com](mailto://info@vaimee.com)