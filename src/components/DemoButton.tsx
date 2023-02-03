import React from "react";

type Props = {
  link: string;
  name: string;
};

export default function DemoButton({ link, name }: Props) {
  return (
    <a
      className="viewCodeBtn"
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      data-demo={name}
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        color: "#000",
      }}
    >
      <img
        src={"/assets/icons/web3sdks-icon.png"}
        className="viewCodeBtn__icon"
        style={{
          height: 24,
          width: 24,
          pointerEvents: "none",
          marginLeft: 12,
        }}
      />

      <div
        className="viewContractCodeBtn__divider"
        style={{
          height: 32,
          width: 1,
          backgroundColor: "rgba(0, 0, 0, 0.25)",
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
        <div style={{ marginRight: 14, fontWeight: 600 }}>View Demo</div>
      </div>
    </a>
  );
}
