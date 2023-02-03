---
slug: /Deployer
title: Deployer
hide_title: true
displayed_sidebar: unity
---

## class `Deployer` {#class_web3sdks_1_1_deployer}

```
class Deployer
  : public Web3sdks.Routable
```

Deploy contracts to the blockchain.

### Summary

| Members                | Type     | Descriptions |
| ---------------------- | -------- | ------------ |
| Deployer               | function |              |
| DeployNFTCollection    | function |              |
| DeployNFTDrop          | function |              |
| DeploySignatureDrop    | function |              |
| DeployMultiwrap        | function |              |
| DeployEdition          | function |              |
| DeployEditionDrop      | function |              |
| DeployPack             | function |              |
| DeployToken            | function |              |
| DeployTokenDrop        | function |              |
| DeployMarketplace      | function |              |
| DeployReleasedContract | function |              |
| DeployFromContractUri  | function |              |

### Members

**`public inline `[`Deployer`](#class_web3sdks_1_1_deployer_1a6b3329ae934d3e34f566026e0ea08d57)`()`**

---

**`public inline async Task< string > `[`DeployNFTCollection`](#class_web3sdks_1_1_deployer_1aa5f5a63ed164970a0da39304a5954f3f)`(`[`NFTContractDeployMetadata`](docs/unity/NFTContractDeployMetadata.md#struct_web3sdks_1_1_n_f_t_contract_deploy_metadata)` metadata)`**

---

**`public inline async Task< string > `[`DeployNFTDrop`](#class_web3sdks_1_1_deployer_1a75149aaa6f1aaf8e73053cbddaff66c1)`(`[`NFTContractDeployMetadata`](docs/unity/NFTContractDeployMetadata.md#struct_web3sdks_1_1_n_f_t_contract_deploy_metadata)` metadata)`**

---

**`public inline async Task< string > `[`DeploySignatureDrop`](#class_web3sdks_1_1_deployer_1a70e5f8fcf89ca13690a024fafe8623ba)`(`[`NFTContractDeployMetadata`](docs/unity/NFTContractDeployMetadata.md#struct_web3sdks_1_1_n_f_t_contract_deploy_metadata)` metadata)`**

---

**`public inline async Task< string > `[`DeployMultiwrap`](#class_web3sdks_1_1_deployer_1ad28a15ef5b839dc2dfb8b228e1f238f9)`(`[`NFTContractDeployMetadata`](docs/unity/NFTContractDeployMetadata.md#struct_web3sdks_1_1_n_f_t_contract_deploy_metadata)` metadata)`**

---

**`public inline async Task< string > `[`DeployEdition`](#class_web3sdks_1_1_deployer_1a8e2a4237f0e1e80c3fa7ccb0b0760930)`(`[`NFTContractDeployMetadata`](docs/unity/NFTContractDeployMetadata.md#struct_web3sdks_1_1_n_f_t_contract_deploy_metadata)` metadata)`**

---

**`public inline async Task< string > `[`DeployEditionDrop`](#class_web3sdks_1_1_deployer_1a8a083fd980859810bf4face2079e0075)`(`[`NFTContractDeployMetadata`](docs/unity/NFTContractDeployMetadata.md#struct_web3sdks_1_1_n_f_t_contract_deploy_metadata)` metadata)`**

---

**`public inline async Task< string > `[`DeployPack`](#class_web3sdks_1_1_deployer_1a765b417f03a22b69ad46d81f0a236d3b)`(`[`NFTContractDeployMetadata`](docs/unity/NFTContractDeployMetadata.md#struct_web3sdks_1_1_n_f_t_contract_deploy_metadata)` metadata)`**

---

**`public inline async Task< string > `[`DeployToken`](#class_web3sdks_1_1_deployer_1a1387421772b61f9c5bbc38556a85ede6)`(`[`TokenContractDeployMetadata`](docs/unity/TokenContractDeployMetadata.md#struct_web3sdks_1_1_token_contract_deploy_metadata)` metadata)`**

---

**`public inline async Task< string > `[`DeployTokenDrop`](#class_web3sdks_1_1_deployer_1a89a2604382e1cfc46a084b37ab87ae94)`(`[`TokenContractDeployMetadata`](docs/unity/TokenContractDeployMetadata.md#struct_web3sdks_1_1_token_contract_deploy_metadata)` metadata)`**

---

**`public inline async Task< string > `[`DeployMarketplace`](#class_web3sdks_1_1_deployer_1afb7d424a176e2014a23496c4388ae323)`(`[`MarketplaceContractDeployMetadata`](docs/unity/MarketplaceContractDeployMetadata.md#struct_web3sdks_1_1_marketplace_contract_deploy_metadata)` metadata)`**

---

**`public inline async Task< string > `[`DeployReleasedContract`](#class_web3sdks_1_1_deployer_1a53a8b69454bd0f491dea15fd5f6feb97)`(string releaserAddress,string contractName,object[] constructorParams)`**

---

**`public inline async Task< string > `[`DeployFromContractUri`](#class_web3sdks_1_1_deployer_1aff5dbce0c6535630b25a55328df5e785)`(string uri,object[] constructorParams)`**

---
