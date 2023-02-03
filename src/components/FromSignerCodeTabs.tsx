import React from "react";
import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";
import CodeBlock from "@theme/CodeBlock";

export default function FromSignerCodeTabs() {
  const installationSnippets = {
    javascript: `import { Web3sdksSDK } from "@web3sdks/sdk";

// Instantiate the Web3sdksSDK using the signer
// the signer variable comes from a signer you have previously created,
// or from our React SDK's useSigner hook.
const sdk = Web3sdksSDK.fromSigner(signer, "mumbai");
`,

    python: `from web3sdks import Web3sdksSDK

# Now you can create a new instance of the SDK with the signer.
# Here, the signer variable comes from a signer you have previously created.
sdk = Web3sdksSDK("mumbai", signer)`,

    go: `// NOTE: Go does not support instantiating the SDK from a signer.
package main

import (
    "fmt"
    "encoding/json"

    "github.com/web3sdks/go-sdk/web3sdks"
)

func main() {
    // Get your private key securely (preferably from an environment variable)
    privateKey := "..."

    // Instantiate the SDK with your privateKey
    sdk, err := web3sdks.NewWeb3sdksSDK("mumbai", &web3sdks.SDKOptions{
        PrivateKey: privateKey,
    })
    if err != nil {
        panic(err)
    }
}`,

    unity: `// Unity does not support instantiating the SDK with a signer.
// Learn how to connect users wallets to your Unity app:
// https://docs.web3sdks.com/gamingkit/setting-up/connect-wallets`,
  };

  // TODO import this from const or smthn
  const languageToHighlightMapping = {
    javascript: "typescript",
    python: "python",
    go: "go",
    unity: "csharp",
  };

  return (
    <Tabs groupId="web3sdks-code-snippet" defaultValue={"javascript"}>
      {Object.keys(installationSnippets).map((language) => (
        <TabItem
          key={language}
          value={language}
          label={
            // capitalize first letter
            language.charAt(0).toUpperCase() + language.slice(1)
          }
        >
          <CodeBlock language={languageToHighlightMapping[language]}>
            {installationSnippets[language]}
          </CodeBlock>
        </TabItem>
      ))}
    </Tabs>
  );
}
