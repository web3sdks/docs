---
slug: /Staking1155
title: Staking1155
hide_title: true
displayed_sidebar: contracts
---

# Staking1155

note: This is a Beta release.

## Methods

### claimRewards

```solidity
function claimRewards(uint256 _tokenId) external nonpayable
```

Claim accumulated rewards.

_See {\_claimRewards}. Override that to implement custom logic. See {\_calculateRewards} for reward-calculation logic._

#### Parameters

| Name      | Type    | Description      |
| --------- | ------- | ---------------- |
| \_tokenId | uint256 | Staked token Id. |

### edition

```solidity
function edition() external view returns (address)
```

_Address of ERC1155 contract -- staked tokens belong to this contract._

#### Returns

| Name | Type    | Description |
| ---- | ------- | ----------- |
| \_0  | address | undefined   |

### getDefaultRewardsPerUnitTime

```solidity
function getDefaultRewardsPerUnitTime() external view returns (uint256 _rewardsPerUnitTime)
```

#### Returns

| Name                 | Type    | Description |
| -------------------- | ------- | ----------- |
| \_rewardsPerUnitTime | uint256 | undefined   |

### getDefaultTimeUnit

```solidity
function getDefaultTimeUnit() external view returns (uint256 _timeUnit)
```

#### Returns

| Name       | Type    | Description |
| ---------- | ------- | ----------- |
| \_timeUnit | uint256 | undefined   |

### getRewardTokenBalance

```solidity
function getRewardTokenBalance() external view returns (uint256 _rewardsAvailableInContract)
```

View total rewards available in the staking contract.

#### Returns

| Name                         | Type    | Description |
| ---------------------------- | ------- | ----------- |
| \_rewardsAvailableInContract | uint256 | undefined   |

### getRewardsPerUnitTime

```solidity
function getRewardsPerUnitTime(uint256 _tokenId) external view returns (uint256 _rewardsPerUnitTime)
```

#### Parameters

| Name      | Type    | Description |
| --------- | ------- | ----------- |
| \_tokenId | uint256 | undefined   |

#### Returns

| Name                 | Type    | Description |
| -------------------- | ------- | ----------- |
| \_rewardsPerUnitTime | uint256 | undefined   |

### getStakeInfo

```solidity
function getStakeInfo(address _staker) external view returns (uint256[] _tokensStaked, uint256[] _tokenAmounts, uint256 _totalRewards)
```

View all tokens staked and total rewards for a user.

#### Parameters

| Name     | Type    | Description                              |
| -------- | ------- | ---------------------------------------- |
| \_staker | address | Address for which to calculated rewards. |

#### Returns

| Name           | Type      | Description                     |
| -------------- | --------- | ------------------------------- |
| \_tokensStaked | uint256[] | List of token-ids staked.       |
| \_tokenAmounts | uint256[] | Amount of each token-id staked. |
| \_totalRewards | uint256   | Total rewards available.        |

### getStakeInfoForToken

```solidity
function getStakeInfoForToken(uint256 _tokenId, address _staker) external view returns (uint256 _tokensStaked, uint256 _rewards)
```

View amount staked and rewards for a user, for a given token-id.

#### Parameters

| Name      | Type    | Description                              |
| --------- | ------- | ---------------------------------------- |
| \_tokenId | uint256 | undefined                                |
| \_staker  | address | Address for which to calculated rewards. |

#### Returns

| Name           | Type    | Description                                 |
| -------------- | ------- | ------------------------------------------- |
| \_tokensStaked | uint256 | Amount of tokens staked for given token-id. |
| \_rewards      | uint256 | Available reward amount.                    |

### getTimeUnit

```solidity
function getTimeUnit(uint256 _tokenId) external view returns (uint256 _timeUnit)
```

#### Parameters

| Name      | Type    | Description |
| --------- | ------- | ----------- |
| \_tokenId | uint256 | undefined   |

#### Returns

| Name       | Type    | Description |
| ---------- | ------- | ----------- |
| \_timeUnit | uint256 | undefined   |

### indexedTokens

```solidity
function indexedTokens(uint256) external view returns (uint256)
```

_List of token-ids ever staked._

#### Parameters

| Name | Type    | Description |
| ---- | ------- | ----------- |
| \_0  | uint256 | undefined   |

#### Returns

| Name | Type    | Description |
| ---- | ------- | ----------- |
| \_0  | uint256 | undefined   |

### isIndexed

```solidity
function isIndexed(uint256) external view returns (bool)
```

_Mapping from token-id to whether it is indexed or not._

#### Parameters

| Name | Type    | Description |
| ---- | ------- | ----------- |
| \_0  | uint256 | undefined   |

#### Returns

| Name | Type | Description |
| ---- | ---- | ----------- |
| \_0  | bool | undefined   |

### setDefaultRewardsPerUnitTime

```solidity
function setDefaultRewardsPerUnitTime(uint256 _defaultRewardsPerUnitTime) external nonpayable
```

Set rewards per unit of time. Interpreted as x rewards per second/per day/etc based on time-unit.

_Only admin/authorized-account can call it._

#### Parameters

| Name                        | Type    | Description                |
| --------------------------- | ------- | -------------------------- |
| \_defaultRewardsPerUnitTime | uint256 | New rewards per unit time. |

### setDefaultTimeUnit

```solidity
function setDefaultTimeUnit(uint256 _defaultTimeUnit) external nonpayable
```

Set time unit. Set as a number of seconds. Could be specified as -- x _ 1 hours, x _ 1 days, etc.

_Only admin/authorized-account can call it._

#### Parameters

| Name              | Type    | Description    |
| ----------------- | ------- | -------------- |
| \_defaultTimeUnit | uint256 | New time unit. |

### setRewardsPerUnitTime

```solidity
function setRewardsPerUnitTime(uint256 _tokenId, uint256 _rewardsPerUnitTime) external nonpayable
```

Set rewards per unit of time. Interpreted as x rewards per second/per day/etc based on time-unit.

_Only admin/authorized-account can call it._

#### Parameters

| Name                 | Type    | Description                |
| -------------------- | ------- | -------------------------- |
| \_tokenId            | uint256 | ERC1155 token Id.          |
| \_rewardsPerUnitTime | uint256 | New rewards per unit time. |

### setTimeUnit

```solidity
function setTimeUnit(uint256 _tokenId, uint256 _timeUnit) external nonpayable
```

Set time unit. Set as a number of seconds. Could be specified as -- x _ 1 hours, x _ 1 days, etc.

_Only admin/authorized-account can call it._

#### Parameters

| Name       | Type    | Description       |
| ---------- | ------- | ----------------- |
| \_tokenId  | uint256 | ERC1155 token Id. |
| \_timeUnit | uint256 | New time unit.    |

### stake

```solidity
function stake(uint256 _tokenId, uint256 _amount) external nonpayable
```

Stake ERC721 Tokens.

_See {\_stake}. Override that to implement custom logic._

#### Parameters

| Name      | Type    | Description                |
| --------- | ------- | -------------------------- |
| \_tokenId | uint256 | ERC1155 token-id to stake. |
| \_amount  | uint256 | Amount to stake.           |

### stakers

```solidity
function stakers(uint256, address) external view returns (uint256 amountStaked, uint256 timeOfLastUpdate, uint256 unclaimedRewards, uint256 conditionIdOflastUpdate)
```

_Mapping from token-id and staker address to Staker struct. See {struct IStaking1155.Staker}._

#### Parameters

| Name | Type    | Description |
| ---- | ------- | ----------- |
| \_0  | uint256 | undefined   |
| \_1  | address | undefined   |

#### Returns

| Name                    | Type    | Description |
| ----------------------- | ------- | ----------- |
| amountStaked            | uint256 | undefined   |
| timeOfLastUpdate        | uint256 | undefined   |
| unclaimedRewards        | uint256 | undefined   |
| conditionIdOflastUpdate | uint256 | undefined   |

### stakersArray

```solidity
function stakersArray(uint256, uint256) external view returns (address)
```

_Mapping from token-id to list of accounts that have staked that token-id._

#### Parameters

| Name | Type    | Description |
| ---- | ------- | ----------- |
| \_0  | uint256 | undefined   |
| \_1  | uint256 | undefined   |

#### Returns

| Name | Type    | Description |
| ---- | ------- | ----------- |
| \_0  | address | undefined   |

### withdraw

```solidity
function withdraw(uint256 _tokenId, uint256 _amount) external nonpayable
```

Withdraw staked tokens.

_See {\_withdraw}. Override that to implement custom logic._

#### Parameters

| Name      | Type    | Description                   |
| --------- | ------- | ----------------------------- |
| \_tokenId | uint256 | ERC1155 token-id to withdraw. |
| \_amount  | uint256 | Amount to withdraw.           |

## Events

### RewardsClaimed

```solidity
event RewardsClaimed(address indexed staker, uint256 rewardAmount)
```

#### Parameters

| Name             | Type    | Description |
| ---------------- | ------- | ----------- |
| staker `indexed` | address | undefined   |
| rewardAmount     | uint256 | undefined   |

### TokensStaked

```solidity
event TokensStaked(address indexed staker, uint256 indexed tokenId, uint256 amount)
```

#### Parameters

| Name              | Type    | Description |
| ----------------- | ------- | ----------- |
| staker `indexed`  | address | undefined   |
| tokenId `indexed` | uint256 | undefined   |
| amount            | uint256 | undefined   |

### TokensWithdrawn

```solidity
event TokensWithdrawn(address indexed staker, uint256 indexed tokenId, uint256 amount)
```

#### Parameters

| Name              | Type    | Description |
| ----------------- | ------- | ----------- |
| staker `indexed`  | address | undefined   |
| tokenId `indexed` | uint256 | undefined   |
| amount            | uint256 | undefined   |

### UpdatedDefaultRewardsPerUnitTime

```solidity
event UpdatedDefaultRewardsPerUnitTime(uint256 oldRewardsPerUnitTime, uint256 newRewardsPerUnitTime)
```

#### Parameters

| Name                  | Type    | Description |
| --------------------- | ------- | ----------- |
| oldRewardsPerUnitTime | uint256 | undefined   |
| newRewardsPerUnitTime | uint256 | undefined   |

### UpdatedDefaultTimeUnit

```solidity
event UpdatedDefaultTimeUnit(uint256 oldTimeUnit, uint256 newTimeUnit)
```

#### Parameters

| Name        | Type    | Description |
| ----------- | ------- | ----------- |
| oldTimeUnit | uint256 | undefined   |
| newTimeUnit | uint256 | undefined   |

### UpdatedRewardsPerUnitTime

```solidity
event UpdatedRewardsPerUnitTime(uint256 indexed _tokenId, uint256 oldRewardsPerUnitTime, uint256 newRewardsPerUnitTime)
```

#### Parameters

| Name                  | Type    | Description |
| --------------------- | ------- | ----------- |
| \_tokenId `indexed`   | uint256 | undefined   |
| oldRewardsPerUnitTime | uint256 | undefined   |
| newRewardsPerUnitTime | uint256 | undefined   |

### UpdatedTimeUnit

```solidity
event UpdatedTimeUnit(uint256 indexed _tokenId, uint256 oldTimeUnit, uint256 newTimeUnit)
```

#### Parameters

| Name                | Type    | Description |
| ------------------- | ------- | ----------- |
| \_tokenId `indexed` | uint256 | undefined   |
| oldTimeUnit         | uint256 | undefined   |
| newTimeUnit         | uint256 | undefined   |