---
slug: /SafeERC20Upgradeable
title: SafeERC20Upgradeable
hide_title: true
displayed_sidebar: contracts
---

# SafeERC20Upgradeable

> SafeERC20

_Wrappers around ERC20 operations that throw on failure (when the token contract returns false). Tokens that return no value (and instead revert or throw on failure) are also supported, non-reverting calls are assumed to be successful. To use this library you can add a `using SafeERC20 for IERC20;` statement to your contract, which allows you to call the safe operations as `token.safeTransfer(...)`, etc._
