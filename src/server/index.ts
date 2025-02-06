// server/index.ts
import express from 'express';
import * as trpcExpress from '@trpc/server/adapters/express';
import { appRouter } from './router';
import { createContext } from './trpc';

const app = express();
const port = 4000;

app.use(express.json());

// Mount tRPC middleware at /trpc.
app.use(
  '/trpc',
  trpcExpress.createExpressMiddleware({
    router: appRouter,
    createContext,
  })
);

app.listen(port, () => {
  console.log(`tRPC server is running at http://localhost:${port}`);
});
