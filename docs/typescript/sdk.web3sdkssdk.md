---
slug: /sdk.web3sdkssdk
title: Web3sdksSDK class
hide_title: true
displayed_sidebar: typescript
---

<!-- Do not edit this file. It is automatically generated by API Documenter. -->

## Web3sdksSDK class

The main entry point for the web3sdks SDK

**Signature:**

```typescript
export declare class Web3sdksSDK extends RPCConnectionHandler
```

**Extends:** RPCConnectionHandler

## Constructors

| Constructor                                                                    | Modifiers | Description                                                     |
| ------------------------------------------------------------------------------ | --------- | --------------------------------------------------------------- |
| [(constructor)(network, options, storage)](./sdk.web3sdkssdk._constructor_.md) |           | Constructs a new instance of the <code>Web3sdksSDK</code> class |

## Properties

| Property                                  | Modifiers | Type                                                | Description                                                          |
| ----------------------------------------- | --------- | --------------------------------------------------- | -------------------------------------------------------------------- |
| [auth](./sdk.web3sdkssdk.auth.md)         |           | [WalletAuthenticator](./sdk.walletauthenticator.md) | Enable authentication with the connected wallet                      |
| [deployer](./sdk.web3sdkssdk.deployer.md) |           | [ContractDeployer](./sdk.contractdeployer.md)       | New contract deployer                                                |
| [storage](./sdk.web3sdkssdk.storage.md)   |           | Web3sdksStorage                                     | Upload and download files from IPFS or from your own storage service |
| [wallet](./sdk.web3sdkssdk.wallet.md)     |           | [UserWallet](./sdk.userwallet.md)                   | Interact with the connected wallet                                   |

## Methods

| Method                                                                                       | Modifiers           | Description                                                                              |
| -------------------------------------------------------------------------------------------- | ------------------- | ---------------------------------------------------------------------------------------- |
| [fromPrivateKey(privateKey, network, options, storage)](./sdk.web3sdkssdk.fromprivatekey.md) | <code>static</code> | **<i>(BETA)</i>** Get an instance of the web3sdks SDK based on a private key.            |
| [fromSigner(signer, network, options, storage)](./sdk.web3sdkssdk.fromsigner.md)             | <code>static</code> | **<i>(BETA)</i>** Get an instance of the web3sdks SDK based on an existing ethers signer |
| [fromWallet(wallet, network, options, storage)](./sdk.web3sdkssdk.fromwallet.md)             | <code>static</code> | **<i>(BETA)</i>** Get an instance of the web3sdks SDK based on an AbstractWallet         |
| [getBalance(address)](./sdk.web3sdkssdk.getbalance.md)                                       |                     | Get the native balance of a given address (wallet or contract)                           |
| [getContract(address)](./sdk.web3sdkssdk.getcontract.md)                                     |                     | Get an instance of a Custom Web3sdksContract                                             |
| [getContract(address, contractType)](./sdk.web3sdkssdk.getcontract_1.md)                     |                     | Get an instance of a Custom Web3sdksContract                                             |
| [getContract(address, abi)](./sdk.web3sdkssdk.getcontract_2.md)                              |                     | Get an instance of a Custom Web3sdksContract                                             |
| [getContractFromAbi(address, abi)](./sdk.web3sdkssdk.getcontractfromabi.md)                  |                     | **<i>(BETA)</i>** Get an instance of a Custom contract from a json ABI                   |
| [getContractList(walletAddress)](./sdk.web3sdkssdk.getcontractlist.md)                       |                     | Return all the contracts deployed by the specified address                               |
| [getEdition(contractAddress)](./sdk.web3sdkssdk.getedition.md)                               |                     | Get an instance of a Edition contract                                                    |
| [getEditionDrop(contractAddress)](./sdk.web3sdkssdk.geteditiondrop.md)                       |                     | Get an instance of a Edition Drop contract                                               |
| [getMarketplace(contractAddress)](./sdk.web3sdkssdk.getmarketplace.md)                       |                     | Get an instance of a Marketplace contract                                                |
| [getMultiwrap(contractAddress)](./sdk.web3sdkssdk.getmultiwrap.md)                           |                     | Get an instance of a Pack contract                                                       |
| [getNFTCollection(contractAddress)](./sdk.web3sdkssdk.getnftcollection.md)                   |                     | Get an instance of a NFT Collection Drop contract                                        |
| [getNFTDrop(contractAddress)](./sdk.web3sdkssdk.getnftdrop.md)                               |                     | Get an instance of a NFT Drop contract                                                   |
| [getPack(contractAddress)](./sdk.web3sdkssdk.getpack.md)                                     |                     | Get an instance of a Pack contract                                                       |
| [getSignatureDrop(contractAddress)](./sdk.web3sdkssdk.getsignaturedrop.md)                   |                     | Get an instance of a Signature Drop contract                                             |
| [getSplit(contractAddress)](./sdk.web3sdkssdk.getsplit.md)                                   |                     | Get an instance of a Split contract                                                      |
| [getToken(contractAddress)](./sdk.web3sdkssdk.gettoken.md)                                   |                     | Get an instance of a Token contract                                                      |
| [getTokenDrop(contractAddress)](./sdk.web3sdkssdk.gettokendrop.md)                           |                     | Get an instance of a Token Drop contract                                                 |
| [getVote(contractAddress)](./sdk.web3sdkssdk.getvote.md)                                     |                     | Get an instance of a Vote contract                                                       |
| [resolveContractType(contractAddress)](./sdk.web3sdkssdk.resolvecontracttype.md)             |                     |                                                                                          |
| [updateSignerOrProvider(network)](./sdk.web3sdkssdk.updatesignerorprovider.md)               |                     | Update the active signer or provider for all contracts                                   |