import React from "react";
import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";
import CodeBlock from "@theme/CodeBlock";

export default function Web3sdksCodeSnippet() {
  const installationSnippets = {
    javascript: `npm install @web3sdks/sdk ethers`,
    // react: `npm install @web3sdks/react @web3sdks/sdk ethers`,
    python: `pip install web3sdks-sdk`,
    // solidity: `npm install @web3sdks/contracts`,
    go: `go get github.com/web3sdks/go-sdk`,
    unity: `https://docs.web3sdks.com/gamingkit/setting-up/installation`,
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
          <CodeBlock language={`bash`}>
            {installationSnippets[language]}
          </CodeBlock>
        </TabItem>
      ))}
    </Tabs>
  );
}
