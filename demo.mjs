import { richie } from "@cresteem/richie-js";
import { basename, join } from "path";

const type = "breadcrumb";
const inputFile = "pages/breadcrumb/sub-breadcrumb/notindex.html";
const outputFile = join("./dist", basename(inputFile));

richie(type, inputFile, outputFile);
