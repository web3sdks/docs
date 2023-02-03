import React from "react";
import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";
import CodeBlock from "@theme/CodeBlock";

export default function Web3sdksCodeSnippet() {
  const installationSnippets = {
    javascript: `import { Web3sdksSDK } from "@web3sdks/sdk";

const sdk = Web3sdksSDK.fromPrivateKey(
  // Learn more about securely accessing your private key: https://docs.web3sdks.com/sdk/set-up-the-sdk/securing-your-private-key
  "<your-private-key-here>",
  "mumbai", // configure this to your network
);
`,

    python: `from web3sdks import Web3sdksSDK
from web3sdks.types.nft import NFTMetadataInput
import os

# Learn more about securely accessing your private key: https://docs.web3sdks.com/sdk/set-up-the-sdk/securing-your-private-key
PRIVATE_KEY = "<your-private-key-here>"

# Now you can create a new instance of the SDK with your private key
sdk = Web3sdksSDK.from_private_key(PRIVATE_KEY, "mumbai")`,

    go: `package main

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
  };

  // TODO import this from const or smthn
  const languageToHighlightMapping = {
    javascript: "typescript",
    python: "python",
    go: "go",
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
