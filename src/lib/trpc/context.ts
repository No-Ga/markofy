import type { CreateHTTPContextOptions } from "@trpc/server/adapters/standalone";

export interface Context {
  // Add any context properties here if needed in the future
}

export function createContext(_opts?: CreateHTTPContextOptions): Context {
  return {};
}

export type ContextType = Context;

