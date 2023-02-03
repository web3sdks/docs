---
slug: /sdk.web3sdkssdk.getedition
title: Web3sdksSDK.getEdition() method
hide_title: true
displayed_sidebar: typescript
---

<!-- Do not edit this file. It is automatically generated by API Documenter. -->

## Web3sdksSDK.getEdition() method

> Warning: This API is now obsolete.
>
> This method is deprecated and will be removed in a future major version. You should use instead.
>
> ```diff
> - const edition = await sdk.getEdition("0x1234...");
> + const edition = await sdk.getContract("0x1234...", "edition");
> ```

Get an instance of a Edition contract

**Signature:**

```typescript
getEdition(contractAddress: string): Promise<import("..").Edition>;
```

## Parameters

| Parameter       | Type   | Description                          |
| --------------- | ------ | ------------------------------------ |
| contractAddress | string | the address of the deployed contract |

**Returns:**

Promise&lt;import("..").[Edition](./sdk.edition.md)&gt;