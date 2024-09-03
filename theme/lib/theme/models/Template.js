const Model = require("./Model");

class Template extends Model {
  constructor(doc, data) {
    super(doc, data, "template");
  }
}

module.exports = Template