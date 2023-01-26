import Credentials from '@auth/core/providers/credentials';
import { SvelteKitAuth } from '@auth/sveltekit';

export const handle = SvelteKitAuth({
    providers: [
        // @ts-expect-error issue https://github.com/nextauthjs/next-auth/issues/6174
        Credentials({
            authorize: async () => {
                return null;
            }
        })
    ],
    pages: {
        signIn: '/login'
    }
});
