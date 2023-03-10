---
slug: /react.usebatchestoreveal
title: useBatchesToReveal() function
hide_title: true
displayed_sidebar: react
---

<!-- Do not edit this file. It is automatically generated by API Documenter. -->

## useBatchesToReveal() function

**Signature:**

```typescript
export declare function useBatchesToReveal<
  TContract extends RevealableContract,
>(
  contract: RequiredParam<TContract>,
): import("@tanstack/react-query").UseQueryResult<
  import("@web3sdks/sdk").BatchToReveal[],
  unknown
>;
```

## Parameters

| Parameter | Type                                                       | Description                                                          |
| --------- | ---------------------------------------------------------- | -------------------------------------------------------------------- |
| contract  | [RequiredParam](./react.requiredparam.md)&lt;TContract&gt; | an instance of a [RevealableContract](./react.revealablecontract.md) |

**Returns:**

import("@tanstack/react-query").UseQueryResult&lt;import("@web3sdks/sdk").BatchToReveal\[\], unknown&gt;

a response object that gets the batches to still be revealed
