/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],
  // But you can create a sidebar manually

  python: [
    {
      type: "doc",
      label: "Getting Started",
      id: "index",
    },
    {
      type: "doc",
      label: "Web3sdksSDK",
      id: "sdk",
    },
    {
      type: "doc",
      label: "Deploying Contracts",
      id: "contract-deployer",
    },
    {
      type: "doc",
      label: "Custom Contracts",
      id: "custom",
    },
    {
      type: "category",
      label: "Contracts",
      collapsed: false,
      link: {
        type: "generated-index",
        title: "Contracts",
        description: "Interfaces for on-chain contracts.",
        keywords: ["contracts"],
      },
      items: [
        {
          type: "doc",
          label: "NFT Collection",
          id: "nft-collection",
        },
        {
          type: "doc",
          label: "Edition",
          id: "edition",
        },
        {
          type: "doc",
          label: "Token",
          id: "token",
        },
        {
          type: "doc",
          label: "Marketplace",
          id: "marketplace",
        },
        {
          type: "doc",
          label: "NFT Drop",
          id: "nft-drop",
        },
        {
          type: "doc",
          label: "Edition Drop",
          id: "edition-drop",
        },
        {
          type: "doc",
          label: "Multiwrap",
          id: "multiwrap",
        },
      ],
    },
    {
      type: "category",
      label: "Contract Interfaces",
      collapsed: true,
      link: {
        type: "generated-index",
        title: "Contract Interfaces",
        description:
          "Contract interfaces that extend the functionality of contracts.",
        keywords: ["contracts", "shared-interfaces"],
      },
      items: [
        {
          type: "doc",
          label: "ERC 20",
          id: "erc20",
        },
        {
          type: "doc",
          label: "ERC 721",
          id: "erc721",
        },
        {
          type: "doc",
          label: "ERC 1155",
          id: "erc1155",
        },
        {
          type: "doc",
          label: "Direct Listing",
          id: "marketplace-direct",
        },
        {
          type: "doc",
          label: "Auction Listing",
          id: "marketplace-auction",
        },
        {
          type: "doc",
          label: "NFT Drop Claim Conditions",
          id: "nft-drop-claim-conditions",
        },
        {
          type: "doc",
          label: "Edition Drop Claim Conditions",
          id: "edition-drop-claim-conditions",
        },
      ],
    },
    {
      type: "category",
      label: "Signature Minting",
      collapsed: true,
      link: {
        type: "generated-index",
        title: "Signature Minting",
        description: "Signature based minting for contracts.",
        keywords: ["contracts", "signature-minting"],
      },
      items: [
        {
          type: "doc",
          label: "ERC 20 Signature Minting",
          id: "erc20-signature-minting",
        },
        {
          type: "doc",
          label: "ERC 721 Signature Minting",
          id: "erc721-signature-minting",
        },
        {
          type: "doc",
          label: "ERC 1155 Signature Minting",
          id: "erc1155-signature-minting",
        },
      ],
    },
    {
      type: "category",
      label: "Contract Settings",
      collapsed: true,
      link: {
        type: "generated-index",
        title: "Contract Settings",
        description: "Interfaces to manage contract settings.",
        keywords: ["contracts", "settings"],
      },
      items: [
        {
          type: "doc",
          label: "Contract Metadata",
          id: "contract-metadata",
        },
        {
          type: "doc",
          label: "Contract Roles",
          id: "contract-roles",
        },
        {
          type: "doc",
          label: "Platform Fee",
          id: "contract-platform-fee",
        },
        {
          type: "doc",
          label: "Royalties",
          id: "contract-royalty",
        },
        {
          type: "doc",
          label: "Primary Sales",
          id: "contract-sales",
        },
      ],
    },
    {
      type: "doc",
      label: "IPFS Storage",
      id: "ipfs-storage",
    },
    {
      type: "doc",
      label: "Wallet Authentication",
      id: "wallet-authenticator",
    },
    {
      type: "doc",
      label: "Contract Events",
      id: "contract-events",
    },
    {
      className: "hidden-category",
      type: "category",
      label: "Full Reference",
      collapsed: true,
      link: {
        type: "generated-index",
        title: "Full Reference",
        description: "Everything exported by the package",
      },
      items: [
        {
          type: "autogenerated",
          dirName: ".",
        },
      ],
    },
  ],
};

module.exports = sidebars;
