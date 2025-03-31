
import { withRouter } from "next/router";
import { getConfig } from "@builtjs/theme";
import Page from "@/lib/theme/page";

export default withRouter(Page);

export async function getStaticProps() {
  const config = await getConfig({
    pageName: 'home'
  });
  return {
    props: { config }
  };
}