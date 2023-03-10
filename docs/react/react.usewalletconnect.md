---
slug: /react.usewalletconnect
title: useWalletConnect() function
hide_title: true
displayed_sidebar: react
---

<!-- Do not edit this file. It is automatically generated by API Documenter. -->

## useWalletConnect() function

Hook for connecting to a mobile wallet with Wallet Connect

```javascript
import { useWalletConnect } from "@web3sdks/react";
```

## Example

We can allows user to connect their mobile wallets as follows:

```javascript
import { useWalletConnect } from "@web3sdks/react";

const App = () => {
  const connectWithWalletConnect = useWalletConnect();

  return (
    <button onClick={connectWithWalletConnect}>Connect WalletConnect</button>
  );
};
```

When users click this button, a popup will appear on the screen prompting them to scan a QR code from their phone to connect their mobile wallets. Once they scan the QR code from a wallet connect supported mobile wallet, their wallet will then be connected to the page as expected.

**Signature:**

```typescript
export declare function useWalletConnect(): () => Promise<{
  data?: import("wagmi").ConnectorData<any> | undefined;
  error?: Error | undefined;
}>;
```

**Returns:**

() =&gt; Promise&lt;{ data?: import("wagmi").ConnectorData&lt;any&gt; \| undefined; error?: Error \| undefined; }&gt;
