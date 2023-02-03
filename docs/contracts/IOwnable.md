---
slug: /IOwnable
title: IOwnable
hide_title: true
displayed_sidebar: contracts
---

# IOwnable

Web3sdks&#39;s `Ownable` is a contract extension to be used with any base contract. It exposes functions for setting and reading who the &#39;owner&#39; of the inheriting smart contract is, and lets the inheriting contract perform conditional logic that uses information about who the contract&#39;s owner is.

## Methods

### owner

```solidity
function owner() external view returns (address)
```

_Returns the owner of the contract._

#### Returns

| Name | Type    | Description |
| ---- | ------- | ----------- |
| \_0  | address | undefined   |

### setOwner

```solidity
function setOwner(address _newOwner) external nonpayable
```

_Lets a module admin set a new owner for the contract. The new owner must be a module admin._

#### Parameters

| Name       | Type    | Description |
| ---------- | ------- | ----------- |
| \_newOwner | address | undefined   |

## Events

### OwnerUpdated

```solidity
event OwnerUpdated(address indexed prevOwner, address indexed newOwner)
```

_Emitted when a new Owner is set._

#### Parameters

| Name                | Type    | Description |
| ------------------- | ------- | ----------- |
| prevOwner `indexed` | address | undefined   |
| newOwner `indexed`  | address | undefined   |
