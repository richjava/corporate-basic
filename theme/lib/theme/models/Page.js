const Model = require("./Model");

class Page extends Model {
  constructor(doc, data) {
    super(doc, data, "page");
  }
}

module.exports = Page