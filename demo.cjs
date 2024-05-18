const { richie } = require("@cresteem/richie-js");
const { basename, join } = require("path");

const type = "article";
const inputFile = "pages/article.html";
const outputFile = join("./dist", basename(inputFile));

richie(type, inputFile, outputFile);
