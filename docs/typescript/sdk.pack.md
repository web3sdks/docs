---
slug: /sdk.pack
title: Pack class
hide_title: true
displayed_sidebar: typescript
---

<!-- Do not edit this file. It is automatically generated by API Documenter. -->

## Pack class

Create lootboxes of NFTs with rarity based open mechanics.

## Example

```javascript
import { Web3sdksSDK } from "@web3sdks/sdk";

const sdk = new Web3sdksSDK("{{chainName}}");
const contract = await sdk.getContract("{{contract_address}}", "pack");
```

## Constructors

| Constructor                                                                                                     | Modifiers | Description                                              |
| --------------------------------------------------------------------------------------------------------------- | --------- | -------------------------------------------------------- |
| [(constructor)(network, address, storage, options, abi, chainId, contractWrapper)](./sdk.pack._constructor_.md) |           | Constructs a new instance of the <code>Pack</code> class |

## Properties

| Property                                     | Modifiers           | Type                                                                                                                            | Description         |
| -------------------------------------------- | ------------------- | ------------------------------------------------------------------------------------------------------------------------------- | ------------------- |
| [abi](./sdk.pack.abi.md)                     |                     | typeof ABI                                                                                                                      |                     |
| [contractRoles](./sdk.pack.contractroles.md) | <code>static</code> | readonly \["admin", "minter", "asset", "transfer"\]                                                                             |                     |
| [encoder](./sdk.pack.encoder.md)             |                     | [ContractEncoder](./sdk.contractencoder.md)&lt;PackContract&gt;                                                                 |                     |
| [erc1155](./sdk.pack.erc1155.md)             |                     | [Erc1155](./sdk.erc1155.md)&lt;PackContract&gt;                                                                                 |                     |
| [estimator](./sdk.pack.estimator.md)         |                     | [GasCostEstimator](./sdk.gascostestimator.md)&lt;PackContract&gt;                                                               |                     |
| [events](./sdk.pack.events.md)               |                     | [ContractEvents](./sdk.contractevents.md)&lt;PackContract&gt;                                                                   |                     |
| [metadata](./sdk.pack.metadata.md)           |                     | [ContractMetadata](./sdk.contractmetadata.md)&lt;PackContract, typeof PackContractSchema&gt;                                    |                     |
| [owner](./sdk.pack.owner.md)                 |                     | [ContractOwner](./sdk.contractowner.md)&lt;PackContract&gt;                                                                     |                     |
| [roles](./sdk.pack.roles.md)                 |                     | [ContractRoles](./sdk.contractroles.md)&lt;PackContract, typeof [Pack.contractRoles](./sdk.pack.contractroles.md)\[number\]&gt; |                     |
| [royalties](./sdk.pack.royalties.md)         |                     | [ContractRoyalty](./sdk.contractroyalty.md)&lt;PackContract, typeof PackContractSchema&gt;                                      | Configure royalties |

## Methods

| Method                                                                 | Modifiers | Description                                             |
| ---------------------------------------------------------------------- | --------- | ------------------------------------------------------- |
| [addPackContents(packId, packContents)](./sdk.pack.addpackcontents.md) |           | Add Pack Contents                                       |
| [create(metadataWithRewards)](./sdk.pack.create.md)                    |           | Create Pack                                             |
| [createTo(to, metadataWithRewards)](./sdk.pack.createto.md)            |           | Create Pack To Wallet                                   |
| [get(tokenId)](./sdk.pack.get.md)                                      |           | Get a single Pack                                       |
| [getAddress()](./sdk.pack.getaddress.md)                               |           |                                                         |
| [getAll(queryParams)](./sdk.pack.getall.md)                            |           | Get All Packs                                           |
| [getOwned(walletAddress)](./sdk.pack.getowned.md)                      |           | Get Owned Packs                                         |
| [getPackContents(packId)](./sdk.pack.getpackcontents.md)               |           | Get Pack Contents                                       |
| [getTotalCount()](./sdk.pack.gettotalcount.md)                         |           | Get the number of packs created                         |
| [isTransferRestricted()](./sdk.pack.istransferrestricted.md)           |           | Get whether users can transfer packs from this contract |
| [open(tokenId, amount)](./sdk.pack.open.md)                            |           | Open Pack                                               |

**Signature:**

```typescript
export declare class Pack extends StandardErc1155<PackContract>
```

**Extends:** [StandardErc1155](./sdk.standarderc1155.md)&lt;PackContract&gt;