const alasql = require("alasql");
const { transformPage } = require("./transform-page");
const { getData } = require("./fetch");

async function getPage(config) {
  return new Promise(async (resolve) => {
    let page = await transformPage(config);
    resolve(page);
  });
}

async function getConfig({pageName, type}) {
  let typeString = '';
  if (type) {
    typeString = ` AND type = '${type}'`;
  }
  if (!pageName) {
    return null;
  }
  let pagesData = await getData("pages");
  if(!pagesData)return null;
  let res = alasql(`SELECT * FROM ? WHERE name = '${pageName}'${typeString}`, [
    pagesData,
  ]);
  let page = res[0];
  
  if (!page) {
    return null;
  }
  if (page.demoSections) {
    page.sections = page.demoSections;
  }
  let layoutData = await getData(["layout"]);
  if(!layoutData)return null;
  page.layout = layoutData;
  return page;
}

module.exports = {
  getPage,
  getConfig,
  getData
};
