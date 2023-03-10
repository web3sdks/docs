---
slug: /sdk.web3sdkssdk
title: Web3sdksSDK class
hide_title: true
displayed_sidebar: solana
---

<!-- Do not edit this file. It is automatically generated by API Documenter. -->

## Web3sdksSDK class

The main entry-point for the web3sdks Solana SDK.

**Signature:**

```typescript
export declare class Web3sdksSDK
```

## Example

```jsx
import { Web3sdksSDK } from "@web3sdks/sdk/solana";

// Create SDK on specified network, and then pass a signer
const sdk = Web3sdksSDK.fromNetwork("devnet");
// Signer can be a keypair or browser wallet adapter
sdk.wallet.connect(signer);
```

## Constructors

| Constructor                                                              | Modifiers | Description                                                     |
| ------------------------------------------------------------------------ | --------- | --------------------------------------------------------------- |
| [(constructor)(connection, storage)](./sdk.web3sdkssdk._constructor_.md) |           | Constructs a new instance of the <code>Web3sdksSDK</code> class |

## Properties

| Property                                  | Modifiers             | Type                                                | Description                                                               |
| ----------------------------------------- | --------------------- | --------------------------------------------------- | ------------------------------------------------------------------------- |
| [auth](./sdk.web3sdkssdk.auth.md)         |                       | [WalletAuthenticator](./sdk.walletauthenticator.md) | Enable wallet-based server-side authentication                            |
| [deployer](./sdk.web3sdkssdk.deployer.md) |                       | [Deployer](./sdk.deployer.md)                       | Deploy new programs                                                       |
| [network](./sdk.web3sdkssdk.network.md)   | <code>readonly</code> | import("@metaplex-foundation/js").Cluster           | The currently connected network                                           |
| [registry](./sdk.web3sdkssdk.registry.md) |                       | Registry                                            | Handles getting data about accounts and programs associated with a wallet |
| [wallet](./sdk.web3sdkssdk.wallet.md)     |                       | [UserWallet](./sdk.userwallet.md)                   | Manage and get info about the connected wallet                            |

## Methods

| Method                                                                              | Modifiers           | Description                                                   |
| ----------------------------------------------------------------------------------- | ------------------- | ------------------------------------------------------------- |
| [fromNetwork(network, storage)](./sdk.web3sdkssdk.fromnetwork.md)                   | <code>static</code> | Create a new SDK instance for the specified network           |
| [fromPrivateKey(network, privateKey, storage)](./sdk.web3sdkssdk.fromprivatekey.md) | <code>static</code> | reate a new SDK instance connected with the given private key |
| [getNFTCollection(address)](./sdk.web3sdkssdk.getnftcollection.md)                  |                     | Get an SDK interface for an NFT Collection program            |
| [getNFTDrop(address)](./sdk.web3sdkssdk.getnftdrop.md)                              |                     | Get an SDK interface for an NFT Drop program                  |
| [getProgram(address)](./sdk.web3sdkssdk.getprogram.md)                              |                     | Get an SDK interface for a deployed program                   |
| [getProgram(address, programType)](./sdk.web3sdkssdk.getprogram_1.md)               |                     | Get an SDK interface for a deployed program                   |
| [getProgram(address, Idl)](./sdk.web3sdkssdk.getprogram_2.md)                       |                     | Get an SDK interface for a deployed program                   |
| [getProgramWithIdl(address, idl)](./sdk.web3sdkssdk.getprogramwithidl.md)           |                     | Get an SDK interface for a deployed program                   |
| [getToken(address)](./sdk.web3sdkssdk.gettoken.md)                                  |                     | Get an SDK interface for an Token program                     |
