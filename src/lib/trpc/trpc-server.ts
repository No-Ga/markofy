import { createContext } from "./context";
import { appRouter } from "./routers/app";

export function caller() {
  return appRouter.createCaller(createContext());
}