module.exports = {
  outDir: "./src/shared/ui/icons/assets/dist",
  native: true,
  typescript: true,
  prettier: true,
  prettierConfig: ".prettierrc.json",
  svgo: true,
  jsxRuntime: "automatic",
  filenameCase: "pascal",
  replaceAttrValues: {
    currentColor: "{props.color || props.fill || 'currentColor'}",
  },
};
