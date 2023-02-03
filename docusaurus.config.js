// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/vsLight");
const darkCodeTheme = require("prism-react-renderer/themes/oceanicNext");

const npm2yarn = require("@docusaurus/remark-plugin-npm2yarn");
const disableCachePlugin = require("./plugins/disable-cache-plugin");
const path = require("path");

const baseUrl = process.env.BASE_URL || "/";

//@ts-check

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "web3sdks developer portal",
  tagline: "Get started with web3sdks by diving into our developer portal.",
  url: "https://docs.web3sdks.com",
  baseUrl,
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "thidweb-dev", // Usually your GitHub org/user name.
  projectName: "docs", // Usually your repo name.
  trailingSlash: false,
  webpack: {
    jsLoader: (isServer) => ({
      loader: require.resolve("swc-loader"),
      options: {
        jsc: {
          parser: {
            syntax: "typescript",
            tsx: true,
          },
          target: "es2017",
        },
        module: {
          type: isServer ? "commonjs" : "es6",
        },
      },
    }),
  },
  baseUrlIssueBanner: true,
  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars/onboarding.js"),
          id: "onboarding",
          path: "docs/onboarding",
          routeBasePath: "/",
          remarkPlugins: [[npm2yarn, { sync: true }]],
          sidebarCollapsed: false,
          editUrl: "https://github.com/web3sdks/docs/edit/main",
        },
        sitemap: {
          changefreq: "daily",
        },
        theme: {
          customCss: [require.resolve("./src/scss/custom.scss")],
        },
      }),
    ],
  ],
  plugins: [
    disableCachePlugin,
    [
      "ideal-image",
      /** @type {import('@docusaurus/plugin-ideal-image').PluginOptions} */
      ({
        quality: 70,
        max: 1030,
        min: 640,
        steps: 2,
        // Use false to debug, but it incurs huge perf costs
        disableInDev: true,
      }),
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "typescript",
        path: "docs/typescript",
        routeBasePath: "typescript",
        sidebarPath: require.resolve("./sidebars/typescript.js"),
        remarkPlugins: [[npm2yarn, { sync: true }]],
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "react",
        path: "docs/react",
        routeBasePath: "react",
        sidebarPath: require.resolve("./sidebars/react.js"),
        remarkPlugins: [[npm2yarn, { sync: true }]],
        // ... other options
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "storage",
        path: "docs/storage",
        routeBasePath: "storage-sdk",
        sidebarPath: require.resolve("./sidebars/storage.js"),
        remarkPlugins: [[npm2yarn, { sync: true }]],
        // ... other options
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "solana",
        path: "docs/solana",
        routeBasePath: "solana-sdk",
        sidebarPath: require.resolve("./sidebars/solana.js"),
        remarkPlugins: [[npm2yarn, { sync: true }]],
        // ... other options
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "contracts",
        path: "docs/contracts",
        routeBasePath: "contracts",
        sidebarPath: require.resolve("./sidebars/contracts.js"),
        remarkPlugins: [[npm2yarn, { sync: true }]],
        // ... other options
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "python",
        path: "docs/python",
        routeBasePath: "python",
        sidebarPath: require.resolve("./sidebars/python.js"),
        remarkPlugins: [[npm2yarn, { sync: true }]],
        editUrl: "https://github.com/web3sdks/docs/edit/main",
        // ... other options
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "go",
        path: "docs/go",
        routeBasePath: "go",
        sidebarPath: require.resolve("./sidebars/go.js"),
        remarkPlugins: [[npm2yarn, { sync: true }]],
        editUrl: "https://github.com/web3sdks/docs/edit/main",
        // ... other options
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "unity",
        path: "docs/unity",
        routeBasePath: "unity",
        sidebarPath: require.resolve("./sidebars/unity.js"),
        remarkPlugins: [[npm2yarn, { sync: true }]],
        editUrl: "https://github.com/web3sdks/docs/edit/main",
        // ... other options
      },
    ],
    "posthog-docusaurus",
    "docusaurus-plugin-sass",
    [
      "docusaurus-plugin-module-alias",
      {
        alias: {
          "@components": path.resolve(__dirname, "./src/components/"),
        },
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: "img/portal.png",
      algolia: {
        appId: "IAIE3FU2AD",
        apiKey: "1d9ebc991c049c913bedcf3d50916922",
        indexName: "web3sdks",
        contextualSearch: false,
      },
      posthog: {
        apiKey: "phc_HIF5bzMPpq4tUo8R6r9vMincxx3Nlg9z5udzl4hDnLD",
        appUrl: "https://a.web3sdks.com", // optional
        enableInDevelopment: true, // optional
      },
      colorMode: {
        respectPrefersColorScheme: true,
        defaultMode: "dark",
        // This removes light mode
        disableSwitch: false,
      },
      navbar: {
        logo: {
          alt: "web3sdks docs",
          src: "img/web3sdks-logo-transparent-black.svg",
          href: "/",
          srcDark: "img/web3sdks-logo-transparent-white.svg",
        },
      },
      footer: {
        style: "light",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "JavaScript / TypeScript",
                to: "/typescript",
              },
              {
                label: "React",
                to: "/react",
              },
              {
                label: "Storage",
                to: "/storage",
              },
              {
                label: "Contracts",
                to: "/contracts",
              },
              {
                label: "Go",
                to: "/go",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Discord",
                href: "https://discord.gg/KX2tsh9A",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/web3sdksdev",
              },
              {
                label: "GitHub",
                href: "https://github.com/web3sdks",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Dashboard",
                href: "https://web3sdks.com/dashboard",
              },
              {
                label: "Blog",
                href: "https://blog.web3sdks.com",
              },
              {
                label: "Guides",
                href: "/guides",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} web3sdks, Inc.`,
      },
      prism: {
        additionalLanguages: ["solidity", "csharp"],
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),

  scripts: [
    {
      src: "https://web3sdks.com/js/pl.js",
      defer: true,
      "data-domain": "docs.web3sdks.com",
      "data-api": "https://pl.web3sdks.com/api/event",
    },
  ],
};

module.exports = config;
