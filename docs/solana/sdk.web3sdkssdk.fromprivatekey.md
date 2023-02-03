---
slug: /sdk.web3sdkssdk.fromprivatekey
title: Web3sdksSDK.fromPrivateKey() method
hide_title: true
displayed_sidebar: solana
---

<!-- Do not edit this file. It is automatically generated by API Documenter. -->

## Web3sdksSDK.fromPrivateKey() method

reate a new SDK instance connected with the given private key

**Signature:**

```typescript
static fromPrivateKey(network: Network, privateKey: string, storage?: Web3sdksStorage): Web3sdksSDK;
```

## Parameters

| Parameter  | Type                        | Description                                                      |
| ---------- | --------------------------- | ---------------------------------------------------------------- |
| network    | [Network](./sdk.network.md) | The network to connect to                                        |
| privateKey | string                      | The private key to use                                           |
| storage    | Web3sdksStorage             | <i>(Optional)</i> The storage provider to use or IPFS by default |

**Returns:**

[Web3sdksSDK](./sdk.web3sdkssdk.md)

an SDK instance