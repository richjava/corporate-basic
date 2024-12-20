import { GetStaticPaths, GetStaticProps } from "next";
  import { withRouter } from "next/router";
  import { getConfig, fetchEntries } from "@builtjs/theme";
  import Page from "@/lib/theme/page";
  
  export default withRouter(Page);
  
  export const getStaticPaths: GetStaticPaths = async () => {
    const entryData:any = await fetchEntries('author');
    return {
      paths:
        entryData.entries.map(
          (entry:any) => `/author/${entry.slug}`
        ) ?? [],
      fallback: true,
    };
  };
  
  export const getStaticProps: GetStaticProps = async ({params}) => {
    const config = await getConfig({pageName: 'authorArticle'});
    config.params = params;
    return {
      props: { config }
    };
  };