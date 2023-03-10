---
slug: /IAirdropERC721
title: IAirdropERC721
hide_title: true
displayed_sidebar: contracts
---

# IAirdropERC721

Web3sdks&#39;s `Airdrop` contracts provide a lightweight and easy to use mechanism to drop tokens. `AirdropERC721` contract is an airdrop contract for ERC721 tokens. It follows a push mechanism for transfer of tokens to intended recipients.

## Methods

### addAirdropRecipients

```solidity
function addAirdropRecipients(IAirdropERC721.AirdropContent[] _contents) external nonpayable
```

#### Parameters

| Name       | Type                            | Description |
| ---------- | ------------------------------- | ----------- |
| \_contents | IAirdropERC721.AirdropContent[] | undefined   |

### airdrop

```solidity
function airdrop(uint256 paymentsToProcess) external nonpayable
```

Lets contract-owner set up an airdrop of ERC721 tokens to a list of addresses.

_The token-owner should approve target tokens to Airdrop contract, which acts as operator for the tokens._

#### Parameters

| Name              | Type    | Description                                |
| ----------------- | ------- | ------------------------------------------ |
| paymentsToProcess | uint256 | The number of airdrop payments to process. |

### getAllAirdropPayments

```solidity
function getAllAirdropPayments() external view returns (struct IAirdropERC721.AirdropContent[] contents)
```

Returns all airdrop payments set up -- pending, processed or failed.

#### Returns

| Name     | Type                            | Description |
| -------- | ------------------------------- | ----------- |
| contents | IAirdropERC721.AirdropContent[] | undefined   |

### getAllAirdropPaymentsFailed

```solidity
function getAllAirdropPaymentsFailed() external view returns (struct IAirdropERC721.AirdropContent[] contents)
```

Returns all pending airdrop failed.

#### Returns

| Name     | Type                            | Description |
| -------- | ------------------------------- | ----------- |
| contents | IAirdropERC721.AirdropContent[] | undefined   |

### getAllAirdropPaymentsPending

```solidity
function getAllAirdropPaymentsPending() external view returns (struct IAirdropERC721.AirdropContent[] contents)
```

Returns all pending airdrop payments.

#### Returns

| Name     | Type                            | Description |
| -------- | ------------------------------- | ----------- |
| contents | IAirdropERC721.AirdropContent[] | undefined   |

### getAllAirdropPaymentsProcessed

```solidity
function getAllAirdropPaymentsProcessed() external view returns (struct IAirdropERC721.AirdropContent[] contents)
```

Returns all pending airdrop processed.

#### Returns

| Name     | Type                            | Description |
| -------- | ------------------------------- | ----------- |
| contents | IAirdropERC721.AirdropContent[] | undefined   |

## Events

### AirdropPayment

```solidity
event AirdropPayment(address indexed recipient, IAirdropERC721.AirdropContent content)
```

Emitted when an airdrop payment is made to a recipient.

#### Parameters

| Name                | Type                          | Description |
| ------------------- | ----------------------------- | ----------- |
| recipient `indexed` | address                       | undefined   |
| content             | IAirdropERC721.AirdropContent | undefined   |

### RecipientsAdded

```solidity
event RecipientsAdded(IAirdropERC721.AirdropContent[] _contents)
```

Emitted when airdrop recipients are uploaded to the contract.

#### Parameters

| Name       | Type                            | Description |
| ---------- | ------------------------------- | ----------- |
| \_contents | IAirdropERC721.AirdropContent[] | undefined   |
