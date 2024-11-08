const { override, addBabelPreset, addBabelPlugins } = require("customize-cra");

module.exports = override(
  addBabelPreset("@babel/preset-env"),
  addBabelPreset("@babel/preset-react"),
  addBabelPlugins(
    ["@babel/plugin-proposal-class-properties", { loose: true }],
    ["@babel/plugin-proposal-private-methods", { loose: true }],
    ["@babel/plugin-proposal-private-property-in-object", { loose: true }]
  )
);
