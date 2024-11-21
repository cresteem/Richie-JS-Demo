import { richie } from "@cresteem/richie-js";
import { mkdirSync } from "fs";
import { basename, dirname, join, relative } from "path";

const type = "breadcrumb";
const inputFile = "pages/breadcrumb/sub-breadcrumb/notindex.html";
const outputFile = join(
  "./dist",
  relative(process.cwd(), dirname(inputFile)),
  basename(inputFile)
);

//making dest folder
mkdirSync(dirname(outputFile), { recursive: true });

richie([type], inputFile, outputFile);
