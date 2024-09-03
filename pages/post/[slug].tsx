import { GetStaticPaths, GetStaticProps } from 'next';
import { withRouter } from "next/router";
import { getConfig, fetchEntries } from "@builtjs/theme";
import Page from "lib/page";
import { entrySlug } from "builtjs-utils";

export default withRouter(Page);

export const getStaticPaths: GetStaticPaths = async () => {
  const name = 'post';
  const allEntries:any = await fetchEntries(name);
  return {
    paths: allEntries.entries.map((entry: any) => `/${name}/${entrySlug(entry)}`) ?? [],
    fallback: true,
  };
}

export const getStaticProps: GetStaticProps = async (context) => {
  const config = await getConfig({pageName: 'blogArticle'});
  config.params = context.params;
  return {
    props: { config }
  };
};