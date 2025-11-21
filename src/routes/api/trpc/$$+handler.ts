import type { Context } from "@marko/run";
import { fetchRequestHandler } from "@trpc/server/adapters/fetch";
import { appRouter } from "../../../lib/trpc/routers/app";
import { createContext } from "../../../lib/trpc/context";

export async function GET(context: Context) {
  return fetchRequestHandler({
    endpoint: "/api/trpc",
    req: context.request,
    router: appRouter,
    createContext: () => createContext(),
  });
}
export async function POST(context: Context) {
  return fetchRequestHandler({
    endpoint: "/api/trpc",
    req: context.request,
    router: appRouter,
    createContext: () => createContext(),
  });
}
