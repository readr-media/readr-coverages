module.exports = function (api) {
  api.cache(true);

  const presets = ['next/babel'];

  return {
    presets,
  };
};
