import { BasePlugin, Document } from "v8r";
import yaml from "js-yaml";
import brainmatter from "brainmatter";

class MarkdownParser extends BasePlugin {
  static name = "v8r-plugin-markdown-parser";

  registerInputFileParsers() {
    console.log("Registering md file parser");
    return ["md"];
  }

  parseInputFile(contents, fileLocation, parser) {
    const brainmatter = require('brainmatter');
    const { html, data } = brainmatter(contents);

    console.log("In parseInputFile");

    if (parser === "md") {
      console.log("parser===md");
      return yaml.loadAll(data).map((doc) => new Document(doc));
    } else if (parser == null) {
      if (fileLocation.endsWith(".md") {
        console.log("endsWith .md");
        return yaml.loadAll(data).map((doc) => new Document(doc));
      }
    }
    console.log("fell through tests");
  }
}

export default MarkdownParser;
