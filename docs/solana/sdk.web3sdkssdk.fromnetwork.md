---
slug: /sdk.web3sdkssdk.fromnetwork
title: Web3sdksSDK.fromNetwork() method
hide_title: true
displayed_sidebar: solana
---

<!-- Do not edit this file. It is automatically generated by API Documenter. -->

## Web3sdksSDK.fromNetwork() method

Create a new SDK instance for the specified network

**Signature:**

```typescript
static fromNetwork(network: Network, storage?: Web3sdksStorage): Web3sdksSDK;
```

## Parameters

| Parameter | Type                        | Description                                                      |
| --------- | --------------------------- | ---------------------------------------------------------------- |
| network   | [Network](./sdk.network.md) | The network to connect to                                        |
| storage   | Web3sdksStorage             | <i>(Optional)</i> The storage provider to use or IPFS by default |

**Returns:**

[Web3sdksSDK](./sdk.web3sdkssdk.md)

an SDK instance
