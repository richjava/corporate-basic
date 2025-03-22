import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import { useParams } from "next/navigation";
import Layout from "@/components/plugins/richjava_about-basic/layout";
import { getComponents } from "@/lib/builtjs-utils";
import { setupCrumbs } from "@/lib/theme/crumbs";
// const { transformPage, fetchEntry, fetchEntries } = require("@builtjs/theme");
const { transformPage, fetchEntry, fetchEntries } = require("../../theme");

const Page = ({ config }: any) => {
  const router = useRouter();
  const params = useParams();
  const [page, setPage] = useState<any>(null);
  const [sectionComps, setSectionComps] = useState<React.ComponentType[]>([]);
  const [layoutComps, setLayoutComps] = useState<React.ComponentType[]>([]);
  const hasSetUpCrumbs = useRef(false);

  useEffect(() => {
    if (!hasSetUpCrumbs.current) {
      setupCrumbs(router);
      hasSetUpCrumbs.current = true;
      setPage(null);
      setLayoutComps([]);
      init();
    }
  }, []);

  async function init() {
    if (!config) {
      return;
    }
    let page: any = await transformPage(config, params);
    if (!page) {
      return;
    }
    let [sectionComponents, layoutComponents] = await Promise.all([
      getComponents(page.sections),
      getComponents(page.layout.sections),
    ]);
    setPage(page);
    setSectionComps(sectionComponents);
    setLayoutComps(layoutComponents);
  }

  return (
    <>
      <Layout layoutComps={layoutComps} page={page}>
        {
          <>
            {page &&
              sectionComps.length > 0 &&
              sectionComps.map((Section: any, i: number) => {
                return (
                  page.sections[i] && (
                    <Section
                      key={i}
                      api={
                        page.sections[i].template.doc.type === "dynamic"
                          ? { fetchEntry, fetchEntries }
                          : null
                      }
                      content={page.sections[i].content}
                    />
                  )
                );
              })}
          </>
        }
      </Layout>
    </>
  );
};

export default Page;
