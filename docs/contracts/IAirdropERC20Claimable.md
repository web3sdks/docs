---
slug: /IAirdropERC20Claimable
title: IAirdropERC20Claimable
hide_title: true
displayed_sidebar: contracts
---

# IAirdropERC20Claimable

Web3sdks&#39;s `Airdrop` contracts provide a lightweight and easy to use mechanism to drop tokens. `AirdropERC20Claimable` contract is an airdrop contract for ERC20 tokens. It follows a pull mechanism for transfer of tokens, where allowlisted recipients can claim tokens from the contract.

## Methods

### claim

```solidity
function claim(address receiver, uint256 quantity, bytes32[] proofs, uint256 proofMaxQuantityForWallet) external nonpayable
```

Lets an account claim a given quantity of NFTs.

#### Parameters

| Name                      | Type      | Description                                                                                               |
| ------------------------- | --------- | --------------------------------------------------------------------------------------------------------- |
| receiver                  | address   | The receiver of the NFTs to claim.                                                                        |
| quantity                  | uint256   | The quantity of NFTs to claim.                                                                            |
| proofs                    | bytes32[] | The proof of the claimer&#39;s inclusion in the merkle root allowlist of the claim conditions that apply. |
| proofMaxQuantityForWallet | uint256   | The maximum number of NFTs an address included in an allowlist can claim.                                 |

## Events

### TokensClaimed

```solidity
event TokensClaimed(address indexed claimer, address indexed receiver, uint256 quantityClaimed)
```

_Emitted when tokens are claimed._

#### Parameters

| Name               | Type    | Description |
| ------------------ | ------- | ----------- |
| claimer `indexed`  | address | undefined   |
| receiver `indexed` | address | undefined   |
| quantityClaimed    | uint256 | undefined   |
