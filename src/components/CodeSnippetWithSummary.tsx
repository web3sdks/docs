import React from "react";
import CodeSnippetSummary from "./CodeSnippetSummary";
import Web3sdksCodeSnippet from "./Web3sdksCodeSnippet";

type Props = {
  contract: string;
  name: string;
  isFeatureSnippet: boolean;
  isGetContractCode: boolean;
  showHr: boolean;
  dontShowSummary: boolean;
  isSolana: boolean;
  languages?: any;
  snippetOverrides: {
    [key: string]: string;
  };
};

export default function CodeSnippetWithSummary({
  contract,
  name,
  isFeatureSnippet = false,
  isGetContractCode = false,
  isSolana = false,
  showHr = true,
  dontShowSummary = false,
  snippetOverrides = {},
}: Props) {
  return (
    <>
      {!dontShowSummary && (
        <CodeSnippetSummary
          contract={contract}
          name={name}
          isFeatureSnippet={isFeatureSnippet}
          isGetContractCode={isGetContractCode}
          showHr={showHr}
        />
      )}

      <Web3sdksCodeSnippet
        contract={contract}
        name={name}
        isFeatureSnippet={isFeatureSnippet}
        isGetContractCode={isGetContractCode}
        isSolana={isSolana}
        showHr={showHr}
        snippetOverrides={snippetOverrides}
      />
    </>
  );
}
