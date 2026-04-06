require("@babel/register")({
  extensions: [".js"],
  ignore: [/node_modules/]
});

// Lataa testit Mocha-tyyliin
require("./test/add.test.js");
require("./test/camelCase.test.js");
require("./test/divide.test.js");
require("./test/endsWith.test.js");
require("./test/eq.test.js");
require("./test/isArrayLike.test.js");
// lisää loput testit tähän
