import dynamic from "next/dynamic";

export async function getComponentMap(sections:any) {
  return new Promise(async (resolve) => {
    const map:any = {};
    for (let i = 0; i < sections.length; i++) {
      if(!sections[i].template){
        continue;
      }
      const template = sections[i].template.doc;
      const templateFileName = template.name.replace(/[A-Z]/g, function (match: string) {
        return '-' + match.toLowerCase();
      });
      map["section" + i] = import(
        `@/components/plugins/gh_richjava_blog/templates/${template.category}/${templateFileName}.tsx`
      );
    }
    resolve(map);
  });
}

export function getComponents(sections:any) {
  return new Promise((resolve) => {
    getComponentMap(sections).then((map:any) => {
      let comps = [];
      for (const key of Object.keys(map)) {
        let comp = dynamic(() => map[key], {
          suspense: false,
        });
        comps.push(comp);
      }
      resolve(comps);
    });
  });
}

export const collectionSlug = (entry: any) =>
entry._type ? entry._type.replace(/[A-Z]/g, (letter:any) => `-${letter.toLowerCase()}`) : '';

export const entrySlug = (entry: any) => entry && entry.slug && entry.slug.current ? entry.slug.current : entry.slug;