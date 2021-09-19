const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
});

module.exports = {
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback.fs = false;
    }
    return config;
  },
  withMDX: {
    pageExtensions: ["js", "jsx", "mdx"],
  },
};
