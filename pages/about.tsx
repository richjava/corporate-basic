import { GetStaticProps } from 'next';
import { withRouter } from "next/router";
import { getConfig } from "@builtjs/theme";
import Page from "../lib/page";

export default withRouter(Page);

export const getStaticProps: GetStaticProps = async () => {
  const config = await getConfig({pageName: 'about'});
  return {
    props: { config }
  };
};