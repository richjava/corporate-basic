import { GetStaticPaths, GetStaticProps } from 'next';
import { withRouter } from "next/router";
import { getConfig, getData } from "@builtjs/theme";
import Page from "../../lib/page";
import { pageTypes } from "../../lib/constants";

export default withRouter(Page);

export const getStaticPaths: GetStaticPaths = async () => {
  const pageType = 'template'
  let pageData = await getData("pages");
  let pages = pageData.reduce(
    (acc:any, page:any) =>
      page.type === pageType ? [...acc, `/${pageType}/${page.name}`] : acc,
    []
  );
  return {
    paths: pages,
    fallback: true,
  };
}

export const getStaticProps: GetStaticProps = async (context:any) => {
  const { slug } = context.params;
  const config = await getConfig({pageName: slug, type: pageTypes.TEMPLATE});
  config.params = context.params;
  return {
    props: { config }
  };
};

