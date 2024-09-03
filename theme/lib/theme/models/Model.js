const alasql = require("alasql");
const { getData } = require("../fetch");
const pluralize = require('pluralize');

class Model {
  constructor(doc, data, name) {
    this.doc = doc;
    this.data = data;
    this.name = name;
    this.table = `${this.name}s`;
    this.dataMap = {};
  }

  async fetchData() {
    return getData([this.table]);
  }

  async populate(property, table) {
    return new Promise(async (resolve, reject) => {
      if (!this.doc) {
        return;
      }
      table = !table ? property : table;
      let populateData = await getData([table]);
      if (!populateData) reject();
      let isMultiple = pluralize.isPlural(property);
      if (isMultiple) {
        let entries = this.doc[property];
        let transformedEntries = [];
        for (let i = 0; i < entries.length; i++) {
          const entry = entries[i];
          if(!entry){
            continue;
          }
          let e = entry.doc ? entry.doc : entry;
          let transformedEntry = entry.doc
            ? entry
            : await this.getEntry(e.name, table, populateData);
          if (
            transformedEntry &&
            transformedEntry.doc.defaultTemplate &&
            transformedEntry.doc.defaultTemplate.name
          ) {
            let templatesData = await getData(["templates"]);
            let templateName =
              e.template && e.template.name
                ? e.template.name
                : transformedEntry.doc.defaultTemplate.name;
            let template = await this.getEntry(
              templateName,
              "templates",
              templatesData
            );
            if (!transformedEntry) {
              continue;
            }
            transformedEntry.template = template;
          }
          transformedEntries.push(transformedEntry);
        }
        this.doc[property] = transformedEntries;
      } else {
        if (this.doc) {
          name = this.doc[property];
        } else {
          name = this[property];
        }
        if (name) {
          this.doc.data[property] = await this.getEntry(
            name,
            table,
            populateData
          );
        }
      }
      resolve();
    });
  }

  async findOne(name) {
    return new Promise(async (resolve) => {
      if (!name) {
        return null;
      }
      if (!this.data) {
        this.data = await this.fetchData();
      }
      const res = alasql(`SELECT * FROM ? WHERE name = '${name}'`, [this.data]);
      this.doc = res.length ? res[0] : null;
      resolve(this);
    });
  }

  async findMany(filters) {
    return new Promise(async (resolve, reject) => {
      if (!this.data) {
        this.data = this.getData();
      }
      if (!this.data) reject();
      let res = alasql(
        `SELECT * FROM ?` + (filters.limit ? ` LIMIT ${filters.limit}` : ""),
        [this.data]
      );
      let entries = [];
      res.map((doc) => {
        let entry = new this.constructor(doc, this.data);
        entries.push(entry);
      });
      resolve(entries);
    });
  }

  getEntry(name, table, populateData) {
    return new Promise((resolve, reject) => {
      if (!populateData) reject();
      let res = alasql(`SELECT * FROM ? WHERE name = '${name}'`, [
        populateData,
      ]);
      let entry = res.length
        ? new Model(res[0], null, table.slice(0, -1))
        : null;
      resolve(entry);
    });
  }
}

module.exports = Model;
