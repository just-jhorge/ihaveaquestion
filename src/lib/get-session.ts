import { cache } from "react";
import { auth } from "./auth";
import { headers } from "next/headers";

export const getSession = cache(async () => {
  return auth.api.getSession({ headers: await headers() });
});
