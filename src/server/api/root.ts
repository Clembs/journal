import { createTRPCRouter } from "./trpc";
import { journalRoutes } from "./routers/journal";
import { userRoutes } from "./routers/user";
import { privateRoutes } from "./routers/private";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here
 */
export const appRouter = createTRPCRouter({
  journal: journalRoutes,
  user: userRoutes,
  private: privateRoutes,
});

// export type definition of API
export type AppRouter = typeof appRouter;
