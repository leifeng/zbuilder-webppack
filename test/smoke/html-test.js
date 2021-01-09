const glob = require("glob-all");

describe("checking html files", () => {
  it("should html files", (done) => {
    const files = glob.sync(["./dist/index.html", "./dist/search.html"]);
    if (files.length > 0) {
      done();
    } else {
      throw new Error("no html");
    }
  });
});
