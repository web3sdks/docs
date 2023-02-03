// Read in the react snippets
import reactSnippets from "../../submodules/web3/packages/react/docs/evm/snippets.json" assert { type: "json" };

// Takes in a two keys and returns the react snippet defined here for that value
// TODO: This logic **Probably** doesn't belong here.
// We should add some way of mapping this in the react SDK itself
// that way it is more maintainable.

const reactMapping = {
  NFTCollectionImpl: {
    mainHook: "useNFTCollection",
    subHooks: {
      // methods
      burn: "",
      getAll: "useNFTs",
      mintBatchTo: "",
      mintTo: "useMintNFT",
      balanceOf: "useNFTBalance",
      get: "useNFT",
      getOwned: "useOwnedNFTs",
      transfer: "",
      // properties
      royalties: "",
      signature: "",
    },
  },
  EditionImpl: {
    mainHook: "useEdition",
    subHooks: {
      // methods
      burn: "",
      getAll: "useNFTs",
      getOwned: "useOwnedNFTs",
      mintBatchTo: "",
      mintTo: "useMintNFT",
      airdrop: "",
      balanceOf: "useNFTBalance",
      get: "useNFT",
      transfer: "",
      // properties
      royalties: "",
      signature: "",
    },
  },
  TokenDropImpl: {
    mainHook: "useTokenDrop",
    subHooks: {
      // methods
      burn: "",
      claimTo: "",
      allowance: "",
      allowanceOf: "",
      balance: "",
      balanceOf: "useTokenBalance",
      get: "",
      setAllowance: "",
      totalSupply: "",
      transfer: "",
      transferBatch: "",
      transferFrom: "",
      // properties
      claimConditions: "",
    },
  },
  TokenImpl: {
    mainHook: "useToken",
    subHooks: {
      // methods
      burn: "",
      burnFrom: "",
      mintBatchTo: "",
      mintTo: "",
      allowance: "",
      allowanceOf: "",
      balance: "",
      balanceOf: "useTokenBalance",
      get: "",
      setAllowance: "",
      totalSupply: "",
      transfer: "",
      transferBatch: "",
      transferFrom: "",
      // properties
      signature: "",
    },
  },
  NFTDropImpl: {
    mainHook: "useNFTDrop",
    subHooks: {
      // methods
      burn: "",
      claimTo: "useClaimNFT",
      createBatch: "",
      getAll: "useNFTs",
      getAllClaimed: "useClaimedNFTs",
      getAllUnclaimed: "useUnclaimedNFTs",
      getOwned: "useOwnedNFTs",
      totalClaimedSupply: "useClaimedNFTSupply",
      totalUnclaimedSupply: "useUnclaimedNFTSupply",
      balanceOf: "useNFTBalance",
      get: "useNFT",
      transfer: "",
      // properties
      claimConditions: "",
      revealer: "",
      royalties: "",
    },
  },
  EditionDropImpl: {
    mainHook: "useEditionDrop",
    subHooks: {
      // methods
      burn: "",
      claimTo: "useClaimNFT",
      createBatch: "",
      getAll: "useNFTs",
      getOwned: "",
      airdrop: "",
      balanceOf: "useNFTBalance",
      get: "",
      transfer: "",
      // properties
      claimConditions: "",
      royalties: "",
    },
  },
  MarketplaceImpl: {
    mainHook: "useMarketplace",
    subHooks: {
      // methods
      buyoutListing: "",
      getActiveListings: "useActiveListings",
      getAllListings: "useListings",
      getListing: "useListing",
      setBidBufefrBps: "",
      setTimeBufferInsSeconds: "",
      // properties
      auction: "",
      direct: "",
    },
  },
  MarketplaceDirect: {
    mainHook: "useMarketplace",
    subHooks: {
      // methods
      acceptOffer: "",
      buyoutListing: "useBuyNow",
      cancelListing: "",
      createListing: "",
      makeOffer: "",
    },
  },
  MarketplaceAuction: {
    mainHook: "useMarketplace",
    subHooks: {
      // methods
      buyoutListing: "",
      cancelListing: "",
      closeListing: "",
      createListing: "",
      getWinner: "",
      getWinningBid: "useWinningBid",
      makeBid: "useMakeBid",
    },
  },
  SplitImpl: {
    mainHook: "useSplit",
    subHooks: {
      // methods
      balanceOf: "",
      balanceOfToken: "",
      distribute: "",
      distributeToken: "",
      getAllRecipients: "",
      withdraw: "",
    },
  },
  PackImpl: {
    mainHook: "usePack",
    subHooks: {
      // methods
      createTo: "",
      getAll: "useNFTs",
      getOwned: "useOwnedNFTs",
      getPackContents: "",
      open: "",
      airdrop: "",
      balanceOf: "useNFTBalance",
      get: "useNFT",
      transfer: "",
      // properties
      royalties: "",
    },
  },
  Vote: {
    mainHook: "useVote",
    subHooks: {
      // methods
      canExecute: "",
      execute: "",
      getAll: "",
      hasVoted: "",
      propose: "",
      vote: "",
    },
  },
  MultiwrapImpl: {
    mainHook: "useMultiwrap",
    subHooks: {
      // methods
      getAll: "useNFTs",
      getWrappedContents: "",
      unwrap: "",
      wrap: "",
      balanceOf: "useNFTBalance",
      get: "useNFT",
      transfer: "",
    },
  },
  SignatureDropImpl: {
    mainHook: "useSignatureDrop",
    subHooks: {
      // methods
      claimTo: "useClaimNFT",
      createBatch: "",
      getAll: "useNFTs",
      getAllClaimed: "useClaimedNFTs",
      getAllUnclaimed: "useUnclaimedNFTs",
      getOwned: "useOwnedNFTs",
      totalClaimedSupply: "useClaimedNFTSupply",
      totalUnclaimedSupply: "useUnclaimedNFTSupply",
      balanceOf: "useNFTBalance",
      get: "useNFT",
      transfer: "",
      // properties
      claimConditions: "",
      revealer: "",
      royalties: "",
      signature: "",
    },
  },
  ContractEvents: {
    mainHook: "useAllContractEvents",
    subHooks: {
      // methods
      addEventListener: "useContractEvents",
      removeEventListener: "",
      addTransactionListener: "",
      getAllEvents: "useAllContractEvents",
      getEvents: "useContractEvents",
      listenToAllEvents: "useAllContractEvents",
      removeAllListeners: "",
      removeEventListener: "",
      removeTransactionListener: "",
    },
  },
  ContractMetadata: {
    mainHook: "useContractMetadata",
    subHooks: {
      // methods
      get: "useContractMetadata",
      set: "",
      update: "",
    },
  },
  ContractRoles: {
    mainHook: "useRoleMembers",
    subHooks: {
      // methods
      get: "useRoleMembers",
      getll: "useAllRoleMembers",
      grant: "useGrantRole",
      revoke: "useRevokeRole",
      setAll: "useSetAllRoleMembers",
    },
  },
  SmartContract: {
    mainHook: "useContract",
    subHooks: {
      // methods
      call: "useContractWrite",
    },
  },
  UserWallet: {
    mainHook: "useContract",
    subHooks: {
      // methods
      getAddress: "useAddress",
    },
  },
  Web3sdksSDK: {
    mainHook: "useContract",
    subHooks: {
      // methods
      getContract: "useContract",
      call: "useContractWrite",
    },
  },
  SmartContract: {
    mainHook: "useContract",
    subHooks: {
      // methods
      call: "useContractWrite",
    },
  },
};

export default function createReactSnippet(contractName, methodName) {
  const mainHookName = reactMapping[contractName]?.mainHook;
  const reactSubhookName = reactMapping[contractName]?.subHooks[methodName];

  const reactObject = reactSnippets?.[mainHookName];

  const reactSubhooks = reactObject?.subhooks;

  const reactSnippet = reactSubhooks?.find((s) => s.name === reactSubhookName);

  return reactSnippet ? reactSnippet : {};
}
