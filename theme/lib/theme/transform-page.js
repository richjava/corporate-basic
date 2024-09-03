const {
  fetchCollections,
  fetchEntry,
  getPopulateValue,
  getData,
} = require("./fetch");

const Page = require("./models/Page");
const Section = require("./models/Section");
const Template = require("./models/Template");

const SectionModel = new Section();


const transformPage = async (pageDoc, params) => {
  return new Promise(async (resolve) => {
    const page = new Page(pageDoc);
    let fullPage = {
      layout: {
        sections: [],
      },
      sections: [],
    };
    if (pageDoc && pageDoc.layout) {
      if (pageDoc.layout.contentIndex) {
        fullPage.layout.contentIndex = pageDoc.layout.contentIndex;
      }
      if (pageDoc.layout.sections) {
        for (let i = 0; i < pageDoc.layout.sections.length; i++) {
          const layoutSection = pageDoc.layout.sections[i];
          let section = await getSection(layoutSection);
          if (!section) {
            continue;
          }
          let transformedSection = await transformSection({section, pageDoc, params});
          transformedSection.template = section.template;
          fullPage.layout.sections.push(transformedSection);
        }
      }
    }
    await page.populate("sections");
    let entry = null;
    if (pageDoc.contentType && pageDoc.params) {
      entry = await fetchEntry(
        pageDoc.contentType.name,
        [{'slug': pageDoc.params.slug}]
      );
      if (pageDoc.contentType.config && pageDoc.contentType.config.populate) {
        entry = await getPopulateValue(entry, pageDoc.contentType.config.populate);
      }
    }
    for (let i = 0; i < page.doc.sections.length; i++) {
      const section = page.doc.sections[i];
      if (section && section.doc) {
        let s = await getSection(section.doc);
        if (!s) {
          continue;
        }
        let transformedSection = await transformSection({section: s, pageDoc, entry, params});
        transformedSection.template = section.template;
        fullPage.sections.push(transformedSection);
      }
    }
    resolve(fullPage);
  });
};

let getSection = (sectionDoc) => {
  return new Promise(async (resolve) => {
    let section = await SectionModel.findOne(sectionDoc.name);
    if (!section.doc.defaultTemplate) {
      console.log(
        `Error: No default template specified for section (${section.doc.name})`
      );
      return resolve(null);
    }
    const TemplateModel = new Template();
    if (section && section.doc) {
      let template = await TemplateModel.findOne(
        section.doc.defaultTemplate.name
      );
      section.template = template;
    }
    resolve(section);
  });
};

let transformSection = async ({section, pageDoc, entry, params}) => {
  return new Promise(async (resolve) => {
    let transformedSection = {};
    let content = {};
    if (entry) {
      content.entry = entry;
    }
    if (section.doc.collections) {
      content.collections = await fetchCollections(section.doc, params);
    }
    if (section.doc.data) {
      content.data = section.doc.data;
    }
    if (section.doc.namespace) {
      transformedSection.namespace = section.doc.namespace;
    }
    if (content) {
      transformedSection.content = content;
    }
    let globalData = await getData(["global"]).catch(function (err) {
      // do nothing
    });
    if (globalData) {
      content.global = globalData;
    }
    resolve(transformedSection);
  });
};

module.exports = { transformPage };
