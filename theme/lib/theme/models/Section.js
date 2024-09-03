const Model = require("./Model");

class Section extends Model {
  constructor(doc, data) {
    super(doc, data, "section");
  }
}

module.exports = Section