import React from "react";

type Props = {
  contractType: string;
  link?: string;
  additionalStyles?: React.CSSProperties;
  displayName?: string;
};

const contractTypeToLinkMapping = {
  "nft-drop": "https://web3sdks.com/deployer.web3sdks.eth/DropERC721",
  "nft-collection": "https://web3sdks.com/deployer.web3sdks.eth/TokenERC721",
  "edition-drop": "https://web3sdks.com/deployer.web3sdks.eth/DropERC1155",
  pack: "https://web3sdks.com/deployer.web3sdks.eth/Pack",
  multiwrap: "https://web3sdks.com/deployer.web3sdks.eth/Multiwrap",
  "signature-drop": "https://web3sdks.com/deployer.web3sdks.eth/SignatureDrop",
  edition: "https://web3sdks.com/deployer.web3sdks.eth/TokenERC1155",
  marketplace: "https://web3sdks.com/deployer.web3sdks.eth/Marketplace",
  token: "https://web3sdks.com/deployer.web3sdks.eth/TokenERC20",
  "token-drop": "https://web3sdks.com/deployer.web3sdks.eth/DropERC20",
  vote: "https://web3sdks.com/deployer.web3sdks.eth/VoteERC20",
  split: "https://web3sdks.com/deployer.web3sdks.eth/Split",
};

export default function DeployThisContractButton({
  link,
  contractType,
  additionalStyles,
  displayName,
}: Props) {
  function formatName(name: string) {
    // Replace - with space and capitalize
    let newName = name.replace("-", " ");

    // Capitalize first letter of each word
    newName = newName
      .split(" ")
      .map((word) => {
        return word.charAt(0).toUpperCase() + word.slice(1);
      })
      .join(" ");

    // Capitalize "Nft"
    if (newName.includes("Nft")) {
      newName = newName.replace("Nft", "NFT");
    }

    return newName;
  }

  return (
    <a
      className="deployContractBtn"
      href={contractTypeToLinkMapping[contractType] || link}
      target="_blank"
      rel="noopener noreferrer"
      data-contract={contractType}
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        ...additionalStyles,
      }}
    >
      <img
        src={"/assets/icons/web3sdks-icon.png"}
        style={{
          // Make it completely white
          filter: "brightness(0) invert(1)",
          height: 24,
          width: 24,
          pointerEvents: "none",
          marginLeft: 12,
        }}
      />

      {/* Horizontal white line 1px wide */}
      <div
        style={{
          height: 32,
          width: 1,
          backgroundColor: "rgba(255, 255, 255, 0.25)",
          marginRight: 12,
          marginLeft: 12,
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          display: "flex",
          alignItems: "center",
          pointerEvents: "none",
          whiteSpace: "nowrap",
        }}
      >
        <div style={{ marginRight: 14, fontWeight: 600 }}>
          Deploy {displayName || formatName(contractType)}
        </div>
      </div>
    </a>
  );
}
