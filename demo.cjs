const { richie } = require("@cresteem/richie-js");
const { mkdirSync } = require("fs");
const { basename, join, dirname, relative } = require("path");

const type = "searchbox";
const inputFile = "pages/Sitesearch/searchpage.html";
const outputFile = join(
  "./dist",
  relative(process.cwd(), dirname(inputFile)),
  basename(inputFile)
);

//making dest folder
mkdirSync(dirname(outputFile), { recursive: true });

richie([type], inputFile, outputFile);
