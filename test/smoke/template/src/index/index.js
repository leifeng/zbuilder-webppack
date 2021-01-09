import "../../common/index.js";
function a() {
  import("./haha").then((res) => {
    console.log(res.default());
  });
}

setTimeout(() => {
  a();
}, 3000);
