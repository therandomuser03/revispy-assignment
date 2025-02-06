// // server/trpc.ts
// import * as trpc from '@trpc/server';
// import * as trpcExpress from '@trpc/server/adapters/express';

// // Create a context for each request. Customize as needed.
// export const createContext = ({}: trpcExpress.CreateExpressContextOptions) => {
//   return {}; // You can add authentication data here later.
// };

// export type Context = ReturnType<typeof createContext>;

// // Export a base router instance using our context.
// export const t = trpc.router<Context>({});
