const assert = require("assert");

describe("webpack.base.js test", () => {
  const baseConfig = require("../../lib/webpack.base.js");
  console.log(baseConfig);
  it("entry", () => {
    assert.strictEqual(baseConfig.entry.search,'E:/study/webpack/webpack-build/test/smoke/template/src/search/index.js');

    assert.strictEqual(baseConfig.entry.index,'E:/study/webpack/webpack-build/test/smoke/template/src/index/index.js');
  });
});
