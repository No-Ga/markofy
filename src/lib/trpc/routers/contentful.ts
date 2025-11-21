import { landingPageQuery } from "../../contentful/queries/landingPage.query";
import query from "../../contentful/client";
import { publicProcedure, router } from "../trpc";

export const contentfulRouter = router({
  landingPage: publicProcedure.query(async () => {
    const response = await query(landingPageQuery, {});
    return response.landingPageCollection?.items[0];
  }),
});
