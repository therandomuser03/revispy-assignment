// server/router.ts
import { t } from './trpc';
import { z } from 'zod';

export const appRouter = t.mutation('saveUserSelections', {
  input: z.object({
    userEmail: z.string().email(),
    categories: z.array(z.string()),
  }),
  resolve({ input }) {
    // Here, you would implement saving to your database.
    console.log(`Saving selections for ${input.userEmail}:`, input.categories);
    return { success: true };
  },
});

// Export type definition of API for use in your client (src/trpc.ts).
export type AppRouter = typeof appRouter;
